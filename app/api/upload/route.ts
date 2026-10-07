import { NextRequest, NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth/session";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const sanitizedName = file.name
      .toLowerCase()
      .replace(/[^a-z0-9.]/g, "-")
      .replace(/-+/g, "-");
    const filename = `${Date.now()}-${sanitizedName}`;

    // 1. Jika Supabase dikonfigurasi, upload ke Supabase Storage bucket 'media'
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseServer();
      if (supabase) {
        const { data, error } = await supabase.storage
          .from("media")
          .upload(filename, buffer, {
            contentType: file.type || "image/jpeg",
            upsert: true,
          });

        if (!error && data?.path) {
          const { data: publicUrlData } = supabase.storage
            .from("media")
            .getPublicUrl(data.path);

          if (publicUrlData?.publicUrl) {
            return NextResponse.json({
              url: publicUrlData.publicUrl,
              filename,
              size: file.size,
            });
          }
        } else if (error) {
          console.warn("[upload] Supabase storage upload error:", error.message);
        }
      }
    }

    // 2. Fallback: simpan sebagai data URL jika file di bawah 1.5MB untuk preview instan
    if (file.size < 1.5 * 1024 * 1024) {
      const base64 = buffer.toString("base64");
      const dataUrl = `data:${file.type || "image/jpeg"};base64,${base64}`;
      return NextResponse.json({
        url: dataUrl,
        filename,
        size: file.size,
        warning:
          "Disimpan sebagai Data URL (Supabase Storage belum aktif/dibuat). Buat bucket 'media' publik di Supabase Storage untuk penyimpanan permanen.",
      });
    }

    return NextResponse.json(
      {
        error:
          "Ukuran file terlalu besar untuk fallback offline (>1.5MB). Hubungkan Supabase Storage bucket 'media' untuk file besar.",
      },
      { status: 400 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Gagal mengupload file" },
      { status: 500 }
    );
  }
}

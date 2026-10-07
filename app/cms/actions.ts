"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import {
  authenticateAdmin,
  createSessionToken,
  setSessionCookie,
  clearSessionCookie,
  getCurrentAdmin,
} from "@/lib/auth/session";
import { savePageContent, saveArticle, deleteArticle } from "@/lib/content/db";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase/server";
import type { Article } from "@/data/articles";

export async function loginAction(
  _prevState: any,
  formData: FormData
): Promise<{ error?: string }> {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  const { user, error } = await authenticateAdmin(username, password);

  if (error || !user) {
    return { error: error || "Login gagal." };
  }

  const token = await createSessionToken(user);
  await setSessionCookie(token);

  redirect("/cms");
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect("/cms/login");
}

export async function savePageAction(pageId: string, content: any) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { success: false, error: "Akses ditolak: Anda belum login." };
  }

  return savePageContent(pageId, content);
}

export async function saveArticleAction(article: Article) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { success: false, error: "Akses ditolak: Anda belum login." };
  }

  return saveArticle(article);
}

export async function deleteArticleAction(articleId: string) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { success: false, error: "Akses ditolak: Anda belum login." };
  }

  return deleteArticle(articleId);
}

export async function changePasswordAction(newPassword: string) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    return { success: false, error: "Akses ditolak: Anda belum login." };
  }

  if (!newPassword || newPassword.length < 6) {
    return { success: false, error: "Password minimal 6 karakter." };
  }

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error:
        "Supabase belum terhubung. Konfigurasikan file .env dan jalankan schema SQL untuk mengaktifkan manajemen admin di database.",
    };
  }

  const supabase = getSupabaseServer();
  if (!supabase) return { success: false, error: "Database tidak tersedia." };

  try {
    // 1. Coba update via Supabase Auth Admin jika user terdaftar di auth.users
    try {
      await supabase.auth.admin.updateUserById(admin.id, { password: newPassword });
    } catch {
      // Abaikan jika bukan id dari auth.users
    }

    // 2. Update di tabel public.admins
    const hash = await bcrypt.hash(newPassword, 10);
    await supabase
      .from("admins")
      .update({ password_hash: hash, updated_at: new Date().toISOString() })
      .or(`id.eq.${admin.id},username.eq.${admin.username}`);

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal mengubah password." };
  }
}

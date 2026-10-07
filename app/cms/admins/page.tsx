import React from "react";
import { getCurrentAdmin } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { User, ShieldCheck, Database, KeyRound } from "lucide-react";
import ChangePasswordForm from "./ChangePasswordForm";

export default async function CmsAdminsPage() {
  const admin = await getCurrentAdmin();
  const supabaseReady = isSupabaseConfigured();

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-4xl mx-auto w-full">
      <div className="pb-4 border-b border-[#14234d]">
        <span className="text-[10px] text-[#e5b842] font-bold uppercase tracking-wider bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
          Keamanan &amp; Akun
        </span>
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
          Pengaturan Akun &amp; Password
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Kelola profil dan ganti kata sandi admin untuk menjaga keamanan dashboard CMS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Info Akun Saat Ini */}
        <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 pb-3 border-b border-[#14234d]">
            <div className="w-11 h-11 rounded-xl bg-[#0b1638] border border-[#e5b842] flex items-center justify-center text-[#e5b842]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Akun Aktif Saat Ini</h2>
              <span className="text-xs text-[#e5b842] font-semibold">{admin?.name}</span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-[#14234d]">
              <span className="text-slate-400">Username:</span>
              <strong className="text-white font-mono">{admin?.username}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#14234d]">
              <span className="text-slate-400">Peran (Role):</span>
              <span className="text-[#e5b842] font-bold uppercase">{admin?.role}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#14234d]">
              <span className="text-slate-400">Penyimpanan:</span>
              <span className="text-slate-200">
                {supabaseReady ? "Tabel Supabase (admins)" : "Fallback Dummy (.env)"}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b1638] border border-[#1b2f69] text-[11px] text-slate-300 space-y-1">
            <strong className="text-white block font-semibold">Catatan Keamanan:</strong>
            <p>
              Website ini tidak menyediakan form registrasi publik agar orang luar tidak dapat membuat akun sembarangan. Akun baru dikelola oleh administrator database.
            </p>
          </div>
        </div>

        {/* Form Ganti Password */}
        <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 pb-3 border-b border-[#14234d]">
            <KeyRound className="w-4 h-4 text-[#e5b842]" />
            <h2 className="text-sm font-bold text-white">Ganti Password Admin</h2>
          </div>

          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

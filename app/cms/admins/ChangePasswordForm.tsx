"use client";

import React, { useState, useTransition } from "react";
import { KeyRound, Lock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { changePasswordAction } from "../actions";

export default function ChangePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setStatus({ type: "error", message: "Password minimal 6 karakter." });
      return;
    }
    if (newPassword !== confirmPassword) {
      setStatus({
        type: "error",
        message: "Konfirmasi password baru tidak cocok.",
      });
      return;
    }

    setStatus({ type: "idle" });
    startTransition(async () => {
      const res = await changePasswordAction(newPassword);
      if (res.success) {
        setStatus({
          type: "success",
          message: "Password berhasil diperbarui!",
        });
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setStatus({
          type: "error",
          message: res.error || "Gagal mengubah password.",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === "success" && (
        <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}
      {status.type === "error" && (
        <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
          Password Baru (Minimal 6 Karakter)
        </label>
        <div className="relative">
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Masukkan password baru"
            className="w-full pl-10 pr-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
          <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
          Ulangi Password Baru
        </label>
        <div className="relative">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Ketik ulang password baru"
            className="w-full pl-10 pr-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
          <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl inline-flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg transition-all disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Memproses...</span>
          </>
        ) : (
          <>
            <KeyRound className="w-4 h-4" />
            <span>Simpan Password Baru</span>
          </>
        )}
      </button>
    </form>
  );
}

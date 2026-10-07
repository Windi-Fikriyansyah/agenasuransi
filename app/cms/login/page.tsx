"use client";

import React, { useActionState, useState } from "react";
import { loginAction } from "../actions";
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

export default function CmsLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, {});
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#e5b842]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#1a3a8f]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Card */}
        <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md">
          {/* Logo Brand */}
          <div className="text-center space-y-2 mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#f5c542] to-[#b89328] p-0.5 shadow-[0_0_25px_rgba(229,184,66,0.3)]">
                <div className="w-full h-full bg-[#070f26] rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-[#e5b842]" />
                </div>
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Dashboard CMS
            </h1>
            <p className="text-xs text-slate-400">
              PT Niaga Jaminan Nusantara — Masuk untuk Kelola Konten
            </p>
          </div>

          {/* Error notification */}
          {state?.error && (
            <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          {/* Form */}
          <form action={formAction} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email atau Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  autoComplete="username"
                  placeholder="Masukkan email atau username"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842] transition-colors"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Masukkan password"
                  className="w-full pl-10 pr-10 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842] transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-200 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full mt-2 bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 gold-glow-btn cursor-pointer shadow-lg active:scale-95 transition-all disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memeriksa Akses...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back to main site */}
        <div className="text-center mt-5">
          <a
            href="/"
            className="text-xs text-slate-400 hover:text-[#e5b842] transition-colors"
          >
            &larr; Kembali ke Website Utama
          </a>
        </div>
      </div>
    </div>
  );
}

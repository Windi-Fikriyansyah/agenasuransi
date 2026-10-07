import React from "react";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  Image as ImageIcon,
  KeyRound,
  ExternalLink,
  ChevronRight,
  Database,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  Home,
  Info,
  Wrench,
  Phone,
  FileCheck2,
} from "lucide-react";
import { getCurrentAdmin } from "@/lib/auth/session";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { PAGE_LIST } from "@/lib/content/registry";
import { getArticles } from "@/lib/content/db";

const PAGE_ICONS: Record<string, any> = {
  settings: Sliders,
  home: Home,
  "tentang-kami": Info,
  layanan: Wrench,
  kontak: Phone,
  "syarat-ketentuan": FileCheck2,
  "blog-index": BookOpen,
};

export default async function CmsDashboardPage() {
  const admin = await getCurrentAdmin();
  const supabaseReady = isSupabaseConfigured();
  const articles = await getArticles();

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0b173d] via-[#081230] to-[#040816] rounded-2xl p-6 sm:p-8 border border-[#1b2f69] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#e5b842]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block">
              SELAMAT DATANG DI DASHBOARD CMS
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Halo, {admin?.name || "Admin"}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Anda dapat mengubah seluruh teks, foto, kontak, layanan, syarat ketentuan, dan artikel blog tanpa harus menyentuh kode program.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/50 text-xs font-bold px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Lihat Website Publik</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Halaman */}
        <div className="bg-[#070f26] rounded-xl p-5 border border-[#1b2f69] shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Halaman CMS</span>
            <span className="text-2xl font-extrabold text-white mt-1 block">
              {PAGE_LIST.length} Halaman
            </span>
            <span className="text-[11px] text-[#e5b842]">Dapat diedit instan</span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
            <FileText className="w-5 h-5" />
          </div>
        </div>

        {/* Total Artikel */}
        <div className="bg-[#070f26] rounded-xl p-5 border border-[#1b2f69] shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Total Artikel Blog</span>
            <span className="text-2xl font-extrabold text-white mt-1 block">
              {articles.length} Artikel
            </span>
            <Link href="/cms/articles" className="text-[11px] text-[#e5b842] hover:underline">
              Kelola artikel &rarr;
            </Link>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>

        {/* Subdomain Router */}
        <div className="bg-[#070f26] rounded-xl p-5 border border-[#1b2f69] shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Routing Subdomain</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-sm font-bold text-white">app.domain Aktif</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">
              Next.js 16 Proxy Router
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-emerald-400">
            <Globe2 className="w-5 h-5" />
          </div>
        </div>

        {/* Database Supabase */}
        <div className="bg-[#070f26] rounded-xl p-5 border border-[#1b2f69] shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Database Supabase</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  supabaseReady ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              <span className="text-sm font-bold text-white">
                {supabaseReady ? "Terhubung" : "Mode Default"}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-0.5">
              {supabaseReady ? "Postgres Cloud Ready" : "Jalankan schema SQL"}
            </span>
          </div>
          <div
            className={`w-11 h-11 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center ${
              supabaseReady ? "text-emerald-400" : "text-amber-400"
            }`}
          >
            <Database className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Guide: Subdomain app.domain & Database */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#070f26] border border-[#1b2f69] space-y-3">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <Globe2 className="w-4 h-4 text-[#e5b842]" />
          <span>Cara Kerja Subdomain <code className="text-[#e5b842]">app.domain</code>:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-[#0b1638] border border-[#16295c] space-y-1">
            <strong className="text-white block font-semibold">1. Pengaturan di Vercel / DNS:</strong>
            <p className="text-slate-300 leading-relaxed">
              Tambahkan domain utama (mis. <code className="text-[#e5b842]">niagajaminannusantara.co.id</code>) dan subdomain <code className="text-[#e5b842]">app.niagajaminannusantara.co.id</code> ke proyek Vercel yang sama.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-[#0b1638] border border-[#16295c] space-y-1">
            <strong className="text-white block font-semibold">2. Otomatisasi Next.js 16 Proxy:</strong>
            <p className="text-slate-300 leading-relaxed">
              Ketika pengunjung membuka <code className="text-[#e5b842]">app.domain</code>, sistem secara otomatis meroute langsung ke CMS ini dan menjaga sesi login tetap aman via HttpOnly cookies.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Edit Halaman Website */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Pilih Halaman Yang Ingin Diedit
          </h2>
          <p className="text-xs text-slate-400">
            Klik tombol &ldquo;Edit Konten&rdquo; untuk membuka formulir editor visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAGE_LIST.map((page) => {
            const IconCmp = PAGE_ICONS[page.id] || FileText;

            return (
              <div
                key={page.id}
                className="bg-[#070f26] rounded-2xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-200 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] group-hover:scale-105 transition-transform">
                      <IconCmp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-slate-400 bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
                      {page.route}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#e5b842] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {page.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#14234d] flex items-center justify-between">
                  <a
                    href={page.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                  >
                    <span>Preview</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <Link
                    href={`/cms/pages/${page.id}`}
                    className="bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-[#070f26] text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1 hover:brightness-110 transition-all"
                  >
                    <span>Edit Konten</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

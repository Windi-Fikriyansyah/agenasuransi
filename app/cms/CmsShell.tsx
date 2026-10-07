"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Image as ImageIcon,
  KeyRound,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Sliders,
  Home,
  Info,
  Wrench,
  Phone,
  FileCheck2,
} from "lucide-react";
import { logoutAction } from "./actions";
import type { AdminUser } from "@/lib/auth/session";

interface CmsShellProps {
  admin: AdminUser | null;
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { label: "Ringkasan", href: "/cms", icon: LayoutDashboard },
  {
    label: "Pengaturan Global",
    href: "/cms/pages/settings",
    icon: Sliders,
    badge: "Kontak & Menu",
  },
  { label: "Beranda", href: "/cms/pages/home", icon: Home },
  { label: "Tentang Kami", href: "/cms/pages/tentang-kami", icon: Info },
  { label: "Layanan Service", href: "/cms/pages/layanan", icon: Wrench },
  { label: "Kontak Kami", href: "/cms/pages/kontak", icon: Phone },
  { label: "Syarat & Ketentuan", href: "/cms/pages/syarat-ketentuan", icon: FileCheck2 },
  { label: "Blog & Artikel", href: "/cms/articles", icon: BookOpen },
  { label: "Halaman Blog (SEO/Header)", href: "/cms/pages/blog-index", icon: FileText },
  { label: "Galeri Media", href: "/cms/media", icon: ImageIcon },
  { label: "Ganti Password", href: "/cms/admins", icon: KeyRound },
];

export default function CmsShell({ admin, children }: CmsShellProps) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Jika di halaman login, tampilkan langsung tanpa shell
  if (pathname === "/cms/login" || !admin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 flex flex-col lg:flex-row">
      {/* ========================================================
          SIDEBAR DESKTOP
      ======================================================== */}
      <aside className="hidden lg:flex lg:flex-col w-72 bg-[#060c1d] border-r border-[#14234d] shrink-0 sticky top-0 h-screen overflow-y-auto">
        {/* Brand Header */}
        <div className="p-5 border-b border-[#14234d] flex items-center justify-between">
          <Link href="/cms" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#f5c542] to-[#b89328] p-0.5 shadow-md">
              <div className="w-full h-full bg-[#070f26] rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#e5b842]" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-sm text-white tracking-tight block">
                NJN CMS PANEL
              </span>
              <span className="text-[10px] text-[#e5b842] font-semibold block tracking-wider uppercase">
                Content Manager
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-3.5 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Menu Utama
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/cms"
                ? pathname === "/cms"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            const IconCmp = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-[#070f26] font-bold shadow-md shadow-amber-500/10"
                    : "text-slate-300 hover:text-white hover:bg-[#0b1638]"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <IconCmp className={`w-4 h-4 shrink-0 ${isActive ? "text-[#070f26]" : "text-[#e5b842]"}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && !isActive && (
                  <span className="text-[9px] bg-[#0b1638] text-slate-400 px-1.5 py-0.5 rounded border border-[#1b2f69]">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Sidebar: User info & logout */}
        <div className="p-3.5 border-t border-[#14234d] bg-[#050a18] space-y-2.5">
          <div className="flex items-center justify-between px-2 text-xs">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block">Login sebagai:</span>
              <span className="text-white font-bold truncate block">{admin.name}</span>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#0b1638] text-slate-300 hover:text-[#e5b842] border border-[#1b2f69] transition-colors"
              title="Buka Website Publik"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:text-white hover:bg-rose-950/60 border border-rose-900/40 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar (Logout)</span>
            </button>
          </form>
        </div>
      </aside>

      {/* ========================================================
          MOBILE TOPBAR
      ======================================================== */}
      <header className="lg:hidden sticky top-0 z-40 bg-[#060c1d] border-b border-[#14234d] px-4 py-3 flex items-center justify-between">
        <Link href="/cms" className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#e5b842]" />
          <span className="font-bold text-sm text-white">NJN CMS</span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0b1638] text-[#e5b842] border border-[#1b2f69]"
            title="Lihat Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-lg bg-[#0b1638] text-slate-200 border border-[#1b2f69]"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/80 backdrop-blur-sm pt-14">
          <div className="bg-[#060c1d] border-b border-[#14234d] p-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/cms"
                  ? pathname === "/cms"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const IconCmp = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-xs font-semibold ${
                    isActive
                      ? "bg-[#e5b842] text-[#070f26] font-bold"
                      : "text-slate-200 hover:bg-[#0b1638]"
                  }`}
                >
                  <IconCmp className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#14234d] flex items-center justify-between">
              <span className="text-xs text-slate-400">{admin.name}</span>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="text-xs text-rose-400 hover:text-rose-200 flex items-center gap-1 font-semibold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MAIN CONTENT AREA
      ======================================================== */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

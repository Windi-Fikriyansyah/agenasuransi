"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Phone, Menu, X } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const { openModal } = useModal();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari informasi tentang: "${searchQuery}"`);
    }
  };

  const handleTentangKamiClick = (e: React.MouseEvent) => {
    if (pathname === "/tentang-kami") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleSyaratKetentuanClick = (e: React.MouseEvent) => {
    if (pathname === "/syarat-ketentuan") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    if (pathname === "/blog") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleLayananClick = (e: React.MouseEvent) => {
    if (pathname === "/layanan-service" || pathname === "/layanan") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleKontakClick = (e: React.MouseEvent) => {
    if (pathname === "/kontak-kami" || pathname === "/kontak") {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white text-slate-800 shadow-md transition-all border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <Link href="/" onClick={handleHomeClick} className="flex items-center group py-1">
            <div className="relative transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="PT NIAGA JAMINAN NUSANTARA"
                width={220}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/" ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Home
            </Link>
            <Link
              href="/tentang-kami"
              onClick={handleTentangKamiClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/tentang-kami" ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Tentang Kami
            </Link>
            <Link
              href="/syarat-ketentuan"
              onClick={handleSyaratKetentuanClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/syarat-ketentuan" ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/layanan-service"
              onClick={handleLayananClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/layanan-service" || pathname === "/layanan" ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Layanan Service
            </Link>
            <Link
              href="/blog"
              onClick={handleBlogClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/blog" || pathname?.startsWith("/blog/") ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Blog
            </Link>

            <Link
              href="/kontak-kami"
              onClick={handleKontakClick}
              className={`transition-colors hover:text-[#b89328] ${pathname === "/kontak-kami" || pathname === "/kontak" ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                }`}
            >
              Kontak Kami
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-[#0b1536] hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              title="Cari"
              aria-label="Cari informasi"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={openModal}
              className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Konsultasi</span>
            </button>
          </div>

          {/* Mobile & Tablet Toggle (Search & Hamburger) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-[#b89328] rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cari informasi"
              title="Cari"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#b89328] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Menu Navigasi"
              title="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {searchOpen && (
          <div className="py-3 border-t border-slate-100">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari layanan (contoh: Bid Bond, Bank Garansi, Syarat)..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-[#d4af37]"
                  autoFocus
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-[#0a1536] hover:bg-[#112258] text-[#f5c542] text-xs font-bold rounded-lg cursor-pointer"
              >
                Cari
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-fadeIn">
          <Link
            href="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleHomeClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/" ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Home
          </Link>
          <Link
            href="/tentang-kami"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleTentangKamiClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/tentang-kami" ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Tentang Kami
          </Link>
          <Link
            href="/syarat-ketentuan"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleSyaratKetentuanClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/syarat-ketentuan" ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Syarat & Ketentuan
          </Link>
          <Link
            href="/layanan-service"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleLayananClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/layanan-service" || pathname === "/layanan" ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Layanan Service
          </Link>
          <Link
            href="/blog"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleBlogClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/blog" || pathname?.startsWith("/blog/") ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Blog
          </Link>
          <Link
            href="/kontak-kami"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleKontakClick(e);
            }}
            className={`block py-2 border-b border-slate-100 ${pathname === "/kontak-kami" || pathname === "/kontak" ? "text-[#b89328] font-bold" : "text-slate-700 font-medium hover:text-[#b89328]"
              }`}
          >
            Kontak Kami
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] text-[#070f26] font-extrabold py-3 rounded-md text-sm uppercase tracking-wider text-center cursor-pointer shadow-md"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

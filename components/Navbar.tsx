"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useModal } from "./ModalContext";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

interface NavbarProps {
  settings?: SettingsContent;
}

export default function Navbar({ settings = settingsDefaults }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const navLinks = settings.navbar?.links || settingsDefaults.navbar.links;
  const logoSrc = settings.branding?.logo || settingsDefaults.branding.logo;
  const companyName = settings.company?.name || settingsDefaults.company.name;
  const ctaLabel = settings.navbar?.ctaLabel || settingsDefaults.navbar.ctaLabel;
  const mobileCtaLabel = settings.navbar?.mobileCtaLabel || settingsDefaults.navbar.mobileCtaLabel;

  return (
    <header className="sticky top-0 z-40 bg-white text-slate-800 shadow-md transition-all border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center group py-1"
          >
            <div className="relative transition-transform group-hover:scale-105">
              <Image
                src={logoSrc}
                alt={companyName}
                width={220}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors hover:text-[#b89328] ${
                    isActive ? "text-[#b89328] font-bold" : "hover:text-[#b89328]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{ctaLabel}</span>
            </button>
          </div>

          {/* Mobile & Tablet Toggle (Hamburger Menu) */}
          <div className="flex lg:hidden items-center">
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
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-fadeIn">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
                className={`block py-2 border-b border-slate-100 ${
                  isActive
                    ? "text-[#b89328] font-bold"
                    : "text-slate-700 font-medium hover:text-[#b89328]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] text-[#070f26] font-extrabold py-3 rounded-md text-sm uppercase tracking-wider text-center cursor-pointer shadow-md"
            >
              {mobileCtaLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

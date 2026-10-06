"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Landmark,
  HardHat,
  Shield,
  UserCheck,
  Ship,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowRight,
  Clock,
  Layers,
  Award,
  Zap,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function LayananServicePage() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState<string>("semua");

  useEffect(() => {
    // Scroll mulus ke paling atas saat halaman Layanan dibuka
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } catch {
          window.scrollTo(0, 0);
        }
      });
    }
  }, []);

  const openWhatsApp = (layananName?: string) => {
    const message = layananName
      ? `Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi dan informasi penerbitan mengenai layanan: ${layananName}.`
      : "Halo PT Niaga Jaminan Nusantara, saya ingin berkonsultasi mengenai produk dan layanan penjaminan serta asuransi proyek.";
    window.open(
      `https://wa.me/6282113189343?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Structured Data Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://niagajaminannusantara.co.id/layanan-service#webpage",
        "url": "https://niagajaminannusantara.co.id/layanan-service",
        "name": "Produk & Layanan Kami - PT Niaga Jaminan Nusantara",
        "description":
          "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://niagajaminannusantara.co.id",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Layanan Service",
              "item": "https://niagajaminannusantara.co.id/layanan-service",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "serviceType": "Penerbitan Bank Garansi & Surety Bond",
        "provider": {
          "@type": "Organization",
          "name": "PT Niaga Jaminan Nusantara",
          "url": "https://niagajaminannusantara.co.id",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Katalog Produk & Layanan Penjaminan",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Surety Bond (Bid Bond, Performance Bond, Advance Payment Bond, Maintenance Bond)",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bank Garansi (Non-Collateral, Cash Collateral, Fasilitas Bank)",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Asuransi Konstruksi - CAR (Contractor All Risk / Construction All Risk)",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Asuransi Umum - CGL (Commercial General Liability), Properti",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Indemnity (Tanggung Jawab Profesional)",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cargo & Engineering (Pengangkutan Barang & Risiko Teknik)",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden">
        {/* ========================================================
            BAGIAN UTAMA: PRODUK & LAYANAN KAMI (SESUAI GAMBAR)
            Tanpa hero section terpisah - langsung ke konten utama!
        ======================================================== */}
        <section
          id="produk-layanan"
          className="py-10 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#060c1d] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Bersih Sesuai Desain Gambar */}
            <div className="mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#14234d]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1638] border border-[#1b2f69] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                <span className="text-[#e5b842] text-[11px] font-bold tracking-widest uppercase">
                  PT NIAGA JAMINAN NUSANTARA
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Produk &amp; Layanan Kami
              </h1>
              <p className="text-slate-300 text-xs sm:text-base md:text-lg mt-2 max-w-3xl leading-relaxed">
                Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda.
              </p>
            </div>

            {/* Grid 2 Kolom Representasi Desain Gambar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
              {/* ========================================================
                  KOLOM KIRI: KARTU SURETY BOND & BANK GARANSI
              ======================================================== */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                {/* 1. KARTU SURETY BOND */}
                <div className="bg-gradient-to-br from-[#0b173d] via-[#081230] to-[#050b1e] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#e5b842]/10 rounded-bl-full pointer-events-none blur-2xl group-hover:bg-[#e5b842]/15 transition-all" />

                  <div className="relative z-10 space-y-4 sm:space-y-5">
                    {/* Header Kartu */}
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Icon Bulat Dokumen Perisai */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#070e24] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                        <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <div className="bg-[#0e1d4d] border border-[#23408a] text-white text-sm sm:text-lg font-extrabold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-inner">
                          Surety Bond
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points Surety Bond */}
                    <div className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-4">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Bid Bond (Jaminan Penawaran)</span>
                      </div>
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Performance Bond (Jaminan Pelaksanaan)</span>
                      </div>
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Advance Payment Bond (Jaminan Uang Muka)</span>
                      </div>
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Maintenance Bond (Jaminan Pemeliharaan)</span>
                      </div>
                    </div>

                    {/* Slogan & Tombol Aksi */}
                    <div className="pt-3.5 sm:pt-4 border-t border-[#162758] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="italic font-serif text-[#e5b842] text-sm sm:text-lg font-semibold tracking-wide">
                        &ldquo;Jaminan yang Menguatkan Kepercayaan&rdquo;
                      </span>
                      <button
                        onClick={() => openWhatsApp("Surety Bond")}
                        className="text-xs bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/50 font-bold px-3.5 py-2.5 sm:py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Konsultasi</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. KARTU BANK GARANSI */}
                <div className="bg-gradient-to-br from-[#0b173d] via-[#081230] to-[#050b1e] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#e5b842]/10 rounded-bl-full pointer-events-none blur-2xl group-hover:bg-[#e5b842]/15 transition-all" />

                  <div className="relative z-10 space-y-4 sm:space-y-5">
                    {/* Header Kartu */}
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Icon Bulat Bank Pilar */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#070e24] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                        <Landmark className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <div className="bg-[#0e1d4d] border border-[#23408a] text-white text-sm sm:text-lg font-extrabold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-inner">
                          Bank Garansi
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points Bank Garansi */}
                    <div className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-4">
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Non-Collateral (Tanpa Setoran Tunai Penuh)</span>
                      </div>
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Cash Collateral</span>
                      </div>
                      <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>Fasilitas Bank (BUMN &amp; Bank Swasta Terkemuka)</span>
                      </div>
                    </div>

                    {/* Slogan & Tombol Aksi */}
                    <div className="pt-3.5 sm:pt-4 border-t border-[#162758] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="italic font-serif text-[#e5b842] text-sm sm:text-lg font-semibold tracking-wide">
                        &ldquo;Cepat, Fleksibel, Tanpa Ribet&rdquo;
                      </span>
                      <button
                        onClick={() => openWhatsApp("Bank Garansi")}
                        className="text-xs bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/50 font-bold px-3.5 py-2.5 sm:py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Konsultasi</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================
                  KOLOM KANAN: DAFTAR ASURANSI PROYEK & BISNIS
              ======================================================== */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#081230] via-[#070e24] to-[#040816] rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1b2f69] shadow-2xl flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="pb-2 border-b border-[#14234d]">
                    <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                      PRODUK ASURANSI LENGKAP
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                      Perlindungan Risiko Bisnis &amp; Konstruksi
                    </h3>
                  </div>

                  {/* 1. Asuransi Konstruksi */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <HardHat className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        Asuransi Konstruksi
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        CAR (Contractor All Risk)
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        (Construction All Risk)
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp("Asuransi Konstruksi CAR")}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>

                  {/* 2. Asuransi Umum */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        Asuransi Umum
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        CGL (Commercial General Liability)
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        Asuransi Properti, dan lainnya
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp("Asuransi Umum & CGL")}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>

                  {/* 3. Professional Indemnity */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        Professional Indemnity
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        (Tanggung Jawab Profesional)
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp("Professional Indemnity")}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>

                  {/* 4. Cargo & Engineering */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        Cargo &amp; Engineering
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        (Pengangkutan Barang &amp; Risiko Teknik)
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp("Cargo & Engineering")}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>

                  {/* 5. Asuransi Lainnya */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        Asuransi Lainnya
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Sesuai kebutuhan proyek dan bisnis Anda
                      </p>
                    </div>
                    <button
                      onClick={() => openWhatsApp("Asuransi Custom Lainnya")}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                PENJELASAN MENDALAM SETIAP PRODUK & MANFAAT
            ======================================================== */}
            <div className="pt-8 sm:pt-10 border-t border-[#14234d] space-y-8 sm:space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  INFORMASI DETAIL PRODUK
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                  Karakteristik &amp; Keunggulan Setiap Layanan
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pelajari fungsi dan kegunaan masing-masing jaminan agar tepat sasaran sesuai klausul Rencana Kerja dan Syarat-syarat (RKS) lelang Anda.
                </p>
              </div>

              {/* Grid 3 Kolom Penjelasan Komprehensif */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Detail 1: Bid Bond */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Jaminan Penawaran (Bid Bond)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Menjamin kesungguhan Principal dalam mengajukan penawaran lelang tender. Jika Principal mengundurkan diri setelah memenangkan tender atau menolak menandatangani kontrak, penjamin akan membayar ganti rugi sesuai nilai jaminan kepada Obligee.
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Masa laku: 30 - 180 hari kalender</span>
                  </div>
                </div>

                {/* Detail 2: Performance Bond */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Jaminan Pelaksanaan (Performance Bond)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Menjamin bahwa Principal akan menyelesaikan pekerjaan sesuai spesifikasi teknis, gambar kerja, dan jadwal waktu yang tercantum di dalam Kontrak Kerja/SPK (umumnya senilai 5% dari total nilai kontrak).
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Masa laku: Sejak SPK terbit hingga BAST-1</span>
                  </div>
                </div>

                {/* Detail 3: Advance Payment Bond */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Jaminan Uang Muka (Advance Payment Bond)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dipakai kontraktor untuk mencairkan uang muka (biasanya 20% - 30% nilai kontrak). Menjamin uang muka dipergunakan semestinya dan akan dikembalikan secara bertahap lewat pemotongan termin progres pekerjaan.
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Nilai jaminan: 100% dari nilai uang muka</span>
                  </div>
                </div>

                {/* Detail 4: Maintenance Bond */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Jaminan Pemeliharaan (Maintenance Bond)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sebagai pengganti retensi kas 5% setelah serah terima pertama (BAST 1). Menjamin perbaikan cacat mutu pekerjaan selama masa garansi (3 - 12 bulan) sehingga arus kas kontraktor tetap cair maksimal.
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Pencairan dana retensi kas 100%</span>
                  </div>
                </div>

                {/* Detail 5: CAR (Contractor All Risk) */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Asuransi CAR (Contractor All Risk)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Memberikan perlindungan all-risk terhadap kerusakan fisik proyek selama masa konstruksi (kebakaran, gempa, tanah longsor, roboh) dan perlindungan tuntutan pihak ketiga (Third Party Liability / TPL).
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Perlindungan material &amp; pihak ketiga</span>
                  </div>
                </div>

                {/* Detail 6: Bank Garansi Non-Collateral */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Bank Garansi Non-Collateral
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Fasilitas penerbitan warkat resmi bank umum tanpa perlu memblokir dana kas 100%. Membantu kontraktor yang sedang menangani banyak proyek sekaligus agar modal kerja tetap berputar leluasa.
                  </p>
                  <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                    <span>Legal, resmi &amp; diverifikasi bank</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                ALUR PENERBITAN CEPAT 4 LANGKAH
            ======================================================== */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#14234d]">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  PROSES MUDAH &amp; TRANSPARAN
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                  4 Langkah Cepat Penerbitan Jaminan
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 text-center space-y-2 sm:space-y-3 relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto text-sm sm:text-base">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-white">Kirim Dokumen</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Kirimkan salinan legalitas perusahaan dan dokumen tender (RKS/SPK/Kontrak) via WhatsApp atau email.
                  </p>
                </div>

                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 text-center space-y-2 sm:space-y-3 relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto text-sm sm:text-base">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-white">Analisis &amp; Draft</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tim analis menghitung tarif premi terbaik dan menerbitkan draft warkat untuk persetujuan (approval) Anda.
                  </p>
                </div>

                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 text-center space-y-2 sm:space-y-3 relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto text-sm sm:text-base">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-white">Penerbitan Asli</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Warkat resmi diterbitkan oleh bank atau asuransi rekanan lengkap dengan nomor register dan konfirmasi keabsahan.
                  </p>
                </div>

                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 text-center space-y-2 sm:space-y-3 relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto text-sm sm:text-base">
                    4
                  </div>
                  <h4 className="text-sm font-bold text-white">Pengiriman Warkat</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hardcopy warkat dikirim kilat ke kantor Anda di seluruh Indonesia, softcopy dikirim segera via WhatsApp/Email.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================
                CTA BANNER BAWAH: KONSULTASI PRODUK
            ======================================================== */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0b173d] via-[#091538] to-[#060c1e] border border-[#e5b842]/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  KONSULTASI GRATIS &amp; CEPAT
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Butuh Jaminan Tender Hari Ini?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Diskusikan kebutuhan proyek Anda bersama tim konsultan PT Niaga Jaminan Nusantara. Kami siap membantu kalkulasi premi dan pengurusan tanpa ribet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 justify-center">
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl inline-flex items-center gap-2 gold-glow-btn cursor-pointer shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Chat WhatsApp</span>
                </button>
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>Form Pengajuan</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

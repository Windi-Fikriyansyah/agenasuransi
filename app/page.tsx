"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Phone,
  MessageCircle,
  CheckCircle2,
  Zap,
  Coins,
  Award,
  ChevronRight,
  FileText,
  Building2,
  BadgeCheck,
  HardHat,
  Factory,
  Scale,
  Briefcase,
  Truck,
  Building,
  Wrench,
  Shield,
  Clock,
  Target,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function Home() {
  const { openModal } = useModal();

  const openWhatsAppDirect = () => {
    window.open(
      "https://wa.me/6282113189343?text=Halo%20PT%20Niaga%20Jaminan%20Nusantara,%20saya%20ingin%20konsultasi%20layanan%20Bank%20Garansi%20dan%20Surety%20Bond",
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 flex flex-col font-sans">
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section id="home" className="relative bg-[#060c1d] pt-12 pb-16 lg:py-24 overflow-hidden border-b border-[#14234d]">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#e5b842]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1a3a8f]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block">
                <span className="text-[#e5b842] text-xs sm:text-sm font-bold tracking-wider uppercase">
                  PT NIAGA JAMINAN NUSANTARA
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15]">
                Jasa Bank Garansi &amp; Surety Bond Terpercaya di Indonesia
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl text-justify sm:text-left">
                Layanan Penerbitan Bank Garansi dan Surety Bond cepat tanpa agunan (Non Collateral) dan dengan agunan (Collateral) untuk berbagai keperluan proyek pemerintah maupun swasta di seluruh wilayah Indonesia. Proses mudah, syarat ringan, legalitas resmi, dan terdaftar di OJK.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={openModal}
                  className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-md inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-lg"
                >
                  <span>KONSULTASI SEKARANG</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  onClick={openWhatsAppDirect}
                  className="border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-md inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#e5b842]" />
                  <span>Chat WhatsApp</span>
                </button>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>Tanpa Agunan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>Resmi OJK</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>Proses Cepat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>Se-Indonesia</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Column: Gold Handshake Medallion */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-blue-600/30 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition duration-700 animate-pulse" />

                <div className="relative aspect-square rounded-full p-2 bg-gradient-to-b from-amber-400/50 via-[#101e4a] to-[#040816] shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-300/60 relative bg-[#070f26]">
                    <Image
                      src="/images/gold-seal.jpg"
                      alt="Gold Handshake Medallion - PT Niaga Jaminan Nusantara"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION: APA ITU JASA SURETY BOND?
      ======================================================== */}
      <section id="pelayanan" className="bg-[#070f26] py-16 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Apa Itu Jasa Surety Bond?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Jasa surety bond merupakan layanan penerbitan jaminan proyek yang melibatkan tiga pihak:
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="text-[#e5b842] font-bold text-lg leading-none mt-1">•</span>
                <span>
                  <strong className="text-white">Obligee:</strong> pemilik proyek (pemberi kerja / instansi pemerintah atau swasta)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e5b842] font-bold text-lg leading-none mt-1">•</span>
                <span>
                  <strong className="text-white">Principal:</strong> kontraktor / pelaksana yang mengerjakan proyek
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e5b842] font-bold text-lg leading-none mt-1">•</span>
                <span>
                  <strong className="text-white">Surety:</strong> perusahaan asuransi penjamin resmi yang menerbitkan jaminan
                </span>
              </li>
            </ul>

            <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Melalui instrumen ini, pemilik proyek mendapatkan kepastian bahwa proyek akan selesai sesuai kontrak, sementara kontraktor dapat memenuhi persyaratan tender tanpa harus mengendapkan modal tunai berlebih.
              </p>
              <p>
                Layanan kami mempermudah proses ini secara legal, transparan, dan terpercaya untuk memastikan kelancaran bisnis dan reputasi perusahaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: FUNGSI JASA SURETY BOND RESMI (3 CARDS)
      ======================================================== */}
      <section id="fungsi" className="bg-[#060c1d] py-16 sm:py-20 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Fungsi Jasa Surety Bond Resmi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0b1638] rounded-xl p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="w-14 h-14 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-6 bg-[#070f26] shadow-[0_0_15px_rgba(229,184,66,0.25)] group-hover:shadow-[0_0_25px_rgba(229,184,66,0.45)] transition-all">
                <ShieldCheck className="w-7 h-7 text-[#e5b842]" />
              </div>
              <h3 className="text-lg font-bold text-[#e5b842] mb-3 group-hover:text-yellow-300 transition-colors">
                Memberikan Jaminan Kepastian Proyek
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Melindungi pemilik proyek dari risiko wanprestasi oleh kontraktor. Jaminan ini memberikan kepastian hukum dan finansial sepanjang masa pelaksanaan proyek hingga serah terima.
              </p>
            </div>

            <div className="bg-[#0b1638] rounded-xl p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="w-14 h-14 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-6 bg-[#070f26] shadow-[0_0_15px_rgba(229,184,66,0.25)] group-hover:shadow-[0_0_25px_rgba(229,184,66,0.45)] transition-all">
                <TrendingUp className="w-7 h-7 text-[#e5b842]" />
              </div>
              <h3 className="text-lg font-bold text-[#e5b842] mb-3 group-hover:text-yellow-300 transition-colors">
                Meningkatkan Kredibilitas Perusahaan
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Membantu kontraktor memperbesar peluang memenangkan tender dengan melampirkan jaminan resmi dari institusi penjamin terpercaya dan teregulasi OJK.
              </p>
            </div>

            <div className="bg-[#0b1638] rounded-xl p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="w-14 h-14 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-6 bg-[#070f26] shadow-[0_0_15px_rgba(229,184,66,0.25)] group-hover:shadow-[0_0_25px_rgba(229,184,66,0.45)] transition-all">
                <FileCheck2 className="w-7 h-7 text-[#e5b842]" />
              </div>
              <h3 className="text-lg font-bold text-[#e5b842] mb-3 group-hover:text-yellow-300 transition-colors">
                Menjadi Syarat Tender Pemerintah
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Memenuhi ketentuan pengadaan barang dan jasa pemerintah (LPSE, LKPP) maupun BUMN yang mewajibkan adanya jaminan penawaran dan jaminan pelaksanaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SECTION: MENGAPA SURETY BOND SEMAKIN DIBUTUHKAN
      ======================================================== */}
      <section className="bg-[#070f26] py-16 sm:py-20 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#1b2f69] shadow-2xl bg-[#091228] group">
                <Image
                  src="/images/banner-jaminan.jpg"
                  alt="Banner Jaminan Bank Garansi dan Asuransi PT Niaga Jaminan Nusantara"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-gradient-to-r from-[#0a183d] via-[#070f26] to-[#040816] p-4 border-t border-[#1b2f69] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#e5b842] font-bold block">
                      KONSULTAN RESMI BERPENGALAMAN
                    </span>
                    <span className="text-sm font-bold text-white">
                      PT NIAGA JAMINAN NUSANTARA
                    </span>
                  </div>
                  <a
                    href="tel:081140665585"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#070f26] font-extrabold text-xs px-3.5 py-1.5 rounded-full transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>0811-4066-5585</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  JASA BANK GARANSI &amp; SURETY BOND TERPERCAYA DI INDONESIA
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Mengapa Surety Bond Semakin Dibutuhkan dalam Proyek Modern?
              </h2>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                <p>
                  Dalam iklim bisnis modern yang kompetitif dan berisiko tinggi, instrumen penjaminan finansial bukan lagi sekadar formalitas administratif, melainkan benteng pertahanan krusial bagi kelangsungan proyek.
                </p>
                <p>
                  Meningkatnya kompleksitas rantai pasok global dan fluktuasi ekonomi menuntut kepastian hukum serta mitigasi risiko yang solid antara kontraktor (principal) dan pemilik proyek (obligee).
                </p>
                <p>
                  Surety bond hadir sebagai solusi cerdas yang menguntungkan kedua belah pihak: membebaskan modal kerja kontraktor tanpa perlu mengendapkan agunan tunai penuh, sekaligus memberikan garansi pemulihan kerugian finansial bagi obligee jika terjadi wanprestasi.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#e5b842] rounded-xl p-6 text-[#070f26] shadow-[0_0_30px_rgba(229,184,66,0.3)] space-y-3 mt-6">
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-[#070f26]">
                    Hubungi Kami Sekarang:
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 leading-relaxed">
                    Konsultasikan kebutuhan jaminan proyek Anda bersama tim ahli kami. Proses cepat, legalitas terjamin, tanpa agunan menyulitkan!
                  </p>
                </div>

                <div>
                  <button
                    onClick={openModal}
                    className="bg-[#070f26] hover:bg-[#0b1638] text-[#f5c542] hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-xl"
                  >
                    <span>KONSULTASI GRATIS</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PRODUK & LAYANAN (FULL COMPREHENSIVE SECTION)
          A. Surety Bond & Bank Garansi
          B. General Insurance
      ======================================================== */}
      <section
        id="jenis-surety-bond"
        className="relative bg-[#060c1d] py-16 sm:py-24 border-b border-[#14234d] overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/construction-bg.jpg"
            alt="Construction background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c1d] via-[#070f26]/95 to-[#060c1d] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              PRODUK &amp; LAYANAN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Solusi Penjaminan &amp; Asuransi Lengkap
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Mendukung perusahaan Anda dalam memenuhi persyaratan tender, kontrak, serta perlindungan operasional bisnis.
            </p>
          </div>

          {/* ----------------------------------------------------
              PART A: Surety Bond & Bank Garansi
          ---------------------------------------------------- */}
          <div className="space-y-6">
            <div className="border-b border-[#1b2f69] pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-[#e5b842] to-[#b89328] rounded-full inline-block" />
                Surety Bond &amp; Bank Garansi
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
                NJN menyediakan solusi penjaminan untuk mendukung perusahaan dalam mengikuti proses tender, memenuhi persyaratan kontrak, serta menjalankan kewajiban dalam berbagai proyek dan kegiatan bisnis.
              </p>
            </div>

            {/* 5 Cards for Penjaminan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Bid Bond */}
              <div className="bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Bid Bond / Jaminan Penawaran
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                    Mendukung pemenuhan persyaratan jaminan pada proses tender atau pelelangan.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#1b2f69] text-xs text-slate-400">
                  Tahap Tender / Pelelangan
                </div>
              </div>

              {/* 2. Performance Bond */}
              <div className="bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Performance Bond / Jaminan Pelaksanaan
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                    Memberikan dukungan jaminan atas pelaksanaan pekerjaan sesuai ketentuan kontrak.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#1b2f69] text-xs text-slate-400">
                  Tahap Pelaksanaan Pekerjaan
                </div>
              </div>

              {/* 3. Advance Payment Bond */}
              <div className="bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Advance Payment Bond / Jaminan Uang Muka
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                    Mendukung kebutuhan jaminan atas uang muka yang diberikan dalam pelaksanaan proyek.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#1b2f69] text-xs text-slate-400">
                  Tahap Penarikan Uang Muka
                </div>
              </div>

              {/* 4. Maintenance Bond */}
              <div className="bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Maintenance Bond / Jaminan Pemeliharaan
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                    Mendukung kewajiban kontraktor atau penyedia jasa selama periode pemeliharaan pekerjaan.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#1b2f69] text-xs text-slate-400">
                  Tahap Masa Pemeliharaan (Retensi)
                </div>
              </div>

              {/* 5. Bank Garansi */}
              <div className="bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Bank Garansi
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                    Solusi jaminan untuk berbagai kebutuhan kontraktual, proyek, pengadaan, dan kegiatan bisnis sesuai persyaratan yang berlaku.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#1b2f69] flex items-center justify-between text-xs text-slate-400">
                  <span>Mitra Bank BUMN &amp; Bank Swasta Nasional</span>
                  <span className="text-[#e5b842] font-semibold">Tersedia Non-Collateral</span>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              PART B: GENERAL INSURANCE
          ---------------------------------------------------- */}
          <div className="space-y-6 pt-6">
            <div className="border-b border-[#1b2f69] pb-4">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-1">
                PERLINDUNGAN RISIKO BISNIS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-[#e5b842] to-[#b89328] rounded-full inline-block" />
                GENERAL INSURANCE
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
                NJN juga membantu menyediakan solusi perlindungan terhadap berbagai risiko yang dapat memengaruhi kegiatan operasional, aset, proyek, maupun tanggung jawab perusahaan.
              </p>
              <div className="mt-3">
                <span className="text-xs font-bold text-[#e5b842] tracking-wider uppercase bg-[#0b1638] px-3 py-1 rounded-full border border-[#1b2f69]">
                  PRODUK YANG DAPAT DISESUAIKAN DENGAN KEBUTUHAN ANTARA LAIN:
                </span>
              </div>
            </div>

            {/* 8 Cards for General Insurance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. CAR */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Contractor&apos;s All Risk (CAR)
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap berbagai risiko dalam pelaksanaan proyek konstruksi.
                  </p>
                </div>
              </div>

              {/* 2. EAR */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Erection All Risk (EAR)
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan atas risiko yang berkaitan dengan pemasangan atau instalasi mesin dan peralatan.
                  </p>
                </div>
              </div>

              {/* 3. CGL */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Commercial General Liability (CGL)
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap risiko tanggung jawab hukum perusahaan kepada pihak ketiga.
                  </p>
                </div>
              </div>

              {/* 4. Professional Liability */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Professional Liability
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap risiko yang timbul dari pelaksanaan jasa atau tanggung jawab profesional.
                  </p>
                </div>
              </div>

              {/* 5. Marine Cargo */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Marine Cargo
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap risiko barang selama proses pengangkutan.
                  </p>
                </div>
              </div>

              {/* 6. Property Insurance */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Building className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Property Insurance
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap aset dan properti perusahaan.
                  </p>
                </div>
              </div>

              {/* 7. Engineering Insurance */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Engineering Insurance
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Perlindungan terhadap berbagai risiko yang berkaitan dengan mesin, instalasi, dan kegiatan teknik.
                  </p>
                </div>
              </div>

              {/* 8. Asuransi Umum Lainnya */}
              <div className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                    Asuransi Umum Lainnya
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                    Solusi perlindungan lainnya yang dapat disesuaikan dengan karakteristik risiko dan kebutuhan bisnis klien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. MENGAPA MEMILIH NJN? (5 PILAR ALASAN)
      ======================================================== */}
      <section id="mengapa-kami" className="bg-[#070f26] py-16 sm:py-24 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              KEUNGGULAN KAMI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              MENGAPA MEMILIH NJN?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              NJN hadir sebagai mitra terpercaya untuk memberikan solusi jaminan dan perlindungan yang tepat, cepat, dan sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Respons Cepat */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                RESPONS CEPAT &amp; PROFESIONAL
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mengutamakan respons yang cepat, komunikasi yang jelas, serta pelayanan profesional untuk mendukung kebutuhan tender, proyek, dan aktivitas bisnis yang memiliki batas waktu.
              </p>
            </div>

            {/* 2. Solusi Sesuai Kebutuhan */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                SOLUSI SESUAI KEBUTUHAN
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Memahami kebutuhan dan karakteristik bisnis klien untuk memberikan solusi jaminan dan perlindungan yang tepat serta sesuai dengan kondisi masing-masing.
              </p>
            </div>

            {/* 3. Transparan & Terpercaya */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                TRANSPARAN &amp; TERPERCAYA
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Memberikan informasi yang jelas mengenai persyaratan, tahapan, dan proses pengajuan sehingga klien merasa lebih aman dan nyaman.
              </p>
            </div>

            {/* 4. Solusi Terintegrasi */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                SOLUSI TERINTEGRASI
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Menghadirkan layanan Bank Garansi, Surety Bond, dan General Insurance dalam satu solusi yang praktis untuk memenuhi berbagai kebutuhan jaminan dan perlindungan bisnis.
              </p>
            </div>

            {/* 5. Pendampingan Jangka Panjang */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                PENDAMPINGAN JANGKA PANJANG
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tidak hanya fokus pada transaksi, NJN berkomitmen membangun hubungan jangka panjang melalui pendampingan dan dukungan sesuai perkembangan kebutuhan klien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PENGALAMAN & KOMPETENSI
      ======================================================== */}
      <section className="bg-[#060c1d] py-16 sm:py-24 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="bg-[#0b1638] border border-[#1b2f69] rounded-2xl p-8 relative shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b89328] flex items-center justify-center text-[#070f26] mb-6 shadow-lg">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  PENGALAMAN &amp; KOMPETENSI
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  PT Niaga Jaminan Nusantara dibangun dengan fokus pada penyediaan solusi Bank Guarantee, Surety Bond, dan General Insurance untuk berbagai kebutuhan bisnis dan proyek.
                </p>
                <div className="mt-6 pt-6 border-t border-[#1b2f69] flex items-center justify-between text-xs text-[#e5b842] font-bold">
                  <span>Profesional &amp; Responsif</span>
                  <span>Pendekatan Konsultatif</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                KOMPETENSI KAMI
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Landasan Pengalaman untuk Menjawab Kebutuhan Setiap Klien
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                <p>
                  Dalam menjalankan kegiatan usahanya, NJN didukung oleh pemahaman dan pengalaman tim dalam menangani kebutuhan jaminan proyek, tender, konstruksi, pengadaan, serta perlindungan terhadap risiko bisnis. Pengalaman tersebut menjadi landasan bagi NJN dalam memberikan pelayanan yang responsif, profesional, serta berorientasi pada kebutuhan setiap klien.
                </p>
                <p>
                  Melalui pendekatan konsultatif, NJN membantu klien mengidentifikasi kebutuhan jaminan dan perlindungan yang sesuai sehingga proses bisnis maupun pelaksanaan proyek dapat berjalan dengan lebih terarah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BIDANG YANG KAMI LAYANI (4 PILAR)
      ======================================================== */}
      <section className="bg-[#070f26] py-16 sm:py-24 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              SEKTOR INDUSTRI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              BIDANG YANG KAMI LAYANI
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Solusi penjaminan dan perlindungan risiko untuk berbagai sektor usaha strategis:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sektor 1: Konstruksi & Infrastruktur */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070f26] border border-[#e5b842]/40 flex items-center justify-center mb-4 text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#e5b842] transition-colors mb-2.5 uppercase tracking-wide">
                  KONSTRUKSI &amp; INFRASTRUKTUR
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Mendukung kebutuhan jaminan dan perlindungan risiko dalam pelaksanaan proyek konstruksi dan infrastruktur.
                </p>
              </div>
            </div>

            {/* Sektor 2: Tender & Pengadaan */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070f26] border border-[#e5b842]/40 flex items-center justify-center mb-4 text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#e5b842] transition-colors mb-2.5 uppercase tracking-wide">
                  TENDER &amp; PENGADAAN
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Membantu perusahaan dalam memenuhi kebutuhan jaminan yang diperlukan pada proses tender, pengadaan, maupun pelaksanaan kontrak.
                </p>
              </div>
            </div>

            {/* Sektor 3: Konsultansi */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070f26] border border-[#e5b842]/40 flex items-center justify-center mb-4 text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#e5b842] transition-colors mb-2.5 uppercase tracking-wide">
                  KONSULTANSI
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Menyediakan solusi perlindungan yang berkaitan dengan tanggung jawab profesional serta risiko dalam pelaksanaan kegiatan jasa konsultansi.
                </p>
              </div>
            </div>

            {/* Sektor 4: Perdagangan & Supplier */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#070f26] border border-[#e5b842]/40 flex items-center justify-center mb-4 text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#e5b842] transition-colors mb-2.5 uppercase tracking-wide">
                  PERDAGANGAN &amp; SUPPLIER
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Mendukung kebutuhan jaminan dan perlindungan dalam hubungan kontraktual, kegiatan perdagangan, distribusi, serta penyediaan barang dan jasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. HEROIC BANNER CTA (Gold Waves)
      ======================================================== */}
      <section className="relative bg-[#050b18] py-20 sm:py-28 overflow-hidden border-b border-[#14234d] topo-waves">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#e5b842]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div>
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              JASA SURETY BOND &amp; BANK GARANSI RESMI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Niaga Jaminan Nusantara Penerbitan Jaminan
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Temukan solusi penjaminan finansial dan perlindungan risiko bisnis terbaik untuk perusahaan Anda. Kami siap melayani pengajuan cepat, aman, dan tanpa agunan menyulitkan di seluruh Indonesia. Hubungi konsultan profesional kami sekarang untuk konsultasi gratis dan penawaran terbaik!
          </p>

          <div className="pt-4">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              <span>KONSULTASI GRATIS SEKARANG</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

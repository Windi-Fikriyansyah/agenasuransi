"use client";

import React, { useEffect } from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronRight,
  FileCheck2,
  Coins,
  Wrench,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function SyaratKetentuan() {
  const { openModal } = useModal();

  useEffect(() => {
    // Pastikan posisi scroll meluncur mulus (smooth) ke paling atas saat halaman dibuka
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

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6282113189343?text=Halo%20PT%20Niaga%20Jaminan%20Nusantara,%20saya%20ingin%20konsultasi%20mengenai%20persyaratan%20penerbitan%20Bank%20Garansi%20dan%20Surety%20Bond",
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden">
      {/* ========================================================
          PERSYARATAN UMUM (LEGALITAS & ADMINISTRASI)
      ======================================================== */}
      <section
        id="syarat-ketentuan"
        className="py-12 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#070f26] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              PT NIAGA JAMINAN NUSANTARA
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Persyaratan Penerbitan Bank Garansi &amp; Surety Bond
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
              Dokumen legalitas utama perusahaan yang wajib dilampirkan oleh Principal (Pelaksana Proyek) sebagai syarat underwriting dan verifikasi awal oleh pihak Bank maupun Asuransi penjamin:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Checklist Box Utama */}
            <div className="lg:col-span-8 bg-[#0b1638] rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1b2f69] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#e5b842]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-[#1b2f69]">
                <div className="w-10 h-10 rounded-lg bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shrink-0 shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate sm:whitespace-normal">
                    Checklist Dokumen Legalitas Perusahaan
                  </h3>
                  <p className="text-xs text-slate-300">
                    Wajib dilengkapi untuk pengajuan penerbitan jaminan proyek
                  </p>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Akte Pendirian Beserta Perubahan Terakhir
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Melampirkan salinan akta pendirian perusahaan dan akta perubahan susunan pengurus/modal terakhir.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      SK MENKEH, SIUJK, SIUP, TDP / NIB, &amp; NPWP
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Surat Keputusan Kemenkumham, Izin Usaha Jasa Konstruksi, NIB / SIUP / TDP, serta NPWP Badan Usaha yang masih berlaku.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Keterangan Domisili
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Surat Keterangan Domisili Perusahaan (SKDP) atau bukti domisili kantor resmi.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Mengisi Form Permohonan Penjaminan
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Mengisi formulir permohonan resmi yang ditujukan ke pihak asuransi atau bank penerbit (form kami sediakan).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Melampirkan List Pengalaman Pekerjaan
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Daftar rekam jejak pekerjaan (track record) atau proyek yang pernah diselesaikan oleh perusahaan dalam 1-3 tahun terakhir.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Laporan Keuangan 2 Tahun Terakhir
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Laporan keuangan internal atau audit 2 tahun terakhir yang memuat neraca aktiva-pasiva dan laporan rugi laba.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      Photocopy KTP Direksi dan Komisaris Selaku Pengurus
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Salinan identitas sah KTP seluruh Direksi dan Dewan Komisaris yang tercantum dalam akta perusahaan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sidebar Bantuan & Tips */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              {/* Card Info Efisiensi Dokumen */}
              <div className="bg-[#0b1638] rounded-2xl p-5 sm:p-6 border border-[#1b2f69] shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] mb-4 shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Kirim Dokumen via WhatsApp / Email
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Untuk mempercepat proses review dan draft penerbitan jaminan, seluruh dokumen cukup dikirimkan dalam format scan <strong className="text-white">PDF</strong> via WhatsApp atau Email tanpa harus datang ke kantor kami.
                </p>
                <div className="mt-4 pt-4 border-t border-[#1b2f69]">
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-[#070f26] hover:bg-[#0d1c47] text-[#e5b842] border border-[#e5b842]/50 hover:border-[#e5b842] font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Berkas PDF ke WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Card Bantuan Konsultan */}
              <div className="bg-gradient-to-br from-[#0a183f] to-[#050b1a] rounded-2xl p-5 sm:p-6 border border-[#1f3878] shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-[#f5c542] shrink-0" />
                  <h4 className="text-sm font-bold text-white">Ada Dokumen yang Belum Lengkap?</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Jangan khawatir! Tim konsultan <strong className="text-white">PT NIAGA JAMINAN NUSANTARA</strong> siap membantu pendampingan dan memberikan solusi terbaik agar jaminan Anda tetap dapat diterbitkan tepat waktu sebelum tenggat lelang atau proyek.
                </p>
                <div className="mt-4">
                  <a
                    href="https://wa.me/6282113189343?text=Halo%20PT%20Niaga%20Jaminan%20Nusantara,%20saya%20butuh%20bantuan%20konsultasi%20kelengkapan%20dokumen%20Bank%20Garansi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#e5b842] hover:text-[#f5c542] font-bold inline-flex items-center gap-1 group"
                  >
                    <span>Konsultasikan Masalah Dokumen</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PERSYARATAN BERDASARKAN JENIS JAMINAN (4 KATEGORI)
      ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 border-b border-[#14234d] bg-[#060c1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              PERSYARATAN KHUSUS TIAP PRODUK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Persyaratan Dokumen Sesuai Jenis Jaminan
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
              Selain dokumen legalitas dasar di atas, lampirkan dokumen pendukung spesifik sesuai dengan jenis jaminan yang Anda ajukan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Jaminan Penawaran (Bid Bond) */}
            <div className="bg-[#0b1638] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <span className="bg-[#070f26] text-[#e5b842] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                    Tahap Tender
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                  Persyaratan Jaminan Penawaran (Bid Bond)
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-4 sm:mb-5 leading-relaxed">
                  Dibutuhkan untuk memenuhi syarat pendaftaran dan keikutsertaan tender / lelang proyek pemerintah maupun swasta.
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>company profile</strong> dan legalitas perusahaan lengkap.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>laporan keuangan 2 tahun terakhir</strong> dan neraca rugi laba.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>list pengalaman pekerjaan</strong> perusahaan.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5 bg-[#070f26]/80 p-2 sm:p-2.5 rounded-lg border border-[#e5b842]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c542] shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Melampirkan <strong>dokumen lelang atau tender</strong> (RKS, Undangan Tender, atau Pengumuman Lelang).</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs text-slate-400">Estimasi Terbit: 1 Hari Kerja</span>
                <button
                  onClick={openWhatsApp}
                  className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  Ajukan Bid Bond <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Jaminan Pelaksanaan (Performance Bond) */}
            <div className="bg-[#0b1638] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="bg-[#070f26] text-[#e5b842] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                    Tahap Pemenang
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                  Persyaratan Jaminan Pelaksanaan (Performance Bond)
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-4 sm:mb-5 leading-relaxed">
                  Menjamin bahwa pemenang lelang akan menandatangani kontrak dan menyelesaikan proyek sesuai spesifikasi.
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>company profile</strong> dan legalitas perusahaan lengkap.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>laporan keuangan 2 tahun terakhir</strong> dan neraca rugi laba.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>list pengalaman pekerjaan</strong> perusahaan.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5 bg-[#070f26]/80 p-2 sm:p-2.5 rounded-lg border border-[#e5b842]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c542] shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Melampirkan <strong>surat penunjukan pemenang lelang / SPPBJ / SPK / SPMK / Kontrak</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs text-slate-400">Estimasi Terbit: 1-2 Hari Kerja</span>
                <button
                  onClick={openWhatsApp}
                  className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  Ajukan Performance Bond <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Jaminan Uang Muka (Advance Payment Bond) */}
            <div className="bg-[#0b1638] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                    <Coins className="w-6 h-6" />
                  </div>
                  <span className="bg-[#070f26] text-[#e5b842] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                    Pencairan DP Proyek
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                  Persyaratan Jaminan Uang Muka (Advance Payment Bond)
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-4 sm:mb-5 leading-relaxed">
                  Dibutuhkan untuk mencairkan uang muka / Down Payment (DP) proyek dari pihak pemilik proyek (Obligee).
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>company profile</strong> dan legalitas perusahaan lengkap.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>laporan keuangan 2 tahun terakhir</strong> dan neraca rugi laba.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>list pengalaman pekerjaan</strong> perusahaan.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5 bg-[#070f26]/80 p-2 sm:p-2.5 rounded-lg border border-[#e5b842]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c542] shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Melampirkan <strong>kontrak / purchase order (PO) / letter of intent (LOI) / work order (WO)</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs text-slate-400">Estimasi Terbit: 1-2 Hari Kerja</span>
                <button
                  onClick={openWhatsApp}
                  className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  Ajukan Advance Bond <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4: Jaminan Pemeliharaan (Maintenance Bond) */}
            <div className="bg-[#0b1638] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="bg-[#070f26] text-[#e5b842] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                    Masa Garansi
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                  Persyaratan Jaminan Pemeliharaan (Maintenance Bond)
                </h3>
                <p className="text-xs text-slate-300 mt-1 mb-4 sm:mb-5 leading-relaxed">
                  Menjamin perbaikan atas kerusakan fisik selama masa garansi/pemeliharaan setelah pekerjaan selesai 100%.
                </p>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>company profile</strong> dan legalitas perusahaan lengkap.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>laporan keuangan 2 tahun terakhir</strong> dan neraca rugi laba.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>Melampirkan <strong>list pengalaman pekerjaan</strong> perusahaan.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#070f26]/80 p-2 sm:p-2.5 rounded-lg border border-[#e5b842]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c542] shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Melampirkan <strong>kontrak dan Berita Acara Serah Terima pekerjaan (BAST)</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                <span className="text-xs text-slate-400">Estimasi Terbit: 1-2 Hari Kerja</span>
                <button
                  onClick={openWhatsApp}
                  className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  Ajukan Maintenance Bond <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ALUR PROSES PENGAJUAN (4 LANGKAH MUDAH)
      ======================================================== */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#070f26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              PROSES CEPAT &amp; TRANSPARAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              4 Langkah Mudah Penerbitan Jaminan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] text-center shadow-lg relative group">
              <div className="w-10 h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto mb-4 text-base">
                1
              </div>
              <h3 className="text-base font-bold text-white mb-2">Kirim Dokumen</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kirim softcopy/scan dokumen legalitas dan dokumen lelang/kontrak Anda via WhatsApp atau Email.
              </p>
            </div>

            <div className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] text-center shadow-lg relative group">
              <div className="w-10 h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto mb-4 text-base">
                2
              </div>
              <h3 className="text-base font-bold text-white mb-2">Verifikasi &amp; Draft</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tim analis melakukan verifikasi kelayakan dan menerbitkan konsep draft polis untuk Anda setujui.
              </p>
            </div>

            <div className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] text-center shadow-lg relative group">
              <div className="w-10 h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto mb-4 text-base">
                3
              </div>
              <h3 className="text-base font-bold text-white mb-2">Pembayaran Premi</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lakukan pembayaran premi resmi setelah draft penjaminan diverifikasi dan disetujui.
              </p>
            </div>

            <div className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] text-center shadow-lg relative group">
              <div className="w-10 h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto mb-4 text-base">
                4
              </div>
              <h3 className="text-base font-bold text-white mb-2">Penerbitan &amp; Kirim</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sertifikat / Warkat Bank Garansi dan Polis Asli langsung dicetak dan dikirimkan ke alamat Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CTA BANNER (HUBUNGI KAMI)
      ======================================================== */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#050b18] topo-waves border-b border-[#14234d] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
            KONSULTASI BEBAS BIAYA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            PT NIAGA JAMINAN NUSANTARA
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Segera konsultasikan kebutuhan penerbitan Bank Garansi dan Surety Bond proyek Anda bersama konsultan ahli kami. Proses cepat, syarat fleksibel, dan legalitas resmi terverifikasi.
          </p>
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href="https://wa.me/6282113189343"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>HUBUNGI KAMI (0821-1318-9343)</span>
            </a>
            <button
              onClick={openModal}
              className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-[#e5b842] shrink-0" />
              <span>Formulir Permohonan Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

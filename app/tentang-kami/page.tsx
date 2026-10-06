"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";

export default function TentangKami() {
  const { openModal } = useModal();

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6282113189343?text=Halo%20PT%20Niaga%20Jaminan%20Nusantara,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20Bank%20Garansi%20dan%20Surety%20Bond",
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen">
      {/* ========================================================
          1. HERO HEADER: TENTANG KAMI
      ======================================================== */}
      <section className="relative bg-gradient-to-b from-[#040816] via-[#070f26] to-[#060c1d] py-16 sm:py-24 border-b border-[#14234d] overflow-hidden">
        {/* Glow Effects (Gold & Navy) */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#e5b842]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-[#1a3a8f]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-[#e5b842] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#e5b842] font-semibold">Tentang Kami</span>
            </div>

            {/* Gold Tag */}
            <div>
              <span className="text-[#e5b842] text-xs sm:text-sm font-bold tracking-widest uppercase">
                TENTANG KAMI
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              PT Niaga Jaminan Nusantara
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mitra terpercaya dalam menyediakan solusi jaminan dan perlindungan risiko bisnis di Indonesia untuk mendukung kelancaran tender, pengadaan, dan proyek Anda.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-lg"
              >
                <span>Konsultasi Sekarang</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
              <button
                onClick={openWhatsApp}
                className="border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#e5b842]" />
                <span>Chat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PROFIL PERUSAHAAN (SESUAI CONTENT USER)
      ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-[#14234d] bg-[#070f26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic Banner Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#1b2f69] shadow-2xl bg-[#091228] group">
                <Image
                  src="/images/banner-jaminan.jpg"
                  alt="PT Niaga Jaminan Nusantara Kantor & Konsultan"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-gradient-to-r from-[#0a183d] via-[#070f26] to-[#040816] p-5 border-t border-[#1b2f69]">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#e5b842] shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        PT Niaga Jaminan Nusantara (NJN)
                      </h4>
                      <p className="text-xs text-slate-300">
                        Didirikan oleh Dafinah Syafa Niaga dan Anta Rahmadan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                PROFIL PERUSAHAAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Solusi Jaminan dan Perlindungan Risiko Bisnis Terpercaya
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                <p>
                  <strong className="text-white">PT Niaga Jaminan Nusantara (NJN)</strong> merupakan perusahaan yang bergerak dalam bidang layanan penjaminan dan perlindungan risiko bisnis, mencakup aktivitas agen asuransi, agen penjaminan, serta broker penjaminan. Perusahaan mulai beroperasi pada tahun 2020 di Bekasi, Jawa Barat, dan didirikan oleh <strong className="text-white">Dafinah Syafa Niaga</strong> dan <strong className="text-white">Anta Rahmadan</strong>.
                </p>
                <p>
                  NJN hadir untuk membantu perusahaan memperoleh solusi jaminan dan perlindungan yang tepat dalam mendukung aktivitas bisnis, tender, pengadaan, maupun pelaksanaan proyek. Dengan mengedepankan profesionalisme, kecepatan pelayanan, transparansi, dan integritas, NJN berupaya memberikan proses layanan yang mudah dipahami serta sesuai dengan kebutuhan setiap klien.
                </p>
                <p>
                  Lebih dari sekadar penyedia layanan, NJN berkomitmen membangun hubungan bisnis jangka panjang dan menjadi mitra yang dapat diandalkan dalam mendukung keberlangsungan serta pengembangan usaha klien.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              3. TIGA PILAR UTAMA (HIGHLIGHT CARDS)
              - Beroperasi Sejak 2020
              - Layanan Utama
              - Komitmen Kami
          ======================================================== */}
          <div className="mt-14 pt-10 border-t border-[#1b2f69] grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] mb-2 uppercase tracking-wide">
                BEROPERASI SEJAK 2020
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Melayani kebutuhan jaminan dan perlindungan bisnis secara profesional.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] mb-2 uppercase tracking-wide">
                LAYANAN UTAMA
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bank Guarantee, Surety Bond, dan General Insurance.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#e5b842] mb-2 uppercase tracking-wide">
                KOMITMEN KAMI
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Profesional, responsif, transparan, dan terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VISI & MISI
      ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-[#14234d] bg-[#060c1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              VISI &amp; MISI
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Visi &amp; Misi Perusahaan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi Card */}
            <div className="bg-[#0b1638] rounded-2xl p-8 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center mb-6 text-[#e5b842] shadow-[0_0_20px_rgba(229,184,66,0.3)]">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-[#e5b842] transition-colors uppercase tracking-wider">
                  VISI
                </h3>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  &ldquo;Menjadi mitra terpercaya dalam menyediakan solusi jaminan dan perlindungan bisnis di Indonesia.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b2f69] text-xs text-[#e5b842] font-semibold">
                PT Niaga Jaminan Nusantara
              </div>
            </div>

            {/* Misi Card */}
            <div className="bg-[#0b1638] rounded-2xl p-8 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center mb-6 text-[#e5b842] shadow-[0_0_20px_rgba(229,184,66,0.3)]">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-[#e5b842] transition-colors uppercase tracking-wider">
                MISI
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e5b842] shrink-0 mt-0.5" />
                  <span>
                    Memberikan solusi jaminan dan perlindungan yang sesuai dengan kebutuhan serta karakteristik bisnis setiap klien.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e5b842] shrink-0 mt-0.5" />
                  <span>
                    Mengutamakan kecepatan, ketepatan, transparansi, dan profesionalisme dalam setiap layanan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e5b842] shrink-0 mt-0.5" />
                  <span>
                    Memberikan kemudahan dan pendampingan untuk membantu klien menjalankan serta mengembangkan peluang bisnisnya.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e5b842] shrink-0 mt-0.5" />
                  <span>
                    Menjalankan setiap proses bisnis dengan prinsip integritas, tanggung jawab, dan komitmen terhadap kepercayaan klien.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CTA BANNER (Gold Waves)
      ======================================================== */}
      <section className="py-20 bg-[#050b18] topo-waves border-b border-[#14234d] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
            MULAI KONSULTASI HARI INI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Siap Memenangkan Tender dan Mengamankan Proyek Anda?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tim konsultan PT Niaga Jaminan Nusantara siap memberikan solusi penerbitan Bank Garansi, Surety Bond, dan General Insurance terbaik untuk kebutuhan perusahaan Anda. Konsultasi gratis tanpa komitmen!
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              <span>Ajukan Penjaminan Sekarang</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button
              onClick={openWhatsApp}
              className="border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-6 py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#e5b842]" />
              <span>Hubungi via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ExternalLink,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Zap,
} from "lucide-react";

export default function KontakKamiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Scroll mulus ke paling atas saat halaman Kontak Kami dibuka
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Halo PT Niaga Jaminan Nusantara,%0A%0ASaya ingin mengirimkan pesan melalui form kontak:%0A- Nama: ${encodeURIComponent(
      formData.nama
    )}%0A- Email: ${encodeURIComponent(
      formData.email
    )}%0A- Pesan: ${encodeURIComponent(formData.message)}%0A%0ATerima kasih.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/6282113189343?text=${whatsappMessage}`,
        "_blank"
      );
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const openDirectWhatsApp = (topic?: string) => {
    const text = topic
      ? `Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi mengenai ${topic}.`
      : "Halo PT Niaga Jaminan Nusantara, saya ingin berkonsultasi mengenai penerbitan Bank Garansi dan Surety Bond.";
    window.open(
      `https://wa.me/6282113189343?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Graha+Surveyor+Indonesia+Jl+Gatot+Subroto+Kav+56+Jakarta+Selatan";

  // Structured Data Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://niagajaminannusantara.co.id/kontak-kami#webpage",
        "url": "https://niagajaminannusantara.co.id/kontak-kami",
        "name": "Kontak Kami - PT Niaga Jaminan Nusantara",
        "description":
          "Layanan kontak, konsultasi, dan formulir pengajuan Bank Garansi & Surety Bond PT Niaga Jaminan Nusantara.",
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
              "name": "Kontak Kami",
              "item": "https://niagajaminannusantara.co.id/kontak-kami",
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://niagajaminannusantara.co.id/#organization",
        "name": "PT Niaga Jaminan Nusantara",
        "image": "https://niagajaminannusantara.co.id/images/logo.png",
        "telephone": "+6282113189343",
        "email": "info@anugrahluasjaya.co.id",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "Gedung Graha Surveyor Indonesia Lantai 15, Jl. Gatot Subroto Kav. 56, Kuningan Barat, Mampang Prapatan",
          "addressLocality": "Jakarta Selatan",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12950",
          "addressCountry": "ID",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            "opens": "08:00",
            "closes": "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "14:00",
          },
        ],
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

      <div className="bg-[#060c1d] text-slate-100 min-h-screen">
        {/* ========================================================
            LANGSUNG KE BAGIAN KONTAK FORM & DETAIL (TANPA HERO SECTION)
        ======================================================== */}
        <section
          id="kontak-utama"
          className="py-12 sm:py-16 border-b border-[#14234d] bg-[#060c1d] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section Singkat & Lugas */}
            <div className="mb-10 pb-6 border-b border-[#14234d]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1638] border border-[#1b2f69] mb-2">
                    <Building2 className="w-3.5 h-3.5 text-[#e5b842]" />
                    <span className="text-[#e5b842] text-[11px] font-bold tracking-widest uppercase">
                      PT NIAGA JAMINAN NUSANTARA
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Kontak &amp; Formulir Konsultasi Proyek
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                    Hubungi konsultan kami atau isi formulir di bawah ini untuk konsultasi kelayakan dokumen tender dan penerbitan Bank Garansi &amp; Surety Bond tanpa agunan. Respon cepat dalam 10-15 menit.
                  </p>
                </div>

                {/* Quick Response Badge */}
                <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b1638] border border-[#e5b842]/40 text-xs text-[#e5b842] font-semibold">
                  <Zap className="w-4 h-4 fill-current text-[#e5b842]" />
                  <span>Respon Cepat WhatsApp 24 Jam</span>
                </div>
              </div>
            </div>

            {/* Grid 2 Kolom: Contact Form & Kontak Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* ========================================================
                  KOLOM 1: CONTACT FORM
              ======================================================== */}
              <div className="lg:col-span-7 bg-[#070f26] border border-[#1b2f69] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="mb-6 pb-4 border-b border-[#14234d]">
                  <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                    FORMULIR KONTAK
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    Kirim Pesan Kepada Kami
                  </h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Silakan isi nama, email, dan pesan Anda di bawah ini. Tim kami akan segera menindaklanjuti.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-[#0b291d] border border-emerald-500/50 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-white">
                        Pesan Berhasil Terkirim!
                      </strong>
                      <span>
                        Jendela chat WhatsApp konsultan telah dibuka dengan format pesan Anda. Kami akan segera merespons pertanyaan Anda.
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Nama Lengkap <span className="text-[#e5b842]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Alamat Email <span className="text-[#e5b842]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Pesan / Message <span className="text-[#e5b842]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tuliskan pesan, pertanyaan, atau rincian kebutuhan Anda di sini..."
                      className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] resize-none transition-colors"
                    />
                  </div>

                  {/* Security Guarantee Note */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-300 bg-[#0b1638] p-3 rounded-xl border border-[#152758]">
                    <ShieldCheck className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <span>
                      <strong>Jaminan Privasi:</strong> Data dan pesan Anda terjamin 100% aman dan rahasia.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 gold-glow-btn cursor-pointer shadow-xl hover:scale-[1.01] transition-all disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? "Mengirimkan Pesan..."
                        : "Kirim Pesan"}
                    </span>
                  </button>
                </form>
              </div>

              {/* ========================================================
                  KOLOM 2: KONTAK DETAIL & LOKASI KANTOR
              ======================================================== */}
              <div className="lg:col-span-5 space-y-6">
                {/* Kartu Detail Kontak Utama */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-5">
                  <div className="pb-3 border-b border-[#14234d]">
                    <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                      INFORMASI RESMI
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                      Kontak Detail Perusahaan
                    </h3>
                  </div>

                  {/* Alamat Kantor */}
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                        Kantor Operasional
                      </span>
                      <strong className="text-white block font-bold">
                        Gedung Graha Surveyor Indonesia Lantai 15
                      </strong>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Jl. Gatot Subroto Kav. 56, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12950
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Konsultan */}
                  <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                    <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <span className="text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                        WhatsApp Konsultan (Chat Cepat)
                      </span>
                      <a
                        href="https://wa.me/6282113189343"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold hover:text-[#25D366] transition-colors block text-sm"
                      >
                        0821-1318-9343
                      </a>
                      <p className="text-[11px] text-slate-400">
                        Layanan konsultasi online siap merespons 24/7.
                      </p>
                    </div>
                    <button
                      onClick={() => openDirectWhatsApp()}
                      className="text-xs bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50 px-3 py-1.5 rounded-lg hover:bg-[#25D366] hover:text-[#070f26] font-bold transition-all shrink-0 cursor-pointer"
                    >
                      Chat
                    </button>
                  </div>

                  {/* Telepon / Hotline */}
                  <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                    <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <span className="text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                        Hotline Telepon
                      </span>
                      <a
                        href="tel:081140665585"
                        className="text-white font-bold hover:text-[#e5b842] transition-colors block text-sm"
                      >
                        0811-4066-5585
                      </a>
                      <p className="text-[11px] text-slate-400">
                        Telepon langsung tim representatif kami.
                      </p>
                    </div>
                    <a
                      href="tel:081140665585"
                      className="text-xs bg-[#0b1638] text-slate-200 border border-[#1b2f69] hover:border-[#e5b842] px-3 py-1.5 rounded-lg hover:text-[#e5b842] font-semibold transition-all shrink-0"
                    >
                      Panggil
                    </a>
                  </div>

                  {/* Email Resmi */}
                  <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                    <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                        Email Resmi
                      </span>
                      <a
                        href="mailto:info@anugrahluasjaya.co.id"
                        className="text-slate-200 hover:text-[#e5b842] transition-colors block text-xs font-semibold"
                      >
                        info@anugrahluasjaya.co.id
                      </a>
                      <p className="text-[11px] text-slate-400">
                        Kirimkan berkas RKS / Dokumen Pemilihan tender via email.
                      </p>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                    <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                        Jam Operasional Kantor
                      </span>
                      <div className="text-xs text-slate-300 space-y-0.5">
                        <div className="flex justify-between gap-4">
                          <span>Senin – Jumat:</span>
                          <span className="font-semibold text-white">
                            08.00 – 18.00 WIB
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Sabtu:</span>
                          <span className="font-semibold text-white">
                            08.00 – 14.00 WIB
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>Minggu &amp; Libur:</span>
                          <span className="text-[#e5b842] font-semibold">
                            Layanan WhatsApp Tetap Aktif
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kartu Peta Lokasi Interaktif (Google Maps Embed) */}
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 shadow-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#e5b842]" />
                      <h4 className="text-sm font-bold text-white">
                        Peta Lokasi Graha Surveyor
                      </h4>
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#e5b842] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Buka Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Google Maps Iframe */}
                  <div className="rounded-xl overflow-hidden border border-[#14234d] h-48 sm:h-56 w-full relative bg-[#091228]">
                    <iframe
                      title="Lokasi Kantor PT Niaga Jaminan Nusantara"
                      src="https://maps.google.com/maps?q=Graha+Surveyor+Indonesia+Jl+Gatot+Subroto+Kav+56+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale-[20%] contrast-[105%]"
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Lokasi strategis di koridor Gatot Subroto, dekat kawasan Kuningan &amp; Semanggi Jakarta Selatan.
                  </p>
                </div>

                {/* Kartu Wilayah Layanan & Fasilitas */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0b1638] to-[#070f26] border border-[#1b2f69] space-y-3">
                  <h4 className="text-xs font-bold text-[#e5b842] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Layanan Penjaminan Seluruh Indonesia</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Jabodetabek</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Jawa &amp; Bali</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Sumatera</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Kalimantan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Sulawesi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>Nusa Tenggara &amp; Papua</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                FAQ SINGKAT SEPUTAR KONSULTASI & KONTAK
            ======================================================== */}
            <div className="mt-16 pt-12 border-t border-[#14234d]">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  PERTANYAAN UMUM
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Seputar Konsultasi &amp; Pengajuan Warkat
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#070f26] border border-[#1b2f69] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <HelpCircle className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <h4>Apakah ada biaya konsultasi?</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sama sekali tidak ada biaya (100% Gratis). Anda bebas berkonsultasi mengenai kelayakan dokumen tender dan perhitungan tarif premi.
                  </p>
                </div>

                <div className="bg-[#070f26] border border-[#1b2f69] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <FileCheck2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <h4>Berapa lama proses penerbitan?</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Untuk Surety Bond butuh 1-2 hari kerja. Untuk Bank Garansi berkisar 2-3 hari kerja setelah seluruh dokumen legalitas dan RKS dinyatakan lengkap.
                  </p>
                </div>

                <div className="bg-[#070f26] border border-[#1b2f69] rounded-xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Zap className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <h4>Apakah bisa kirim berkas lewat WhatsApp?</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sangat bisa. Anda dapat mengirimkan softcopy dokumen tender (format PDF) langsung ke WhatsApp konsultan kami untuk verifikasi awal yang cepat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

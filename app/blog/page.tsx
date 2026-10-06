"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ChevronRight,
  MessageCircle,
  Phone,
  X,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { ARTICLES, Article } from "@/data/articles";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const { openModal } = useModal();

  useEffect(() => {
    // Scroll mulus ke paling atas saat halaman Blog dibuka
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

  const categories = ["Semua", "Bank Garansi", "Surety Bond", "Tips Tender", "Regulasi"];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openWhatsAppConsultation = (topic?: string) => {
    const msg = topic
      ? `Halo PT Niaga Jaminan Nusantara, saya membaca artikel tentang "${topic}" di blog dan ingin konsultasi lebih lanjut.`
      : "Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi mengenai penerbitan Bank Garansi dan Surety Bond.";
    window.open(`https://wa.me/6282113189343?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen">
      {/* ========================================================
          DAFTAR ARTIKEL TERBARU (LANGSUNG DITAMPILKAN)
      ======================================================== */}
      <section id="blog-list" className="py-12 sm:py-16 border-b border-[#14234d] bg-[#060c1d] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#14234d]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1638] border border-[#1b2f69] mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#e5b842]" />
                <span className="text-[#e5b842] text-[11px] font-bold tracking-widest uppercase">
                  PT NIAGA JAMINAN NUSANTARA
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">
                Daftar Artikel &amp; Edukasi Terbaru
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {selectedCategory === "Semua" ? "Semua Topik" : `Kategori: ${selectedCategory}`} • Menampilkan {filteredArticles.length} artikel terpercaya
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik artikel..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                  title="Bersihkan pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#d4af37] to-[#e5b842] text-[#070f26] shadow-md font-bold"
                    : "bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] hover:border-[#e5b842]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-[#0b1638] rounded-2xl p-12 text-center border border-[#1b2f69] max-w-lg mx-auto">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Artikel Tidak Ditemukan</h3>
              <p className="text-xs text-slate-300 mb-6">
                Tidak ada artikel yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;. Silakan gunakan kata kunci lain atau pilih kategori di atas.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="bg-[#070f26] text-[#e5b842] border border-[#e5b842] text-xs font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0e1e47]"
              >
                Tampilkan Semua Artikel
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#0b1638] rounded-2xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div className="space-y-3.5">
                    {/* Badge & Read Time */}
                    <div className="flex items-center justify-between">
                      <span className="bg-[#070f26] text-[#e5b842] text-[11px] font-bold px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#e5b842]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Judul Artikel menuju Halaman Detail */}
                    <h2 className="text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug line-clamp-2">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:underline focus:outline-none focus:text-[#e5b842]"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    {/* Ringkasan */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-[#070f26] text-slate-300 px-2 py-0.5 rounded border border-[#152758]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Kartu & Tombol Menuju Detail */}
                  <div className="mt-6 pt-4 border-t border-[#1b2f69] flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {article.date}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#e5b842]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          CTA BANNER BAWAH (KONSULTASI GRATIS)
      ======================================================== */}
      <section className="py-20 bg-[#050b18] topo-waves border-b border-[#14234d] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
            KONSULTASI GRATIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PT NIAGA JAMINAN NUSANTARA
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Ingin berkonsultasi mengenai kelayakan dokumen tender atau penerbitan Bank Garansi &amp; Surety Bond tanpa agunan? Tim kami siap mendampingi Anda hingga tuntas.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openWhatsAppConsultation()}
              className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat WhatsApp Konsultan</span>
            </button>
            <button
              onClick={openModal}
              className="border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-6 py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#e5b842]" />
              <span>Formulir Konsultasi Proyek</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

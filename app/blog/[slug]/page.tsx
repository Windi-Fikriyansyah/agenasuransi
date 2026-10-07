import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  Tag,
  ShieldCheck,
} from "lucide-react";
import { getArticleBySlug, getArticles, getPageContent } from "@/lib/content/db";
import type { SettingsContent } from "@/lib/content/pages/settings";
import type { Article } from "@/data/articles";
import ShareButtons from "./ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | PT Niaga Jaminan Nusantara",
      description: "Halaman artikel yang Anda cari tidak dapat ditemukan.",
    };
  }

  const siteUrl = "https://niagajaminannusantara.co.id";
  const canonicalUrl = `${siteUrl}/blog/${article.slug}`;

  return {
    title: `${article.title} | PT Niaga Jaminan Nusantara`,
    description: article.summary,
    keywords: [
      ...article.tags,
      "Bank Garansi",
      "Surety Bond",
      "PT Niaga Jaminan Nusantara",
      "Jasa Bank Garansi",
      "Jaminan Tender Proyek",
    ],
    authors: [{ name: article.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | PT Niaga Jaminan Nusantara`,
      description: article.summary,
      url: canonicalUrl,
      siteName: "PT Niaga Jaminan Nusantara",
      type: "article",
      locale: "id_ID",
      publishedTime: article.isoDate,
      modifiedTime: article.isoDate,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: "/images/banner-jaminan.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: ["/images/banner-jaminan.jpg"],
    },
  };
}

function getRelated(
  allArticles: Article[],
  currentSlug: string,
  category: string,
  limit = 3
): Article[] {
  const same = allArticles.filter(
    (a) => a.slug !== currentSlug && a.category === category
  );
  if (same.length >= limit) return same.slice(0, limit);
  const others = allArticles.filter(
    (a) => a.slug !== currentSlug && a.category !== category
  );
  return [...same, ...others].slice(0, limit);
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const [article, allArticles, settings] = await Promise.all([
    getArticleBySlug(slug),
    getArticles(),
    getPageContent<SettingsContent>("settings"),
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelated(allArticles, article.slug, article.category, 3);
  const contact = settings?.contact;
  const whatsappNumber = contact?.whatsappNumber || "6282113189343";
  const phoneNumber = contact?.phoneNumber || "082113189343";

  // Schema.org JSON-LD structured data for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://niagajaminannusantara.co.id/blog/${article.slug}#article`,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://niagajaminannusantara.co.id/#website",
          "name": "PT Niaga Jaminan Nusantara",
          "url": "https://niagajaminannusantara.co.id",
        },
        "headline": article.title,
        "description": article.summary,
        "datePublished": article.isoDate,
        "dateModified": article.isoDate,
        "mainEntityOfPage": `https://niagajaminannusantara.co.id/blog/${article.slug}`,
        "inLanguage": "id-ID",
        "author": {
          "@type": "Person",
          "name": article.author,
          "jobTitle": article.authorRole,
        },
        "publisher": {
          "@type": "Organization",
          "name": "PT Niaga Jaminan Nusantara",
          "url": "https://niagajaminannusantara.co.id",
          "logo": {
            "@type": "ImageObject",
            "url": "https://niagajaminannusantara.co.id/images/logo.png",
          },
        },
        "keywords": article.tags.join(", "),
        "articleSection": article.category,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://niagajaminannusantara.co.id/blog/${article.slug}#breadcrumb`,
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
            "name": "Blog",
            "item": "https://niagajaminannusantara.co.id/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://niagajaminannusantara.co.id/blog/${article.slug}`,
          },
        ],
      },
    ],
  };

  const whatsappConsultationUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo PT Niaga Jaminan Nusantara, saya membaca artikel "${article.title}" dan ingin konsultasi mengenai penerbitan jaminan proyek.`
  )}`;

  return (
    <>
      {/* JSON-LD Script for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden">
        {/* ========================================================
            1. BREADCRUMB & METADATA BAR
        ======================================================== */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-[#14234d] bg-[#070f26]/80 backdrop-blur-sm py-3 sm:py-4 sticky top-16 sm:top-20 z-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 overflow-hidden">
                <Link
                  href="/"
                  className="hover:text-[#e5b842] transition-colors shrink-0"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/blog"
                  className="hover:text-[#e5b842] transition-colors shrink-0"
                >
                  Blog
                </Link>
                <span>/</span>
                <span className="text-[#e5b842] font-semibold truncate max-w-[140px] sm:max-w-none">
                  {article.category}
                </span>
              </div>

              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-[#e5b842] hover:underline font-semibold shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Semua Artikel</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* ========================================================
            2. ARTICLE BODY CONTENT
        ======================================================== */}
        <article className="py-8 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            {/* Header Artikel */}
            <header className="space-y-3 sm:space-y-4 pb-5 sm:pb-6 border-b border-[#14234d]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#0b1638] text-[#e5b842] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-[#e5b842]/40 uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#e5b842]" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                {article.title}
              </h1>

              {/* Author & Publication Info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300 pt-1 sm:pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0b1638] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shrink-0">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">
                      {article.author}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {article.authorRole}
                    </span>
                  </div>
                </div>

                <span>•</span>

                <time
                  dateTime={article.isoDate}
                  className="flex items-center gap-1 text-slate-300"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#e5b842]" />
                  {article.date}
                </time>
              </div>
            </header>

            {/* Ringkasan Eksekutif */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0b1638] border border-[#1b2f69] shadow-xl">
              <h2 className="text-xs font-bold text-[#e5b842] uppercase tracking-wider mb-2">
                Ringkasan Artikel:
              </h2>
              <p className="text-slate-200 text-xs sm:text-base leading-relaxed italic">
                &ldquo;{article.summary}&rdquo;
              </p>
            </div>

            {/* Poin-Poin Kunci */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a183f] to-[#050b1a] border border-[#e5b842]/40 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-[#e5b842] shrink-0" />
                  <span>Poin Penting yang Perlu Diperhatikan:</span>
                </div>
                <ul className="space-y-2 sm:space-y-2.5 pt-1">
                  {article.keyTakeaways.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Konten Paragraf Lengkap */}
            <section className="space-y-5 sm:space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              {article.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Tags & Social Sharing Bar */}
            <div className="pt-5 sm:pt-6 border-t border-[#14234d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                  Topik:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#0b1638] text-slate-200 px-2.5 sm:px-3 py-1 rounded-full border border-[#1b2f69]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <ShareButtons title={article.title} slug={article.slug} />
            </div>

            {/* Call to Action Box Dalam Artikel */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b1638] via-[#091433] to-[#070f26] border border-[#e5b842]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e5b842]/10 rounded-bl-full pointer-events-none blur-2xl" />

              <div className="relative z-10 space-y-3">
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  KONSULTASI GRATIS PENJAMINAN
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Siap Memproses Bank Garansi atau Surety Bond untuk Proyek Anda?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Hubungi tim konsultan PT Niaga Jaminan Nusantara sekarang. Kami siap membantu review dokumen tender Anda secara gratis dan memproses warkat penjaminan tanpa agunan cepat dalam 1-3 hari kerja.
                </p>

                <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href={whatsappConsultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 sm:py-3 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Konsultasi via WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 font-semibold text-xs sm:text-sm px-5 py-3.5 sm:py-3 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] active:scale-95 text-center"
                  >
                    <Phone className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <span>Telepon Konsultan</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ARTIKEL TERKAIT */}
            {relatedArticles.length > 0 && (
              <section className="pt-10 sm:pt-12 border-t border-[#14234d] space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Artikel Terkait Lainnya
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Pelajari lebih banyak wawasan dan panduan penjaminan proyek
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/blog/${rel.slug}`}
                      className="bg-[#0b1638] rounded-xl p-4 sm:p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all shadow-lg flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div className="space-y-2 sm:space-y-2.5">
                        <span className="text-[10px] bg-[#070f26] text-[#e5b842] px-2.5 py-0.5 rounded-full border border-[#e5b842]/30 uppercase font-bold">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#e5b842] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {rel.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#1b2f69] flex items-center justify-between text-[11px] text-slate-400">
                        <span>{rel.readTime}</span>
                        <span className="text-[#e5b842] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Baca <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back Button */}
            <div className="pt-2 sm:pt-4 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-[#e5b842] transition-colors py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Semua Artikel Blog</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

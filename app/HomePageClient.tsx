"use client";

import React from "react";
import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Icon } from "@/components/site/Icon";
import { RichText } from "@/components/site/RichText";
import { homeDefaults, type HomeContent } from "@/lib/content/pages/home";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

interface HomePageClientProps {
  content?: HomeContent;
  settings?: SettingsContent;
}

export default function HomePageClient({
  content = homeDefaults,
  settings = settingsDefaults,
}: HomePageClientProps) {

  const hero = content.hero || homeDefaults.hero;
  const whatIs = content.whatIs || homeDefaults.whatIs;
  const functions = content.functions || homeDefaults.functions;
  const whyNeeded = content.whyNeeded || homeDefaults.whyNeeded;
  const products = content.products || homeDefaults.products;
  const whyUs = content.whyUs || homeDefaults.whyUs;
  const experience = content.experience || homeDefaults.experience;
  const sectors = content.sectors || homeDefaults.sectors;
  const ctaBottom = content.ctaBottom || homeDefaults.ctaBottom;

  const contact = settings.contact || settingsDefaults.contact;
  const company = settings.company || settingsDefaults.company;

  const openWhatsAppDirect = () => {
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappDefaultMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 flex flex-col font-sans overflow-x-hidden">
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section id="home" className="relative bg-[#060c1d] pt-10 sm:pt-12 pb-14 sm:pb-16 lg:py-24 border-b border-[#14234d] overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#e5b842]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1a3a8f]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-block">
                <span className="text-[#e5b842] text-xs sm:text-sm font-bold tracking-wider uppercase">
                  {hero.tagline}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-snug lg:leading-[1.15]">
                {hero.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl text-justify sm:text-left">
                {hero.description}
              </p>

              <div className="pt-2 flex items-center w-full sm:w-auto">
                <button
                  onClick={openWhatsAppDirect}
                  className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 sm:py-4 rounded-xl inline-flex items-center gap-2.5 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-[#070f26] shrink-0" />
                  <span>{hero.ctaConsultationText || "KONSULTASI SEKARANG"}</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

              {/* Fast Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                {(hero.badgeItems || []).map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5b842] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Medallion */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group max-w-[260px] xs:max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] w-full mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-blue-600/30 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition duration-700 animate-pulse" />

                <div className="relative aspect-square rounded-full p-2 bg-gradient-to-b from-amber-400/50 via-[#101e4a] to-[#040816] shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-300/60 relative bg-[#070f26]">
                    <Image
                      src={hero.medallionImage || "/images/gold-seal.jpg"}
                      alt={`${company.name} Medallion`}
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
              {whatIs.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {whatIs.intro}
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 pl-1">
              {(whatIs.parties || []).map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#e5b842] font-bold text-lg leading-none mt-1">•</span>
                  <span>
                    <strong className="text-white">{p.name}:</strong> {p.description}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              {(whatIs.paragraphs || []).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: FUNGSI JASA SURETY BOND RESMI
      ======================================================== */}
      <section id="fungsi" className="bg-[#060c1d] py-16 sm:py-20 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {functions.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {(functions.items || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] rounded-xl p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-14 h-14 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-6 bg-[#070f26] shadow-[0_0_15px_rgba(229,184,66,0.25)] group-hover:shadow-[0_0_25px_rgba(229,184,66,0.45)] transition-all">
                  <Icon name={item.icon} className="w-7 h-7 text-[#e5b842]" />
                </div>
                <h3 className="text-lg font-bold text-[#e5b842] mb-3 group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
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
                  src={whyNeeded.bannerImage || "/images/banner-jaminan.jpg"}
                  alt={whyNeeded.companyTag || company.name}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="bg-gradient-to-r from-[#0a183d] via-[#070f26] to-[#040816] p-4 border-t border-[#1b2f69] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#e5b842] font-bold block">
                      {whyNeeded.badge}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {whyNeeded.companyTag}
                    </span>
                  </div>
                  <a
                    href={`tel:${whyNeeded.phoneCall || contact.phoneNumber}`}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#f5c542] text-[#070f26] font-extrabold text-xs px-3.5 py-1.5 rounded-full transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{whyNeeded.phoneDisplay || contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                  {whyNeeded.eyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {whyNeeded.title}
              </h2>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                {(whyNeeded.paragraphs || []).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#e5b842] rounded-xl p-6 text-[#070f26] shadow-[0_0_30px_rgba(229,184,66,0.3)] space-y-3 mt-6">
                <div>
                  <h4 className="font-extrabold text-base sm:text-lg text-[#070f26]">
                    {whyNeeded.ctaCardTitle}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1 leading-relaxed">
                    {whyNeeded.ctaCardDescription}
                  </p>
                </div>

                <div>
                  <button
                    onClick={openWhatsAppDirect}
                    className="w-full sm:w-auto justify-center bg-[#070f26] hover:bg-[#0b1638] text-[#f5c542] hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-xl"
                  >
                    <span>{whyNeeded.ctaButtonText || "KONSULTASI GRATIS"}</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PRODUK & LAYANAN (SURETY BOND & GENERAL INSURANCE)
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
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              {products.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {products.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              {products.description}
            </p>
          </div>

          {/* PART A: Surety Bond & Bank Garansi */}
          <div className="space-y-6">
            <div className="border-b border-[#1b2f69] pb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-[#e5b842] to-[#b89328] rounded-full inline-block" />
                {products.suretySectionTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
                {products.suretySectionDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(products.suretyItems || []).map((item, idx) => {
                const isLast = idx === (products.suretyItems || []).length - 1;
                return (
                  <div
                    key={idx}
                    className={`bg-[#070f26]/90 backdrop-blur-md rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between ${
                      isLast ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div>
                      <div className="w-11 h-11 rounded-lg bg-[#0b1638] border border-[#e5b842]/50 flex items-center justify-center mb-4 text-[#e5b842]">
                        <Icon name={item.icon} className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-400">
                      <span>{item.stage}</span>
                      {item.highlightBadge && (
                        <span className="text-[#e5b842] font-semibold">
                          {item.highlightBadge}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PART B: General Insurance */}
          <div className="space-y-6 pt-6">
            <div className="border-b border-[#1b2f69] pb-4">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-1">
                {products.insuranceEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-8 bg-gradient-to-b from-[#e5b842] to-[#b89328] rounded-full inline-block" />
                {products.insuranceTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
                {products.insuranceDescription}
              </p>
              {products.insuranceSubtitle && (
                <div className="mt-3">
                  <span className="text-xs font-bold text-[#e5b842] tracking-wider uppercase bg-[#0b1638] px-3 py-1 rounded-full border border-[#1b2f69]">
                    {products.insuranceSubtitle}
                  </span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(products.insuranceItems || []).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#070f26]/85 backdrop-blur-md rounded-xl p-5 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center mb-3 text-[#e5b842]">
                      <Icon name={item.icon} className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#e5b842] group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. MENGAPA MEMILIH KAMI (5 PILAR)
      ======================================================== */}
      <section id="mengapa-kami" className="bg-[#070f26] py-16 sm:py-24 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              {whyUs.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {whyUs.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              {whyUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(whyUs.items || []).map((item, idx) => {
              const isLast = idx === (whyUs.items || []).length - 1;
              return (
                <div
                  key={idx}
                  className={`bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-xl ${
                    isLast ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#e5b842] uppercase tracking-wide mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
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
                  <Icon name={experience.badgeIcon} className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {experience.cardTitle}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {experience.cardDescription}
                </p>
                <div className="mt-6 pt-6 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#e5b842] font-bold">
                  {(experience.cardHighlights || []).map((h, idx) => (
                    <span key={idx}>{h}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {experience.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {experience.title}
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                {(experience.paragraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BIDANG YANG KAMI LAYANI (SEKTOR INDUSTRI)
      ======================================================== */}
      <section className="bg-[#070f26] py-16 sm:py-24 border-b border-[#14234d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase block mb-2">
              {sectors.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {sectors.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              {sectors.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(sectors.items || []).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] rounded-xl p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#070f26] border border-[#e5b842]/40 flex items-center justify-center mb-4 text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.2)]">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-[#e5b842] transition-colors mb-2.5 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. HEROIC BANNER CTA
      ======================================================== */}
      <section className="relative bg-[#050b18] py-20 sm:py-28 overflow-hidden border-b border-[#14234d] topo-waves">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#e5b842]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div>
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              {ctaBottom.eyebrow}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {ctaBottom.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {ctaBottom.description}
          </p>

          <div className="pt-4">
            <button
              onClick={openWhatsAppDirect}
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              <span>{ctaBottom.buttonText || "KONSULTASI GRATIS SEKARANG"}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

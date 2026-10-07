"use client";

import React, { useEffect } from "react";
import {
  FileText,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Icon } from "@/components/site/Icon";
import { RichText } from "@/components/site/RichText";
import {
  syaratKetentuanDefaults,
  type SyaratKetentuanContent,
} from "@/lib/content/pages/syarat-ketentuan";
import {
  settingsDefaults,
  type SettingsContent,
} from "@/lib/content/pages/settings";

interface SyaratKetentuanClientProps {
  content?: SyaratKetentuanContent;
  settings?: SettingsContent;
}

export default function SyaratKetentuanClient({
  content = syaratKetentuanDefaults,
  settings = settingsDefaults,
}: SyaratKetentuanClientProps) {
  const { openModal } = useModal();

  useEffect(() => {
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

  const header = content.header || syaratKetentuanDefaults.header;
  const legalChecklist =
    content.legalChecklist || syaratKetentuanDefaults.legalChecklist;
  const sidebar = content.sidebar || syaratKetentuanDefaults.sidebar;
  const productRequirements =
    content.productRequirements || syaratKetentuanDefaults.productRequirements;
  const steps = content.steps || syaratKetentuanDefaults.steps;
  const cta = content.cta || syaratKetentuanDefaults.cta;
  const contact = settings.contact || settingsDefaults.contact;

  const openWhatsApp = (customMessage?: string) => {
    const text =
      customMessage ||
      `Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi mengenai persyaratan penerbitan Bank Garansi dan Surety Bond`;
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden font-sans">
      {/* PERSYARATAN UMUM */}
      <section
        id="syarat-ketentuan"
        className="py-12 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#070f26] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              {header.tagline}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              {header.title}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
              {header.description}
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
                    {legalChecklist.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {legalChecklist.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {legalChecklist.items?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl bg-[#070f26]/60 border border-[#142557] hover:border-[#e5b842]/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#e5b842]/15 border border-[#e5b842] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5b842]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
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
                  {sidebar.efficiencyTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <RichText text={sidebar.efficiencyDescription} />
                </p>
                <div className="mt-4 pt-4 border-t border-[#1b2f69]">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        "Halo PT Niaga Jaminan Nusantara, saya ingin mengirimkan berkas scan PDF untuk konsultasi penerbitan jaminan"
                      )
                    }
                    className="w-full bg-[#070f26] hover:bg-[#0d1c47] text-[#e5b842] border border-[#e5b842]/50 hover:border-[#e5b842] font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{sidebar.efficiencyButtonText}</span>
                  </button>
                </div>
              </div>

              {/* Card Bantuan Konsultan */}
              <div className="bg-gradient-to-br from-[#0a183f] to-[#050b1a] rounded-2xl p-5 sm:p-6 border border-[#1f3878] shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-[#f5c542] shrink-0" />
                  <h4 className="text-sm font-bold text-white">
                    {sidebar.helpTitle}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <RichText text={sidebar.helpDescription} />
                </p>
                <div className="mt-4">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        "Halo PT Niaga Jaminan Nusantara, saya butuh bantuan konsultasi kelengkapan dokumen Bank Garansi"
                      )
                    }
                    className="text-xs text-[#e5b842] hover:text-[#f5c542] font-bold inline-flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{sidebar.helpLinkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSYARATAN BERDASARKAN JENIS JAMINAN */}
      <section className="py-12 sm:py-16 lg:py-24 border-b border-[#14234d] bg-[#060c1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              {productRequirements.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              {productRequirements.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
              {productRequirements.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {productRequirements.cards?.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                      <Icon
                        name={card.icon || "FileCheck2"}
                        className="w-6 h-6"
                      />
                    </div>
                    {card.stageBadge && (
                      <span className="bg-[#070f26] text-[#e5b842] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#e5b842]/30 uppercase tracking-wider">
                        {card.stageBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 mb-4 sm:mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                    {card.items?.map((itemText, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={`flex items-start gap-2 sm:gap-2.5 ${
                          itemIdx === card.items.length - 1
                            ? "bg-[#070f26]/80 p-2 sm:p-2.5 rounded-lg border border-[#e5b842]/30"
                            : ""
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            itemIdx === card.items.length - 1
                              ? "text-[#f5c542]"
                              : "text-[#e5b842]"
                          }`}
                        />
                        <span>
                          <RichText text={itemText} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1b2f69] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <span className="text-xs text-slate-400">
                    {card.estimatedTime}
                  </span>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi mengenai ${card.title}`
                      )
                    }
                    className="text-xs text-[#e5b842] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>{card.buttonText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUR PROSES PENGAJUAN */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#070f26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              {steps.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              {steps.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.items?.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] text-center shadow-lg relative group"
              >
                <div className="w-10 h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto mb-4 text-base">
                  {st.step || idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#050b18] topo-waves border-b border-[#14234d] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
            {cta.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {cta.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>{cta.whatsappButtonText}</span>
            </button>
            <button
              onClick={openModal}
              className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-[#e5b842] shrink-0" />
              <span>{cta.formButtonText}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

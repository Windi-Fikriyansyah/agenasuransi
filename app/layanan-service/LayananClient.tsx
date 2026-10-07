"use client";

import React, { useEffect } from "react";
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Icon } from "@/components/site/Icon";
import {
  layananDefaults,
  type LayananContent,
} from "@/lib/content/pages/layanan";
import {
  settingsDefaults,
  type SettingsContent,
} from "@/lib/content/pages/settings";

interface LayananClientProps {
  content?: LayananContent;
  settings?: SettingsContent;
}

export default function LayananClient({
  content = layananDefaults,
  settings = settingsDefaults,
}: LayananClientProps) {
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

  const header = content.header || layananDefaults.header;
  const suretyCard = content.suretyCard || layananDefaults.suretyCard;
  const bankCard = content.bankCard || layananDefaults.bankCard;
  const insuranceList =
    content.insuranceList || layananDefaults.insuranceList;
  const details = content.details || layananDefaults.details;
  const steps = content.steps || layananDefaults.steps;
  const cta = content.cta || layananDefaults.cta;
  const contact = settings.contact || settingsDefaults.contact;

  const openWhatsApp = (layananName?: string) => {
    const message = layananName
      ? `Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi dan informasi penerbitan mengenai layanan: ${layananName}.`
      : contact.whatsappDefaultMessage ||
        "Halo PT Niaga Jaminan Nusantara, saya ingin berkonsultasi mengenai produk dan layanan penjaminan serta asuransi proyek.";
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden font-sans">
      <section
        id="produk-layanan"
        className="py-10 sm:py-16 md:py-20 border-b border-[#14234d] bg-[#060c1d] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#14234d]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1638] border border-[#1b2f69] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
              <span className="text-[#e5b842] text-[11px] font-bold tracking-widest uppercase">
                {header.tagline}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {header.title}
            </h1>
            <p className="text-slate-300 text-xs sm:base md:text-lg mt-2 max-w-3xl leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Grid 2 Kolom: Surety Bond & Bank Garansi vs Asuransi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
            {/* Kolom Kiri: Surety Bond & Bank Garansi */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              {/* Surety Bond */}
              <div className="bg-gradient-to-br from-[#0b173d] via-[#081230] to-[#050b1e] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#e5b842]/10 rounded-bl-full pointer-events-none blur-2xl group-hover:bg-[#e5b842]/15 transition-all" />
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#070e24] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                      <Icon
                        name={suretyCard.icon || "FileText"}
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />
                    </div>
                    <div>
                      <div className="bg-[#0e1d4d] border border-[#23408a] text-white text-sm sm:text-lg font-extrabold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-inner">
                        {suretyCard.title}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-4">
                    {suretyCard.items?.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-[#162758] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="italic font-serif text-[#e5b842] text-sm sm:text-lg font-semibold tracking-wide">
                      {suretyCard.quote}
                    </span>
                    <button
                      onClick={() => openWhatsApp(suretyCard.title)}
                      className="text-xs bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/50 font-bold px-3.5 py-2.5 sm:py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{suretyCard.buttonText}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bank Garansi */}
              <div className="bg-gradient-to-br from-[#0b173d] via-[#081230] to-[#050b1e] rounded-2xl p-5 sm:p-7 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#e5b842]/10 rounded-bl-full pointer-events-none blur-2xl group-hover:bg-[#e5b842]/15 transition-all" />
                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#070e24] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                      <Icon
                        name={bankCard.icon || "Landmark"}
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />
                    </div>
                    <div>
                      <div className="bg-[#0e1d4d] border border-[#23408a] text-white text-sm sm:text-lg font-extrabold px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-inner">
                        {bankCard.title}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5 pl-1 sm:pl-4">
                    {bankCard.items?.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-slate-200 text-xs sm:text-base font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5 sm:mt-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-[#162758] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="italic font-serif text-[#e5b842] text-sm sm:text-lg font-semibold tracking-wide">
                      {bankCard.quote}
                    </span>
                    <button
                      onClick={() => openWhatsApp(bankCard.title)}
                      className="text-xs bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/50 font-bold px-3.5 py-2.5 sm:py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{bankCard.buttonText}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Daftar Asuransi */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#081230] via-[#070e24] to-[#040816] rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1b2f69] shadow-2xl flex flex-col justify-between space-y-4 sm:space-y-5">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="pb-2 border-b border-[#14234d]">
                  <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                    {insuranceList.eyebrow}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                    {insuranceList.title}
                  </h3>
                </div>

                {insuranceList.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#0b1638] border border-[#16295c] hover:border-[#e5b842]/50 transition-all group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#070f28] border-2 border-[#e5b842] flex items-center justify-center text-[#e5b842] shadow-md shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                      <Icon
                        name={item.icon || "Shield"}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {item.subtitle}
                      </p>
                      {item.extra && (
                        <p className="text-[11px] sm:text-xs text-slate-400">
                          {item.extra}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => openWhatsApp(item.topic || item.title)}
                      className="text-xs text-[#e5b842] hover:underline font-semibold shrink-0 pt-0.5 whitespace-nowrap cursor-pointer"
                    >
                      Tanya WA &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Penjelasan Detail Setiap Produk */}
          <div className="pt-8 sm:pt-10 border-t border-[#14234d] space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {details.eyebrow}
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                {details.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {details.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {details.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#e5b842]/60 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842]">
                    <Icon
                      name={item.icon || "ShieldCheck"}
                      className="w-5 h-5"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  {item.badge && (
                    <div className="pt-2 text-[11px] text-[#e5b842] font-semibold flex items-center gap-1">
                      <span>{item.badge}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 Langkah Cepat Penerbitan Jaminan */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#14234d]">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {steps.eyebrow}
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                {steps.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {steps.items?.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 text-center space-y-2 sm:space-y-3 relative"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e5b842] text-[#070f26] font-extrabold flex items-center justify-center mx-auto text-sm sm:text-base">
                    {stepItem.step || idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner Bawah */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0b173d] via-[#091538] to-[#060c1e] border border-[#e5b842]/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {cta.eyebrow}
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                {cta.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0 justify-center">
              <button
                onClick={() => openWhatsApp()}
                className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl inline-flex items-center gap-2 gold-glow-btn cursor-pointer shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>{cta.whatsappButtonText}</span>
              </button>
              <button
                onClick={openModal}
                className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-[#e5b842] shrink-0" />
                <span>{cta.formButtonText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

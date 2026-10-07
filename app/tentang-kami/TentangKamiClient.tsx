"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { useModal } from "@/components/ModalContext";
import { Icon } from "@/components/site/Icon";
import { RichText } from "@/components/site/RichText";
import {
  tentangKamiDefaults,
  type TentangKamiContent,
} from "@/lib/content/pages/tentang-kami";
import {
  settingsDefaults,
  type SettingsContent,
} from "@/lib/content/pages/settings";

interface TentangKamiClientProps {
  content?: TentangKamiContent;
  settings?: SettingsContent;
}

export default function TentangKamiClient({
  content = tentangKamiDefaults,
  settings = settingsDefaults,
}: TentangKamiClientProps) {
  const { openModal } = useModal();

  React.useEffect(() => {
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

  const profile = content.profile || tentangKamiDefaults.profile;
  const pillars = content.pillars || tentangKamiDefaults.pillars;
  const visionMission =
    content.visionMission || tentangKamiDefaults.visionMission;
  const cta = content.cta || tentangKamiDefaults.cta;
  const contact = settings.contact || settingsDefaults.contact;

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappDefaultMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden font-sans">
      {/* ========================================================
          PROFIL PERUSAHAAN
      ======================================================== */}
      <section
        id="tentang-kami"
        className="py-12 sm:py-16 md:py-20 lg:py-24 border-b border-[#14234d] bg-[#070f26] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Graphic Banner Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#1b2f69] shadow-2xl bg-[#091228] group">
                <Image
                  src={profile.bannerImage || "/images/banner-jaminan.jpg"}
                  alt={profile.bannerTitle || "Profil PT Niaga Jaminan Nusantara"}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="bg-gradient-to-r from-[#0a183d] via-[#070f26] to-[#040816] p-4 sm:p-5 border-t border-[#1b2f69]">
                  <div className="flex items-center gap-3">
                    <Icon
                      name={profile.bannerIcon || "ShieldCheck"}
                      className="w-7 h-7 sm:w-8 sm:h-8 text-[#e5b842] shrink-0"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        {profile.bannerTitle}
                      </h4>
                      <p className="text-xs text-slate-300">
                        {profile.bannerSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {profile.eyebrow}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {profile.title}
              </h1>

              <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-left">
                {profile.paragraphs?.map((p, idx) => (
                  <p key={idx}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================
              TIGA PILAR UTAMA (HIGHLIGHT CARDS)
          ======================================================== */}
          <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#1b2f69] grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {pillars?.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] rounded-xl p-5 sm:p-6 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-[#e5b842] flex items-center justify-center mb-4 bg-[#070f26] text-[#e5b842] shadow-[0_0_15px_rgba(229,184,66,0.25)]">
                  <Icon name={item.icon || "Award"} className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#e5b842] mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          VISI & MISI
      ======================================================== */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-b border-[#14234d] bg-[#060c1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
              {visionMission.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              {visionMission.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Visi Card */}
            <div className="bg-[#0b1638] rounded-2xl p-6 sm:p-8 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center mb-5 sm:mb-6 text-[#e5b842] shadow-[0_0_20px_rgba(229,184,66,0.3)]">
                  <Icon name="Target" className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-4 group-hover:text-[#e5b842] transition-colors uppercase tracking-wider">
                  {visionMission.visionTitle}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-medium italic">
                  {visionMission.visionStatement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b2f69] text-xs text-[#e5b842] font-semibold">
                {visionMission.visionFooter}
              </div>
            </div>

            {/* Misi Card */}
            <div className="bg-[#0b1638] rounded-2xl p-6 sm:p-8 border border-[#1b2f69] hover:border-[#e5b842]/70 transition-all duration-300 shadow-xl group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#070f26] border border-[#e5b842] flex items-center justify-center mb-5 sm:mb-6 text-[#e5b842] shadow-[0_0_20px_rgba(229,184,66,0.3)]">
                <Icon name="Compass" className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-4 group-hover:text-[#e5b842] transition-colors uppercase tracking-wider">
                {visionMission.missionTitle}
              </h3>
              <ul className="space-y-3.5 sm:space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {visionMission.missionPoints?.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5b842] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA BANNER
      ======================================================== */}
      <section className="py-14 sm:py-20 bg-[#050b18] topo-waves border-b border-[#14234d] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
            {cta.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {cta.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={openModal}
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 gold-glow-btn cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              <span>{cta.buttonConsultation}</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto justify-center border border-[#1f3775] hover:border-[#e5b842] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:bg-[#0b1638] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#e5b842]" />
              <span>{cta.buttonWhatsapp}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

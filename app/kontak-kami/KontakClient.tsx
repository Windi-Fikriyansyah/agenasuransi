"use client";

import React, { useState, useEffect } from "react";
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
  Zap,
} from "lucide-react";
import { Icon } from "@/components/site/Icon";
import {
  kontakDefaults,
  type KontakContent,
} from "@/lib/content/pages/kontak";
import {
  settingsDefaults,
  type SettingsContent,
} from "@/lib/content/pages/settings";

interface KontakClientProps {
  content?: KontakContent;
  settings?: SettingsContent;
}

export default function KontakClient({
  content = kontakDefaults,
  settings = settingsDefaults,
}: KontakClientProps) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const header = content.header || kontakDefaults.header;
  const form = content.form || kontakDefaults.form;
  const info = content.info || kontakDefaults.info;
  const map = content.map || kontakDefaults.map;
  const regions = content.regions || kontakDefaults.regions;
  const faqs = content.faqs || kontakDefaults.faqs;

  const contact = settings.contact || settingsDefaults.contact;
  const company = settings.company || settingsDefaults.company;

  const effectiveWhatsapp = contact.whatsappNumber || info.whatsappNumber;
  const effectivePhone = contact.phoneNumber || info.phoneNumber;
  const effectiveEmail = contact.email || info.email;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Halo ${company.name || "PT Niaga Jaminan Nusantara"},%0A%0ASaya ingin mengirimkan pesan melalui form kontak:%0A- Nama: ${encodeURIComponent(
      formData.nama
    )}%0A- Email: ${encodeURIComponent(
      formData.email
    )}%0A- Pesan: ${encodeURIComponent(formData.message)}%0A%0ATerima kasih.`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${effectiveWhatsapp}?text=${whatsappMessage}`,
        "_blank"
      );
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const openDirectWhatsApp = (topic?: string) => {
    const text = topic
      ? `Halo ${company.name || "PT Niaga Jaminan Nusantara"}, saya ingin konsultasi mengenai ${topic}.`
      : contact.whatsappDefaultMessage ||
        "Halo PT Niaga Jaminan Nusantara, saya ingin berkonsultasi mengenai penerbitan Bank Garansi dan Surety Bond.";
    window.open(
      `https://wa.me/${effectiveWhatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#060c1d] text-slate-100 min-h-screen overflow-x-hidden font-sans">
      <section
        id="kontak-utama"
        className="py-10 sm:py-16 border-b border-[#14234d] bg-[#060c1d] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#14234d]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1638] border border-[#1b2f69] mb-2">
                  <Building2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                  <span className="text-[#e5b842] text-[11px] font-bold tracking-widest uppercase">
                    {header.tagline}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {header.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  {header.description}
                </p>
              </div>

              {/* Quick Response Badge */}
              <div className="shrink-0 flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#0b1638] border border-[#e5b842]/40 text-xs text-[#e5b842] font-semibold self-start md:self-auto">
                <Zap className="w-4 h-4 fill-current text-[#e5b842] shrink-0" />
                <span>{header.badgeText}</span>
              </div>
            </div>
          </div>

          {/* Grid 2 Kolom: Contact Form & Kontak Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* KOLOM 1: CONTACT FORM */}
            <div className="lg:col-span-7 bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl relative">
              <div className="mb-5 sm:mb-6 pb-4 border-b border-[#14234d]">
                <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                  {form.eyebrow}
                </span>
                <h2 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                  {form.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {form.description}
                </p>
              </div>

              {submitted && (
                <div className="mb-5 sm:mb-6 p-4 rounded-xl bg-[#0b291d] border border-emerald-500/50 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-white">
                      {form.successTitle}
                    </strong>
                    <span className="leading-relaxed block mt-0.5">
                      {form.successDescription}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) =>
                      setFormData({ ...formData, nama: e.target.value })
                    }
                    placeholder={form.namePlaceholder}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={form.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {form.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={form.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#e5b842] resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 bg-[#0b1638] p-3 rounded-xl border border-[#152758]">
                  <ShieldCheck className="w-4 h-4 text-[#e5b842] shrink-0" />
                  <span>{form.privacyGuarantee}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 gold-glow-btn cursor-pointer shadow-xl hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-70 text-center"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>
                    {isSubmitting ? form.submitLoadingText : form.submitText}
                  </span>
                </button>
              </form>
            </div>

            {/* KOLOM 2: KONTAK DETAIL & LOKASI KANTOR */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-6 md:p-7 shadow-2xl space-y-4 sm:space-y-5">
                <div className="pb-3 border-b border-[#14234d]">
                  <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
                    {info.eyebrow}
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold text-white mt-0.5">
                    {info.title}
                  </h3>
                </div>

                {/* Alamat Kantor */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                      {info.addressBadge}
                    </span>
                    <strong className="text-white block font-bold leading-snug">
                      {info.addressTitle}
                    </strong>
                    <p className="text-slate-300 text-xs leading-relaxed mt-0.5">
                      {info.addressDetail}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                  <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex-1 space-y-0.5 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                      {info.whatsappBadge}
                    </span>
                    <a
                      href={`https://wa.me/${effectiveWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold hover:text-[#25D366] transition-colors block text-xs sm:text-sm"
                    >
                      {info.whatsappDisplay || effectiveWhatsapp}
                    </a>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">
                      {info.whatsappSubtext}
                    </p>
                  </div>
                  <button
                    onClick={() => openDirectWhatsApp()}
                    className="text-xs bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/50 px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-[#25D366] hover:text-[#070f26] font-bold transition-all shrink-0 cursor-pointer"
                  >
                    Chat
                  </button>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                  <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-0.5 min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                      {info.phoneBadge}
                    </span>
                    <a
                      href={`tel:${effectivePhone}`}
                      className="text-white font-bold hover:text-[#e5b842] transition-colors block text-xs sm:text-sm"
                    >
                      {info.phoneDisplay || effectivePhone}
                    </a>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">
                      {info.phoneSubtext}
                    </p>
                  </div>
                  <a
                    href={`tel:${effectivePhone}`}
                    className="text-xs bg-[#0b1638] text-slate-200 border border-[#1b2f69] hover:border-[#e5b842] px-2.5 sm:px-3 py-1.5 rounded-lg hover:text-[#e5b842] font-semibold transition-all shrink-0"
                  >
                    Panggil
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                  <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                      {info.emailBadge}
                    </span>
                    <a
                      href={`mailto:${effectiveEmail}`}
                      className="text-slate-200 hover:text-[#e5b842] transition-colors block text-xs font-semibold truncate"
                    >
                      {effectiveEmail}
                    </a>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">
                      {info.emailSubtext}
                    </p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3 text-xs sm:text-sm pt-2 border-t border-[#14234d]">
                  <div className="w-8 h-8 rounded-lg bg-[#0b1638] border border-[#1b2f69] flex items-center justify-center text-[#e5b842] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#e5b842] uppercase tracking-wider block">
                      {info.hoursBadge}
                    </span>
                    <div className="text-xs text-slate-300 space-y-1">
                      <div className="flex justify-between gap-2">
                        <span>Senin – Jumat:</span>
                        <span className="font-semibold text-white">
                          {info.hoursWeekday}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span>Sabtu:</span>
                        <span className="font-semibold text-white">
                          {info.hoursSaturday}
                        </span>
                      </div>
                      <div className="flex flex-col xs:flex-row justify-between gap-0.5">
                        <span>Minggu &amp; Libur:</span>
                        <span className="text-[#e5b842] font-semibold">
                          {info.hoursSunday}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peta Lokasi */}
              <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#e5b842]" />
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {map.title}
                    </h4>
                  </div>
                  <a
                    href={map.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#e5b842] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Buka Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#14234d] h-44 sm:h-56 w-full relative bg-[#091228]">
                  <iframe
                    title={map.title}
                    src={map.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] contrast-[105%]"
                  />
                </div>

                <p className="text-[10px] sm:text-[11px] text-slate-400 text-center">
                  {map.caption}
                </p>
              </div>

              {/* Wilayah Layanan */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0b1638] to-[#070f26] border border-[#1b2f69] space-y-3">
                <h4 className="text-xs font-bold text-[#e5b842] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                  <span>{regions.title}</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {regions.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#14234d]">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <span className="text-[#e5b842] text-xs font-bold tracking-widest uppercase">
                {faqs.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {faqs.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {faqs.items?.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#070f26] border border-[#1b2f69] rounded-xl p-4 sm:p-5 space-y-2"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Icon
                      name={faq.icon || "HelpCircle"}
                      className="w-4 h-4 text-[#e5b842] shrink-0"
                    />
                    <h4>{faq.question}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

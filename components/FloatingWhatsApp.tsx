"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

interface FloatingWhatsAppProps {
  settings?: SettingsContent;
}

export default function FloatingWhatsApp({
  settings = settingsDefaults,
}: FloatingWhatsAppProps) {
  const contact = settings.contact || settingsDefaults.contact;
  const floating = settings.floatingWhatsapp || settingsDefaults.floatingWhatsapp;

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(contact.whatsappDefaultMessage);
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Helper tooltip */}
      <div className="hidden sm:flex items-center bg-zinc-900/90 text-white border border-zinc-700 text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-pulse">
        <span>{floating.tooltip || "Konsultasi Cepat Online"}</span>
      </div>

      {/* Pulsing button */}
      <button
        onClick={openWhatsAppDirect}
        className="relative w-14 h-14 bg-[#25d366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
        aria-label="Chat WhatsApp PT Niaga Jaminan Nusantara"
      >
        {/* Ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </button>
    </aside>
  );
}

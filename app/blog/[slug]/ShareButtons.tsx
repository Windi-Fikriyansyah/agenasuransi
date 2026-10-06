"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://niagajaminannusantara.co.id/blog/${slug}`;
  };

  const handleCopy = () => {
    const url = getUrl();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const shareWhatsApp = () => {
    const url = getUrl();
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\nBaca selengkapnya di: ${url}`)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    const url = getUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareTwitter = () => {
    const url = getUrl();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5 text-[#e5b842] shrink-0" />
        Bagikan:
      </span>

      {/* WhatsApp */}
      <button
        onClick={shareWhatsApp}
        className="text-xs bg-[#0b1638] hover:bg-[#25D366]/20 text-slate-300 hover:text-[#25D366] px-2.5 py-1.5 rounded-lg border border-[#1b2f69] hover:border-[#25D366]/50 transition-colors cursor-pointer"
        title="Bagikan ke WhatsApp"
      >
        WhatsApp
      </button>

      {/* LinkedIn */}
      <button
        onClick={shareLinkedIn}
        className="text-xs bg-[#0b1638] hover:bg-[#0A66C2]/20 text-slate-300 hover:text-[#0A66C2] px-2.5 py-1.5 rounded-lg border border-[#1b2f69] hover:border-[#0A66C2]/50 transition-colors cursor-pointer"
        title="Bagikan ke LinkedIn"
      >
        LinkedIn
      </button>

      {/* Twitter / X */}
      <button
        onClick={shareTwitter}
        className="text-xs bg-[#0b1638] hover:bg-[#1DA1F2]/20 text-slate-300 hover:text-[#1DA1F2] px-2.5 py-1.5 rounded-lg border border-[#1b2f69] hover:border-[#1DA1F2]/50 transition-colors cursor-pointer"
        title="Bagikan ke X (Twitter)"
      >
        X (Twitter)
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
          copied
            ? "bg-[#e5b842] text-[#070f26] border-[#e5b842] font-bold"
            : "bg-[#0b1638] text-slate-300 hover:text-white border-[#1b2f69] hover:border-[#e5b842]"
        }`}
        title="Salin tautan artikel"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Tersalin</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span>Salin</span>
          </>
        )}
      </button>
    </div>
  );
}

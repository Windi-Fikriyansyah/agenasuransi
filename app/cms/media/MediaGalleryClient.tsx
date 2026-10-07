"use client";

import React, { useState } from "react";
import {
  Upload,
  Copy,
  Check,
  Image as ImageIcon,
  Loader2,
  ExternalLink,
  Plus,
} from "lucide-react";

interface MediaItem {
  name: string;
  url: string;
  tag?: string;
}

const DEFAULT_MEDIA: MediaItem[] = [
  { name: "Logo Utama (Navbar)", url: "/images/logo.png", tag: "Branding" },
  { name: "Logo Footer", url: "/images/logo-footer.png", tag: "Branding" },
  { name: "Banner Jaminan Proyek", url: "/images/banner-jaminan.jpg", tag: "Banner" },
  { name: "Gold Seal Medallion", url: "/images/gold-seal.jpg", tag: "Graphic" },
  { name: "Construction Background", url: "/images/construction-bg.jpg", tag: "Background" },
  { name: "Flyer NJN", url: "/images/njn.png", tag: "Flyer" },
];

export default function MediaGalleryClient() {
  const [items, setItems] = useState<MediaItem[]>(DEFAULT_MEDIA);
  const [isUploading, setIsUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2500);
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        const newItem: MediaItem = {
          name: file.name,
          url: data.url,
          tag: "Upload Baru",
        };
        setItems((prev) => [newItem, ...prev]);
        handleCopy(data.url);
      } else {
        alert(data.error || "Gagal mengupload gambar.");
      }
    } catch (err: any) {
      alert("Error upload: " + err.message);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Drop Zone Card */}
      <div className="p-6 rounded-2xl bg-[#070f26] border-2 border-dashed border-[#1b2f69] hover:border-[#e5b842]/70 transition-all text-center space-y-3">
        <div className="w-12 h-12 rounded-xl bg-[#0b1638] border border-[#e5b842]/40 flex items-center justify-center text-[#e5b842] mx-auto">
          {isUploading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Upload className="w-6 h-6" />
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">
            {isUploading ? "Sedang Mengupload Gambar..." : "Upload Gambar Baru"}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Mendukung file JPG, PNG, WEBP, atau SVG. Setelah terupload, URL publik akan disalin otomatis untuk ditempelkan di editor konten.
          </p>
        </div>

        <div>
          <label className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl inline-flex items-center gap-2 cursor-pointer gold-glow-btn shadow-lg transition-all">
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Pilih File Dari Komputer</span>
            <input
              type="file"
              accept="image/*"
              disabled={isUploading}
              onChange={handleUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Media Grid */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold text-white">
          Daftar Media &amp; Gambar ({items.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => {
            const isCopied = copiedUrl === item.url;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#070f26] border border-[#1b2f69] hover:border-[#e5b842]/60 transition-all shadow-lg flex flex-col justify-between space-y-3 group"
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#040814] border border-[#14234d] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
                  />
                  {item.tag && (
                    <span className="absolute top-2 left-2 text-[10px] font-bold bg-[#070f26]/90 text-[#e5b842] px-2 py-0.5 rounded-md border border-[#1b2f69]">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white truncate" title={item.name}>
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-slate-400 font-mono truncate" title={item.url}>
                    {item.url}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-[#14234d] flex items-center justify-between gap-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Buka</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleCopy(item.url)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isCopied
                        ? "bg-[#e5b842] text-[#070f26] font-bold"
                        : "bg-[#0b1638] text-slate-200 hover:text-white border border-[#1b2f69] hover:border-[#e5b842]"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

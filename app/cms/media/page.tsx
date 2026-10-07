import React from "react";
import MediaGalleryClient from "./MediaGalleryClient";

export default function CmsMediaPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto w-full">
      <div className="pb-4 border-b border-[#14234d]">
        <span className="text-[10px] text-[#e5b842] font-bold uppercase tracking-wider bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
          Media Manager
        </span>
        <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
          Galeri Gambar &amp; Aset
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Upload file gambar dan dapatkan link publiknya untuk disematkan pada konten halaman.
        </p>
      </div>

      <MediaGalleryClient />
    </div>
  );
}

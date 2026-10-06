import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Send, Clock, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-[#040816] pt-16 pb-12 border-t border-[#14234d] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Logo Brand */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Link href="/">
                  <Image
                    src="/images/logo-footer.png"
                    alt="PT NIAGA JAMINAN NUSANTARA"
                    width={450}
                    height={130}
                    className="h-24 sm:h-28 md:h-32 w-auto object-contain object-left cursor-pointer"
                  />
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <MapPin className="w-4 h-4 text-[#e5b842] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Alamat:</strong> Gedung Graha Surveyor Indonesia Lantai 15, Jl. Gatot Subroto Kav. 56, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12950
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify sm:text-left">
              Sebagai agen dan konsultan resmi Surety Bond dan Bank Garansi, kami bermitra dengan puluhan perusahaan asuransi terkemuka dan bank BUMN/swasta ternama untuk menjamin legalitas serta keamanan penjaminan proyek Anda. Berpengalaman menangani ribuan proyek konstruksi, pengadaan, dan manufaktur berskala nasional.
            </p>

            {/* Direct Contacts */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <a
                href="tel:081140665585"
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#e5b842] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e5b842]" />
                <span>0811-4066-5585</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="mailto:info@anugrahluasjaya.co.id"
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#e5b842] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#e5b842]" />
                <span>info@anugrahluasjaya.co.id</span>
              </a>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#e5b842]" />
                <span>Senin - Sabtu: 08.00 - 18.00 WIB</span>
              </span>
            </div>

            {/* Copyright */}
            <div className="pt-4 text-xs text-slate-500 border-t border-[#14234d]">
              &copy; {new Date().getFullYear()} PT Niaga Jaminan Nusantara. All rights reserved.
            </div>
          </div>

          {/* Right Column: Flyer & Location Coverage */}
          <div className="lg:col-span-5 space-y-6">
            {/* Flyer Thumbnail Card */}
            <div className="relative rounded-lg overflow-hidden border border-[#1a2e63] shadow-lg bg-[#091228] w-48 sm:w-56">
              <Image
                src="/images/njn.png"
                alt="Bank Garansi & Asuransi"
                width={224}
                height={126}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Service Areas */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#e5b842] shrink-0" />
                <span>Melayani Lokasi Terdekat Anda:</span>
              </div>
              <div className="space-y-1 pl-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842]" />
                  <span>DKI Jakarta &amp; Jabodetabek (Bogor, Depok, Tangerang, Bekasi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842]" />
                  <span>Jawa Barat, Jawa Tengah, DI Yogyakarta, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842]" />
                  <span>Sumatera, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Papua</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#f5c542] pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b842]" />
                  <span>Siap melayani seluruh wilayah Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

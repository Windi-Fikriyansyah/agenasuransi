"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { useModal } from "./ModalContext";

export default function ConsultationModal() {
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    telepon: "",
    jenisJaminan: "Bid Bond (Jaminan Penawaran)",
    nilaiProyek: "",
    catatan: "",
  });

  if (!isModalOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo PT Niaga Jaminan Nusantara,%0A%0ASaya ingin konsultasi mengenai penerbitan Bank Garansi / Surety Bond:%0A- Nama: ${encodeURIComponent(
      formData.nama
    )}%0A- Perusahaan: ${encodeURIComponent(
      formData.perusahaan
    )}%0A- Telepon: ${encodeURIComponent(
      formData.telepon
    )}%0A- Jenis Jaminan: ${encodeURIComponent(
      formData.jenisJaminan
    )}%0A- Estimasi Nilai: ${encodeURIComponent(
      formData.nilaiProyek
    )}%0A- Catatan: ${encodeURIComponent(formData.catatan)}`;

    window.open(
      `https://wa.me/6282113189343?text=${whatsappMessage}`,
      "_blank"
    );
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left my-8 animate-fadeIn">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-[#101d44] transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[#e5b842] text-xs font-bold uppercase tracking-wider block">
            Formulir Pengajuan
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Konsultasi Bank Garansi &amp; Surety Bond
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Isi form di bawah ini, tim konsultan kami akan merespons dalam hitungan menit via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              required
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
              placeholder="Contoh: Budi Santoso"
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Nama Perusahaan (PT / CV) *
            </label>
            <input
              type="text"
              required
              value={formData.perusahaan}
              onChange={(e) =>
                setFormData({ ...formData, perusahaan: e.target.value })
              }
              placeholder="Contoh: PT Konstruksi Jaya Abadi"
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={formData.telepon}
              onChange={(e) =>
                setFormData({ ...formData, telepon: e.target.value })
              }
              placeholder="Contoh: 081234567890"
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Jenis Jaminan yang Dibutuhkan *
            </label>
            <select
              value={formData.jenisJaminan}
              onChange={(e) =>
                setFormData({ ...formData, jenisJaminan: e.target.value })
              }
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            >
              <option value="Bid Bond (Jaminan Penawaran)">
                Bid Bond (Jaminan Penawaran)
              </option>
              <option value="Performance Bond (Jaminan Pelaksanaan)">
                Performance Bond (Jaminan Pelaksanaan)
              </option>
              <option value="Advance Payment Bond (Jaminan Uang Muka)">
                Advance Payment Bond (Jaminan Uang Muka)
              </option>
              <option value="Maintenance Bond (Jaminan Pemeliharaan)">
                Maintenance Bond (Jaminan Pemeliharaan)
              </option>
              <option value="Bank Garansi (Jaminan Bank BUMN/Swasta)">
                Bank Garansi (Jaminan Bank BUMN/Swasta)
              </option>
              <option value="Asuransi Rekayasa / CAR / EAR">
                Asuransi Rekayasa / CAR / EAR
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Estimasi Nilai Proyek / Jaminan (Opsional)
            </label>
            <input
              type="text"
              value={formData.nilaiProyek}
              onChange={(e) =>
                setFormData({ ...formData, nilaiProyek: e.target.value })
              }
              placeholder="Contoh: Rp 500.000.000"
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              rows={2}
              value={formData.catatan}
              onChange={(e) =>
                setFormData({ ...formData, catatan: e.target.value })
              }
              placeholder="Tuliskan jika ada kebutuhan spesifik seperti tanpa agunan..."
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c69a25] hover:to-[#e5b842] text-[#070f26] font-extrabold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all gold-glow-btn cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Kirim &amp; Hubungkan ke WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

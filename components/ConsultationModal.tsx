"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { useModal } from "./ModalContext";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

interface ConsultationModalProps {
  settings?: SettingsContent;
}

export default function ConsultationModal({
  settings = settingsDefaults,
}: ConsultationModalProps) {
  const { isModalOpen, closeModal } = useModal();
  const modal = settings.modal || settingsDefaults.modal;
  const contact = settings.contact || settingsDefaults.contact;
  const company = settings.company || settingsDefaults.company;

  const typeOptions = modal.typeOptions || settingsDefaults.modal.typeOptions;

  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    telepon: "",
    jenisJaminan: typeOptions[0] || "Bid Bond (Jaminan Penawaran)",
    nilaiProyek: "",
    catatan: "",
  });

  if (!isModalOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo ${encodeURIComponent(company.name)},%0A%0ASaya ingin konsultasi mengenai penerbitan Bank Garansi / Surety Bond:%0A- Nama: ${encodeURIComponent(
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
      `https://wa.me/${contact.whatsappNumber}?text=${whatsappMessage}`,
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
            {modal.eyebrow}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {modal.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {modal.description}
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.nameLabel}
            </label>
            <input
              type="text"
              required
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
              placeholder={modal.namePlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.companyLabel}
            </label>
            <input
              type="text"
              required
              value={formData.perusahaan}
              onChange={(e) =>
                setFormData({ ...formData, perusahaan: e.target.value })
              }
              placeholder={modal.companyPlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.phoneLabel}
            </label>
            <input
              type="tel"
              required
              value={formData.telepon}
              onChange={(e) =>
                setFormData({ ...formData, telepon: e.target.value })
              }
              placeholder={modal.phonePlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.typeLabel}
            </label>
            <select
              value={formData.jenisJaminan}
              onChange={(e) =>
                setFormData({ ...formData, jenisJaminan: e.target.value })
              }
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.valueLabel}
            </label>
            <input
              type="text"
              value={formData.nilaiProyek}
              onChange={(e) =>
                setFormData({ ...formData, nilaiProyek: e.target.value })
              }
              placeholder={modal.valuePlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              {modal.notesLabel}
            </label>
            <textarea
              rows={2}
              value={formData.catatan}
              onChange={(e) =>
                setFormData({ ...formData, catatan: e.target.value })
              }
              placeholder={modal.notesPlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-lg text-sm text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c69a25] hover:to-[#e5b842] text-[#070f26] font-extrabold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all gold-glow-btn cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>{modal.submitLabel}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

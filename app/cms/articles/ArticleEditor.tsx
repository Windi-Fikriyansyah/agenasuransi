"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Save,
  ChevronLeft,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { saveArticleAction } from "../actions";
import type { Article } from "@/data/articles";

interface ArticleEditorProps {
  initialArticle?: Article;
}

export default function ArticleEditor({ initialArticle }: ArticleEditorProps) {
  const router = useRouter();
  const isNew = !initialArticle;

  const [formData, setFormData] = useState<Article>(() => {
    if (initialArticle) return initialArticle;
    const now = new Date();
    return {
      id: String(Date.now()),
      title: "",
      slug: "",
      category: "Bank Garansi",
      date: `${now.getDate()} ${
        [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ][now.getMonth()]
      } ${now.getFullYear()}`,
      isoDate: now.toISOString(),
      readTime: "5 menit baca",
      author: "Tim Legal & Underwriting NJN",
      authorRole: "Divisi Penjaminan Korporasi",
      summary: "",
      content: [""],
      keyTakeaways: [""],
      tags: ["Bank Garansi", "Surety Bond"],
    };
  });

  const [tagsString, setTagsString] = useState(formData.tags.join(", "));
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    const autoSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: isNew || !prev.slug ? autoSlug : prev.slug,
    }));
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert("Judul artikel tidak boleh kosong.");
      return;
    }
    if (!formData.slug.trim()) {
      alert("Slug URL tidak boleh kosong.");
      return;
    }

    const cleanedTags = tagsString
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload: Article = {
      ...formData,
      tags: cleanedTags,
      content: formData.content.filter((c) => c.trim().length > 0),
      keyTakeaways: formData.keyTakeaways.filter((k) => k.trim().length > 0),
    };

    setStatus({ type: "idle" });
    startTransition(async () => {
      const res = await saveArticleAction(payload);
      if (res.success) {
        setStatus({
          type: "success",
          message: "Artikel berhasil disimpan dan dipublikasikan!",
        });
        if (isNew) {
          setTimeout(() => {
            router.push(`/cms/articles/${payload.id}`);
          }, 1000);
        }
      } else {
        setStatus({
          type: "error",
          message: res.error || "Gagal menyimpan artikel.",
        });
      }
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#14234d]">
        <div className="flex items-center gap-3">
          <Link
            href="/cms/articles"
            className="p-2 rounded-xl bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] transition-colors"
            title="Kembali ke Daftar Artikel"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <span className="text-[10px] text-[#e5b842] font-bold uppercase tracking-wider bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
              {isNew ? "Artikel Baru" : "Edit Artikel"}
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {formData.title || "Tulis Artikel Baru"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {!isNew && (
            <a
              href={`/blog/${formData.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <span>Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={handleSave}
            disabled={isPending}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold px-5 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg transition-all disabled:opacity-60"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menyimpan...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Simpan Artikel</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Alert Status */}
      {status.type === "success" && (
        <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}
      {status.type === "error" && (
        <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      {/* Form Fields Card */}
      <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-5 sm:p-7 space-y-5 shadow-xl">
        {/* Title */}
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Judul Artikel <span className="text-[#e5b842]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Contoh: Panduan Lengkap Bank Garansi untuk Tender Proyek"
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
        </div>

        {/* Slug & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Slug URL <span className="text-[#e5b842]">*</span>
            </label>
            <div className="flex items-center bg-[#0b1638] border border-[#1b2f69] rounded-xl overflow-hidden px-3">
              <span className="text-xs text-slate-500">/blog/</span>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                className="w-full py-2.5 px-1 bg-transparent text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              Kategori Artikel <span className="text-[#e5b842]">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value as Article["category"],
                })
              }
              className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#e5b842]"
            >
              <option value="Bank Garansi">Bank Garansi</option>
              <option value="Surety Bond">Surety Bond</option>
              <option value="Tips Tender">Tips Tender</option>
              <option value="Regulasi">Regulasi</option>
            </select>
          </div>
        </div>

        {/* Author, Read time & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Penulis
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="w-full px-3.5 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Jabatan / Divisi Penulis
            </label>
            <input
              type="text"
              value={formData.authorRole}
              onChange={(e) =>
                setFormData({ ...formData, authorRole: e.target.value })
              }
              className="w-full px-3.5 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              Estimasi Waktu Baca
            </label>
            <input
              type="text"
              value={formData.readTime}
              onChange={(e) =>
                setFormData({ ...formData, readTime: e.target.value })
              }
              className="w-full px-3.5 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
            />
          </div>
        </div>

        {/* Summary */}
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1.5">
            Ringkasan / Excerpt Artikel
          </label>
          <textarea
            rows={3}
            value={formData.summary}
            onChange={(e) =>
              setFormData({ ...formData, summary: e.target.value })
            }
            placeholder="Ringkasan 2-3 kalimat yang tampil di kartu blog dan meta description..."
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
        </div>

        {/* Key Takeaways */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-200">
              Poin-Poin Penting (Key Takeaways)
            </label>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  keyTakeaways: [...formData.keyTakeaways, ""],
                })
              }
              className="text-[11px] bg-[#0b1638] text-[#e5b842] hover:bg-[#122459] border border-[#e5b842]/40 font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Tambah Poin</span>
            </button>
          </div>

          <div className="space-y-2">
            {formData.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs text-[#e5b842] font-bold w-5">
                  •
                </span>
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updated = [...formData.keyTakeaways];
                    updated[idx] = e.target.value;
                    setFormData({ ...formData, keyTakeaways: updated });
                  }}
                  className="flex-1 px-3 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
                  placeholder="Poin penting artikel..."
                />
                <button
                  type="button"
                  onClick={() => {
                    const updated = formData.keyTakeaways.filter(
                      (_, i) => i !== idx
                    );
                    setFormData({ ...formData, keyTakeaways: updated });
                  }}
                  className="p-1.5 text-rose-400 hover:text-rose-200"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-2 pt-2 border-t border-[#14234d]">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-xs font-semibold text-white">
                Isi Paragraf Artikel ({formData.content.length} Paragraf)
              </label>
              <p className="text-[11px] text-slate-400">
                Tulis tiap paragraf dalam kotak terpisah agar tersusun rapi.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  content: [...formData.content, ""],
                })
              }
              className="text-[11px] bg-[#0b1638] text-[#e5b842] hover:bg-[#122459] border border-[#e5b842]/40 font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Paragraf</span>
            </button>
          </div>

          <div className="space-y-3 pt-1">
            {formData.content.map((paragraph, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0b1638] border border-[#162758] space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#e5b842]">
                    Paragraf #{idx + 1}
                  </span>
                  {formData.content.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const updated = formData.content.filter(
                          (_, i) => i !== idx
                        );
                        setFormData({ ...formData, content: updated });
                      }}
                      className="text-rose-400 hover:text-rose-200 flex items-center gap-1 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Hapus</span>
                    </button>
                  )}
                </div>
                <textarea
                  rows={4}
                  value={paragraph}
                  onChange={(e) => {
                    const updated = [...formData.content];
                    updated[idx] = e.target.value;
                    setFormData({ ...formData, content: updated });
                  }}
                  className="w-full px-3 py-2 bg-[#070f26] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#e5b842] resize-y"
                  placeholder="Tuliskan isi paragraf di sini..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-2 border-t border-[#14234d]">
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            Tags (Pisahkan dengan koma)
          </label>
          <input
            type="text"
            value={tagsString}
            onChange={(e) => setTagsString(e.target.value)}
            placeholder="Contoh: Bank Garansi, Tender, LPSE, OJK"
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
        </div>
      </div>
    </div>
  );
}

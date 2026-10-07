"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  Edit3,
  Trash2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { deleteArticleAction } from "../actions";
import type { Article } from "@/data/articles";

export default function ArticleListClient({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const categories = ["Semua", "Bank Garansi", "Surety Bond", "Tips Tender", "Regulasi"];

  const filtered = articles.filter((a) => {
    const matchCat = category === "Semua" || a.category === category;
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Hapus artikel "${title}"? Tindakan ini tidak dapat dibatalkan.`)) {
      return;
    }

    setDeletingId(id);
    const res = await deleteArticleAction(id);
    setDeletingId(null);

    if (res.success) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } else {
      alert(res.error || "Gagal menghapus artikel.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                category === c
                  ? "bg-[#e5b842] text-[#070f26] font-bold"
                  : "bg-[#070f26] text-slate-300 hover:text-white border border-[#1b2f69]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari judul artikel..."
            className="w-full pl-9 pr-3 py-2 bg-[#070f26] border border-[#1b2f69] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Articles Cards Grid */}
      {filtered.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#070f26] border border-[#1b2f69] text-center space-y-2">
          <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-sm font-bold text-white">Tidak Ada Artikel</h3>
          <p className="text-xs text-slate-400">
            Tidak ditemukan artikel yang sesuai filter pencarian Anda.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#070f26] border border-[#1b2f69] hover:border-[#e5b842]/50 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#e5b842] bg-[#0b1638] px-2.5 py-0.5 rounded-full border border-[#e5b842]/30 uppercase">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#e5b842]" />
                    {article.readTime}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e5b842] transition-colors leading-snug">
                  <Link href={`/cms/articles/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-300 line-clamp-1">
                  {article.summary}
                </p>

                <div className="text-[11px] text-slate-500">
                  Slug: <code className="text-slate-400">/blog/{article.slug}</code>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <a
                  href={`/blog/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] transition-colors"
                  title="Lihat di Web"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href={`/cms/articles/${article.id}`}
                  className="bg-[#0b1638] hover:bg-[#e5b842] text-[#e5b842] hover:text-[#070f26] border border-[#e5b842]/40 text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </Link>

                <button
                  type="button"
                  disabled={deletingId === article.id}
                  onClick={() => handleDelete(article.id, article.title)}
                  className="p-2 rounded-xl bg-rose-950/40 text-rose-300 hover:text-white hover:bg-rose-900 border border-rose-900/50 transition-colors cursor-pointer disabled:opacity-50"
                  title="Hapus Artikel"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Search,
  Calendar,
  Clock,
  Edit3,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { getArticles } from "@/lib/content/db";
import ArticleListClient from "./ArticleListClient";

export default async function CmsArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#14234d]">
        <div>
          <span className="text-[10px] text-[#e5b842] font-bold uppercase tracking-wider bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
            Kelola Artikel
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Blog &amp; Edukasi Penjaminan
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Tambah, edit, atau hapus artikel untuk mengedukasi pengunjung dan meningkatkan SEO.
          </p>
        </div>

        <Link
          href="/cms/articles/new"
          className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Tulis Artikel Baru</span>
        </Link>
      </div>

      {/* Client List with Search & Delete Confirmation */}
      <ArticleListClient initialArticles={articles} />
    </div>
  );
}

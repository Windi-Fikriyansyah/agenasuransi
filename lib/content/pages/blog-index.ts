import {
  seoSection,
  strings,
  text,
  textarea,
  type PageSchema,
} from "../schema-types";

export const blogIndexDefaults = {
  header: {
    tagline: "PT NIAGA JAMINAN NUSANTARA",
    title: "Daftar Artikel & Edukasi Terbaru",
    subtitle: "Semua Topik",
    searchPlaceholder: "Cari topik artikel...",
  },
  categories: ["Semua", "Bank Garansi", "Surety Bond", "Tips Tender", "Regulasi"],
  cta: {
    eyebrow: "KONSULTASI GRATIS",
    title: "PT NIAGA JAMINAN NUSANTARA",
    description:
      "Ingin berkonsultasi mengenai kelayakan dokumen tender atau penerbitan Bank Garansi & Surety Bond tanpa agunan? Tim kami siap mendampingi Anda hingga tuntas.",
    whatsappButtonText: "Chat WhatsApp Konsultan",
    formButtonText: "Formulir Konsultasi Proyek",
  },
  seo: {
    title: "Blog & Edukasi Penjaminan Proyek | PT Niaga Jaminan Nusantara",
    description:
      "Kumpulan artikel, edukasi, panduan tender LPSE/LKPP, regulasi OJK, serta tips praktis penerbitan Bank Garansi & Surety Bond tanpa agunan di Indonesia.",
    keywords: [
      "Blog Penjaminan",
      "Bank Garansi",
      "Surety Bond",
      "Tender LPSE",
      "Tips Tender Proyek",
      "PT Niaga Jaminan Nusantara",
      "Regulasi OJK Asuransi",
      "Non Collateral Bank Garansi",
    ],
  },
};

export type BlogIndexContent = typeof blogIndexDefaults;

export const blogIndexSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman daftar Blog."),
    {
      key: "header",
      title: "Header Halaman Blog",
      fields: [
        text("tagline", "Tagline Kecil"),
        text("title", "Judul Utama (H1)"),
        text("subtitle", "Subjudul Ringkas"),
        text("searchPlaceholder", "Placeholder Pencarian"),
      ],
    },
    {
      key: "",
      title: "Kategori Blog",
      fields: [
        strings("categories", "Pilihan Kategori", { itemLabel: "Kategori" }),
      ],
    },
    {
      key: "cta",
      title: "Banner CTA Bawah",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        text("whatsappButtonText", "Teks Tombol WhatsApp"),
        text("formButtonText", "Teks Tombol Form"),
      ],
    },
  ],
};

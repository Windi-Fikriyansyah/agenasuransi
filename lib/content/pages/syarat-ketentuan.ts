import {
  icon,
  list,
  seoSection,
  text,
  textarea,
  type PageSchema,
} from "../schema-types";

export const syaratKetentuanDefaults = {
  header: {
    tagline: "PT NIAGA JAMINAN NUSANTARA",
    title: "Persyaratan Penerbitan Bank Garansi & Surety Bond",
    description:
      "Dokumen legalitas utama perusahaan yang wajib dilampirkan oleh Principal (Pelaksana Proyek) sebagai syarat underwriting dan verifikasi awal oleh pihak Bank maupun Asuransi penjamin:",
  },
  legalChecklist: {
    title: "Checklist Dokumen Legalitas Perusahaan",
    subtitle: "Wajib dilengkapi untuk pengajuan penerbitan jaminan proyek",
    items: [
      {
        title: "Akte Pendirian Beserta Perubahan Terakhir",
        description:
          "Melampirkan salinan akta pendirian perusahaan dan akta perubahan susunan pengurus/modal terakhir.",
      },
      {
        title: "SK MENKEH, SIUJK, SIUP, TDP / NIB, & NPWP",
        description:
          "Surat Keputusan Kemenkumham, Izin Usaha Jasa Konstruksi, NIB / SIUP / TDP, serta NPWP Badan Usaha yang masih berlaku.",
      },
      {
        title: "Keterangan Domisili",
        description: "Surat Keterangan Domisili Perusahaan (SKDP) atau bukti domisili kantor resmi.",
      },
      {
        title: "Mengisi Form Permohonan Penjaminan",
        description:
          "Mengisi formulir permohonan resmi yang ditujukan ke pihak asuransi atau bank penerbit (form kami sediakan).",
      },
      {
        title: "Melampirkan List Pengalaman Pekerjaan",
        description:
          "Daftar rekam jejak pekerjaan (track record) atau proyek yang pernah diselesaikan oleh perusahaan dalam 1-3 tahun terakhir.",
      },
      {
        title: "Laporan Keuangan 2 Tahun Terakhir",
        description:
          "Laporan keuangan internal atau audit 2 tahun terakhir yang memuat neraca aktiva-pasiva dan laporan rugi laba.",
      },
      {
        title: "Photocopy KTP Direksi dan Komisaris Selaku Pengurus",
        description:
          "Salinan identitas sah KTP seluruh Direksi dan Dewan Komisaris yang tercantum dalam akta perusahaan.",
      },
    ],
  },
  sidebar: {
    efficiencyTitle: "Kirim Dokumen via WhatsApp / Email",
    efficiencyDescription:
      "Untuk mempercepat proses review dan draft penerbitan jaminan, seluruh dokumen cukup dikirimkan dalam format scan **PDF** via WhatsApp atau Email tanpa harus datang ke kantor kami.",
    efficiencyButtonText: "Kirim Berkas PDF ke WhatsApp",
    helpTitle: "Ada Dokumen yang Belum Lengkap?",
    helpDescription:
      "Jangan khawatir! Tim konsultan **PT NIAGA JAMINAN NUSANTARA** siap membantu pendampingan dan memberikan solusi terbaik agar jaminan Anda tetap dapat diterbitkan tepat waktu sebelum tenggat lelang atau proyek.",
    helpLinkText: "Konsultasikan Masalah Dokumen",
  },
  productRequirements: {
    eyebrow: "PERSYARATAN KHUSUS TIAP PRODUK",
    title: "Persyaratan Dokumen Sesuai Jenis Jaminan",
    description:
      "Selain dokumen legalitas dasar di atas, lampirkan dokumen pendukung spesifik sesuai dengan jenis jaminan yang Anda ajukan:",
    cards: [
      {
        icon: "FileCheck2",
        stageBadge: "Tahap Tender",
        title: "Persyaratan Jaminan Penawaran (Bid Bond)",
        description:
          "Dibutuhkan untuk memenuhi syarat pendaftaran dan keikutsertaan tender / lelang proyek pemerintah maupun swasta.",
        items: [
          "Melampirkan **company profile** dan legalitas perusahaan lengkap.",
          "Melampirkan **laporan keuangan 2 tahun terakhir** dan neraca rugi laba.",
          "Melampirkan **list pengalaman pekerjaan** perusahaan.",
          "Melampirkan **dokumen lelang atau tender** (RKS, Undangan Tender, atau Pengumuman Lelang).",
        ],
        estimatedTime: "Estimasi Terbit: 1 Hari Kerja",
        buttonText: "Ajukan Bid Bond",
      },
      {
        icon: "ShieldCheck",
        stageBadge: "Tahap Pemenang",
        title: "Persyaratan Jaminan Pelaksanaan (Performance Bond)",
        description:
          "Menjamin bahwa pemenang lelang akan menandatangani kontrak dan menyelesaikan proyek sesuai spesifikasi.",
        items: [
          "Melampirkan **company profile** dan legalitas perusahaan lengkap.",
          "Melampirkan **laporan keuangan 2 tahun terakhir** dan neraca rugi laba.",
          "Melampirkan **list pengalaman pekerjaan** perusahaan.",
          "Melampirkan **surat penunjukan pemenang lelang / SPPBJ / SPK / SPMK / Kontrak**.",
        ],
        estimatedTime: "Estimasi Terbit: 1-2 Hari Kerja",
        buttonText: "Ajukan Performance Bond",
      },
      {
        icon: "Coins",
        stageBadge: "Pencairan DP Proyek",
        title: "Persyaratan Jaminan Uang Muka (Advance Payment Bond)",
        description:
          "Dibutuhkan untuk mencairkan uang muka / Down Payment (DP) proyek dari pihak pemilik proyek (Obligee).",
        items: [
          "Melampirkan **company profile** dan legalitas perusahaan lengkap.",
          "Melampirkan **laporan keuangan 2 tahun terakhir** dan neraca rugi laba.",
          "Melampirkan **list pengalaman pekerjaan** perusahaan.",
          "Melampirkan **kontrak / purchase order (PO) / letter of intent (LOI) / work order (WO)**.",
        ],
        estimatedTime: "Estimasi Terbit: 1-2 Hari Kerja",
        buttonText: "Ajukan Advance Bond",
      },
      {
        icon: "Wrench",
        stageBadge: "Masa Garansi",
        title: "Persyaratan Jaminan Pemeliharaan (Maintenance Bond)",
        description:
          "Menjamin perbaikan atas kerusakan fisik selama masa garansi/pemeliharaan setelah pekerjaan selesai 100%.",
        items: [
          "Melampirkan **company profile** dan legalitas perusahaan lengkap.",
          "Melampirkan **laporan keuangan 2 tahun terakhir** dan neraca rugi laba.",
          "Melampirkan **list pengalaman pekerjaan** perusahaan.",
          "Melampirkan **kontrak dan Berita Acara Serah Terima pekerjaan (BAST)**.",
        ],
        estimatedTime: "Estimasi Terbit: 1-2 Hari Kerja",
        buttonText: "Ajukan Maintenance Bond",
      },
    ],
  },
  steps: {
    eyebrow: "PROSES CEPAT & TRANSPARAN",
    title: "4 Langkah Mudah Penerbitan Jaminan",
    items: [
      {
        step: "1",
        title: "Kirim Dokumen",
        description:
          "Kirim softcopy/scan dokumen legalitas dan dokumen lelang/kontrak Anda via WhatsApp atau Email.",
      },
      {
        step: "2",
        title: "Verifikasi & Draft",
        description:
          "Tim analis melakukan verifikasi kelayakan dan menerbitkan konsep draft polis untuk Anda setujui.",
      },
      {
        step: "3",
        title: "Pembayaran Premi",
        description:
          "Lakukan pembayaran premi resmi setelah draft penjaminan diverifikasi dan disetujui.",
      },
      {
        step: "4",
        title: "Penerbitan & Kirim",
        description:
          "Sertifikat / Warkat Bank Garansi dan Polis Asli langsung dicetak dan dikirimkan ke alamat Anda.",
      },
    ],
  },
  cta: {
    eyebrow: "KONSULTASI BEBAS BIAYA",
    title: "PT NIAGA JAMINAN NUSANTARA",
    description:
      "Segera konsultasikan kebutuhan penerbitan Bank Garansi dan Surety Bond proyek Anda bersama konsultan ahli kami. Proses cepat, syarat fleksibel, dan legalitas resmi terverifikasi.",
    whatsappButtonText: "HUBUNGI KAMI (0821-1318-9343)",
    formButtonText: "Formulir Permohonan Online",
  },
  seo: {
    title:
      "Syarat & Ketentuan Penerbitan Bank Garansi dan Surety Bond | PT Niaga Jaminan Nusantara",
    description:
      "Persyaratan lengkap penerbitan Bank Garansi dan Surety Bond (Bid Bond, Performance Bond, Advance Payment Bond, Maintenance Bond) PT Niaga Jaminan Nusantara. Proses cepat, syarat ringan, dan terpercaya.",
    keywords: [
      "Syarat Bank Garansi",
      "Persyaratan Surety Bond",
      "Syarat Bid Bond",
      "Syarat Performance Bond",
      "Syarat Advance Payment Bond",
      "Syarat Maintenance Bond",
      "PT Niaga Jaminan Nusantara",
      "Dokumen Penerbitan Bank Garansi",
    ],
  },
};

export type SyaratKetentuanContent = typeof syaratKetentuanDefaults;

export const syaratKetentuanSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman Syarat & Ketentuan."),
    {
      key: "header",
      title: "Header Halaman",
      fields: [
        text("tagline", "Tagline Kecil"),
        text("title", "Judul Utama (H1)"),
        textarea("description", "Deskripsi"),
      ],
    },
    {
      key: "legalChecklist",
      title: "Checklist Dokumen Legalitas",
      fields: [
        text("title", "Judul Box"),
        text("subtitle", "Subjudul Box"),
        list(
          "items",
          "Daftar Dokumen",
          "Dokumen",
          [text("title", "Nama Dokumen"), textarea("description", "Penjelasan")],
          "title"
        ),
      ],
    },
    {
      key: "sidebar",
      title: "Kotak Samping (Tips & Bantuan)",
      fields: [
        text("efficiencyTitle", "Judul Efisiensi WhatsApp"),
        textarea("efficiencyDescription", "Deskripsi Efisiensi WhatsApp"),
        text("efficiencyButtonText", "Teks Tombol WhatsApp"),
        text("helpTitle", "Judul Bantuan"),
        textarea("helpDescription", "Deskripsi Bantuan"),
        text("helpLinkText", "Teks Link Bantuan"),
      ],
    },
    {
      key: "productRequirements",
      title: "Persyaratan Tiap Produk Jaminan",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Section"),
        textarea("description", "Deskripsi"),
        list(
          "cards",
          "Daftar Kartu Produk",
          "Produk Jaminan",
          [
            icon("icon", "Ikon"),
            text("stageBadge", "Badge Tahap"),
            text("title", "Nama Jaminan"),
            textarea("description", "Deskripsi"),
            text("estimatedTime", "Estimasi Waktu"),
            text("buttonText", "Teks Tombol"),
          ],
          "title"
        ),
      ],
    },
    {
      key: "steps",
      title: "4 Langkah Mudah",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Section"),
        list(
          "items",
          "Langkah",
          "Langkah",
          [text("step", "Nomor Langkah"), text("title", "Judul"), textarea("description", "Deskripsi")],
          "title"
        ),
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

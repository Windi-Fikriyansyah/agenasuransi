import {
  icon,
  list,
  seoSection,
  strings,
  text,
  textarea,
  type PageSchema,
} from "../schema-types";

export const layananDefaults = {
  header: {
    tagline: "PT NIAGA JAMINAN NUSANTARA",
    title: "Produk & Layanan Kami",
    description:
      "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda.",
  },
  suretyCard: {
    title: "Surety Bond",
    icon: "FileText",
    items: [
      "Bid Bond (Jaminan Penawaran)",
      "Performance Bond (Jaminan Pelaksanaan)",
      "Advance Payment Bond (Jaminan Uang Muka)",
      "Maintenance Bond (Jaminan Pemeliharaan)",
    ],
    quote: "“Jaminan yang Menguatkan Kepercayaan”",
    buttonText: "Konsultasi",
  },
  bankCard: {
    title: "Bank Garansi",
    icon: "Landmark",
    items: [
      "Non-Collateral (Tanpa Setoran Tunai Penuh)",
      "Cash Collateral",
      "Fasilitas Bank (BUMN & Bank Swasta Terkemuka)",
    ],
    quote: "“Cepat, Fleksibel, Tanpa Ribet”",
    buttonText: "Konsultasi",
  },
  insuranceList: {
    eyebrow: "PRODUK ASURANSI LENGKAP",
    title: "Perlindungan Risiko Bisnis & Konstruksi",
    items: [
      {
        icon: "HardHat",
        title: "Asuransi Konstruksi",
        subtitle: "CAR (Contractor All Risk)",
        extra: "(Construction All Risk)",
        topic: "Asuransi Konstruksi CAR",
      },
      {
        icon: "Shield",
        title: "Asuransi Umum",
        subtitle: "CGL (Commercial General Liability)",
        extra: "Asuransi Properti, dan lainnya",
        topic: "Asuransi Umum & CGL",
      },
      {
        icon: "UserCheck",
        title: "Professional Indemnity",
        subtitle: "(Tanggung Jawab Profesional)",
        extra: "",
        topic: "Professional Indemnity",
      },
      {
        icon: "Ship",
        title: "Cargo & Engineering",
        subtitle: "(Pengangkutan Barang & Risiko Teknik)",
        extra: "",
        topic: "Cargo & Engineering",
      },
      {
        icon: "FileText",
        title: "Asuransi Lainnya",
        subtitle: "Sesuai kebutuhan proyek dan bisnis Anda",
        extra: "",
        topic: "Asuransi Custom Lainnya",
      },
    ],
  },
  details: {
    eyebrow: "INFORMASI DETAIL PRODUK",
    title: "Karakteristik & Keunggulan Setiap Layanan",
    description:
      "Pelajari fungsi dan kegunaan masing-masing jaminan agar tepat sasaran sesuai klausul Rencana Kerja dan Syarat-syarat (RKS) lelang Anda.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Jaminan Penawaran (Bid Bond)",
        description:
          "Menjamin kesungguhan Principal dalam mengajukan penawaran lelang tender. Jika Principal mengundurkan diri setelah memenangkan tender atau menolak menandatangani kontrak, penjamin akan membayar ganti rugi sesuai nilai jaminan kepada Obligee.",
        badge: "Masa laku: 30 - 180 hari kalender",
      },
      {
        icon: "Zap",
        title: "Jaminan Pelaksanaan (Performance Bond)",
        description:
          "Menjamin bahwa Principal akan menyelesaikan pekerjaan sesuai spesifikasi teknis, gambar kerja, dan jadwal waktu yang tercantum di dalam Kontrak Kerja/SPK (umumnya senilai 5% dari total nilai kontrak).",
        badge: "Masa laku: Sejak SPK terbit hingga BAST-1",
      },
      {
        icon: "Landmark",
        title: "Jaminan Uang Muka (Advance Payment Bond)",
        description:
          "Dipakai kontraktor untuk mencairkan uang muka (biasanya 20% - 30% nilai kontrak). Menjamin uang muka dipergunakan semestinya dan akan dikembalikan secara bertahap lewat pemotongan termin progres pekerjaan.",
        badge: "Nilai jaminan: 100% dari nilai uang muka",
      },
      {
        icon: "HardHat",
        title: "Jaminan Pemeliharaan (Maintenance Bond)",
        description:
          "Sebagai pengganti retensi kas 5% setelah serah terima pertama (BAST 1). Menjamin perbaikan cacat mutu pekerjaan selama masa garansi (3 - 12 bulan) sehingga arus kas kontraktor tetap cair maksimal.",
        badge: "Pencairan dana retensi kas 100%",
      },
      {
        icon: "Shield",
        title: "Asuransi CAR (Contractor All Risk)",
        description:
          "Memberikan perlindungan all-risk terhadap kerusakan fisik proyek selama masa konstruksi (kebakaran, gempa, tanah longsor, roboh) dan perlindungan tuntutan pihak ketiga (Third Party Liability / TPL).",
        badge: "Perlindungan material & pihak ketiga",
      },
      {
        icon: "Layers",
        title: "Bank Garansi Non-Collateral",
        description:
          "Fasilitas penerbitan warkat resmi bank umum tanpa perlu memblokir dana kas 100%. Membantu kontraktor yang sedang menangani banyak proyek sekaligus agar modal kerja tetap berputar leluasa.",
        badge: "Legal, resmi & diverifikasi bank",
      },
    ],
  },
  steps: {
    eyebrow: "PROSES MUDAH & TRANSPARAN",
    title: "4 Langkah Cepat Penerbitan Jaminan",
    items: [
      {
        step: "1",
        title: "Kirim Dokumen",
        description:
          "Kirimkan salinan legalitas perusahaan dan dokumen tender (RKS/SPK/Kontrak) via WhatsApp atau email.",
      },
      {
        step: "2",
        title: "Analisis & Draft",
        description:
          "Tim analis menghitung tarif premi terbaik dan menerbitkan draft warkat untuk persetujuan (approval) Anda.",
      },
      {
        step: "3",
        title: "Penerbitan Asli",
        description:
          "Warkat resmi diterbitkan oleh bank atau asuransi rekanan lengkap dengan nomor register dan konfirmasi keabsahan.",
      },
      {
        step: "4",
        title: "Pengiriman Warkat",
        description:
          "Hardcopy warkat dikirim kilat ke kantor Anda di seluruh Indonesia, softcopy dikirim segera via WhatsApp/Email.",
      },
    ],
  },
  cta: {
    eyebrow: "KONSULTASI GRATIS & CEPAT",
    title: "Butuh Jaminan Tender Hari Ini?",
    description:
      "Diskusikan kebutuhan proyek Anda bersama tim konsultan PT Niaga Jaminan Nusantara. Kami siap membantu kalkulasi premi dan pengurusan tanpa ribet.",
    whatsappButtonText: "Chat WhatsApp",
    formButtonText: "Form Pengajuan",
  },
  seo: {
    title:
      "Produk & Layanan Kami - Bank Garansi, Surety Bond & Asuransi Proyek | PT Niaga Jaminan Nusantara",
    description:
      "Melayani berbagai kebutuhan jaminan dan asuransi untuk mendukung kesuksesan proyek dan bisnis Anda: Surety Bond, Bank Garansi Non-Collateral, Asuransi Konstruksi (CAR), Asuransi Umum (CGL), Professional Indemnity, Cargo & Engineering.",
    keywords: [
      "Produk dan Layanan",
      "Surety Bond",
      "Bank Garansi",
      "Bid Bond",
      "Performance Bond",
      "Advance Payment Bond",
      "Maintenance Bond",
      "Bank Garansi Non-Collateral",
      "Asuransi Konstruksi CAR",
      "Commercial General Liability CGL",
      "Professional Indemnity",
      "Marine Cargo Insurance",
      "Engineering Insurance",
      "PT Niaga Jaminan Nusantara",
    ],
  },
};

export type LayananContent = typeof layananDefaults;

export const layananSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman Layanan Service."),
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
      key: "suretyCard",
      title: "Kartu Surety Bond",
      fields: [
        text("title", "Judul"),
        icon("icon", "Ikon"),
        strings("items", "Daftar Layanan", { itemLabel: "Layanan" }),
        text("quote", "Kutipan / Slogan"),
        text("buttonText", "Teks Tombol"),
      ],
    },
    {
      key: "bankCard",
      title: "Kartu Bank Garansi",
      fields: [
        text("title", "Judul"),
        icon("icon", "Ikon"),
        strings("items", "Daftar Layanan", { itemLabel: "Layanan" }),
        text("quote", "Kutipan / Slogan"),
        text("buttonText", "Teks Tombol"),
      ],
    },
    {
      key: "insuranceList",
      title: "Daftar Produk Asuransi",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Section"),
        list(
          "items",
          "Daftar Asuransi",
          "Asuransi",
          [
            icon("icon", "Ikon"),
            text("title", "Judul"),
            text("subtitle", "Subjudul"),
            text("extra", "Teks Tambahan"),
            text("topic", "Topik untuk Chat WhatsApp"),
          ],
          "title"
        ),
      ],
    },
    {
      key: "details",
      title: "Detail & Karakteristik Produk",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Section"),
        textarea("description", "Deskripsi"),
        list(
          "items",
          "Daftar Detail",
          "Item Detail",
          [
            icon("icon", "Ikon"),
            text("title", "Judul"),
            textarea("description", "Deskripsi"),
            text("badge", "Badge / Masa Laku"),
          ],
          "title"
        ),
      ],
    },
    {
      key: "steps",
      title: "4 Langkah Cepat",
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

import {
  icon,
  image,
  list,
  rich,
  seoSection,
  strings,
  text,
  textarea,
  url,
  type PageSchema,
} from "../schema-types";

export const homeDefaults = {
  hero: {
    tagline: "PT NIAGA JAMINAN NUSANTARA",
    title: "Jasa Bank Garansi & Surety Bond Terpercaya di Indonesia",
    description:
      "Layanan Penerbitan Bank Garansi dan Surety Bond cepat tanpa agunan (Non Collateral) dan dengan agunan (Collateral) untuk berbagai keperluan proyek pemerintah maupun swasta di seluruh wilayah Indonesia. Proses mudah, syarat ringan, legalitas resmi, dan terdaftar di OJK.",
    ctaConsultationText: "KONSULTASI SEKARANG",
    badgeItems: ["Tanpa Agunan", "Resmi OJK", "Proses Cepat", "Se-Indonesia"],
    medallionImage: "/images/gold-seal.jpg",
  },
  whatIs: {
    title: "Apa Itu Jasa Surety Bond?",
    intro: "Jasa surety bond merupakan layanan penerbitan jaminan proyek yang melibatkan tiga pihak:",
    parties: [
      {
        name: "Obligee",
        description: "pemilik proyek (pemberi kerja / instansi pemerintah atau swasta)",
      },
      {
        name: "Principal",
        description: "kontraktor / pelaksana yang mengerjakan proyek",
      },
      {
        name: "Surety",
        description: "perusahaan asuransi penjamin resmi yang menerbitkan jaminan",
      },
    ],
    paragraphs: [
      "Melalui instrumen ini, pemilik proyek mendapatkan kepastian bahwa proyek akan selesai sesuai kontrak, sementara kontraktor dapat memenuhi persyaratan tender tanpa harus mengendapkan modal tunai berlebih.",
      "Layanan kami mempermudah proses ini secara legal, transparan, dan terpercaya untuk memastikan kelancaran bisnis dan reputasi perusahaan Anda.",
    ],
  },
  functions: {
    title: "Fungsi Jasa Surety Bond Resmi",
    items: [
      {
        icon: "ShieldCheck",
        title: "Memberikan Jaminan Kepastian Proyek",
        description:
          "Melindungi pemilik proyek dari risiko wanprestasi oleh kontraktor. Jaminan ini memberikan kepastian hukum dan finansial sepanjang masa pelaksanaan proyek hingga serah terima.",
      },
      {
        icon: "TrendingUp",
        title: "Meningkatkan Kredibilitas Perusahaan",
        description:
          "Membantu kontraktor memperbesar peluang memenangkan tender dengan melampirkan jaminan resmi dari institusi penjamin terpercaya dan teregulasi OJK.",
      },
      {
        icon: "FileCheck2",
        title: "Menjadi Syarat Tender Pemerintah",
        description:
          "Memenuhi ketentuan pengadaan barang dan jasa pemerintah (LPSE, LKPP) maupun BUMN yang mewajibkan adanya jaminan penawaran dan jaminan pelaksanaan.",
      },
    ],
  },
  whyNeeded: {
    badge: "KONSULTAN RESMI BERPENGALAMAN",
    companyTag: "PT NIAGA JAMINAN NUSANTARA",
    bannerImage: "/images/banner-jaminan.jpg",
    phoneDisplay: "0811-4066-5585",
    phoneCall: "081140665585",
    eyebrow: "JASA BANK GARANSI & SURETY BOND TERPERCAYA DI INDONESIA",
    title: "Mengapa Surety Bond Semakin Dibutuhkan dalam Proyek Modern?",
    paragraphs: [
      "Dalam iklim bisnis modern yang kompetitif dan berisiko tinggi, instrumen penjaminan finansial bukan lagi sekadar formalitas administratif, melainkan benteng pertahanan krusial bagi kelangsungan proyek.",
      "Meningkatnya kompleksitas rantai pasok global dan fluktuasi ekonomi menuntut kepastian hukum serta mitigasi risiko yang solid antara kontraktor (principal) dan pemilik proyek (obligee).",
      "Surety bond hadir sebagai solusi cerdas yang menguntungkan kedua belah pihak: membebaskan modal kerja kontraktor tanpa perlu mengendapkan agunan tunai penuh, sekaligus memberikan garansi pemulihan kerugian finansial bagi obligee jika terjadi wanprestasi.",
    ],
    ctaCardTitle: "Hubungi Kami Sekarang:",
    ctaCardDescription:
      "Konsultasikan kebutuhan jaminan proyek Anda bersama tim ahli kami. Proses cepat, legalitas terjamin, tanpa agunan menyulitkan!",
    ctaButtonText: "KONSULTASI GRATIS",
  },
  products: {
    eyebrow: "PRODUK & LAYANAN",
    title: "Solusi Penjaminan & Asuransi Lengkap",
    description:
      "Mendukung perusahaan Anda dalam memenuhi persyaratan tender, kontrak, serta perlindungan operasional bisnis.",
    suretySectionTitle: "Surety Bond & Bank Garansi",
    suretySectionDescription:
      "NJN menyediakan solusi penjaminan untuk mendukung perusahaan dalam mengikuti proses tender, memenuhi persyaratan kontrak, serta menjalankan kewajiban dalam berbagai proyek dan kegiatan bisnis.",
    suretyItems: [
      {
        icon: "FileText",
        title: "Bid Bond / Jaminan Penawaran",
        description: "Mendukung pemenuhan persyaratan jaminan pada proses tender atau pelelangan.",
        stage: "Tahap Tender / Pelelangan",
      },
      {
        icon: "Building2",
        title: "Performance Bond / Jaminan Pelaksanaan",
        description: "Memberikan dukungan jaminan atas pelaksanaan pekerjaan sesuai ketentuan kontrak.",
        stage: "Tahap Pelaksanaan Pekerjaan",
      },
      {
        icon: "Coins",
        title: "Advance Payment Bond / Jaminan Uang Muka",
        description: "Mendukung kebutuhan jaminan atas uang muka yang diberikan dalam pelaksanaan proyek.",
        stage: "Tahap Penarikan Uang Muka",
      },
      {
        icon: "Award",
        title: "Maintenance Bond / Jaminan Pemeliharaan",
        description: "Mendukung kewajiban kontraktor atau penyedia jasa selama periode pemeliharaan pekerjaan.",
        stage: "Tahap Masa Pemeliharaan (Retensi)",
      },
      {
        icon: "Shield",
        title: "Bank Garansi",
        description:
          "Solusi jaminan untuk berbagai kebutuhan kontraktual, proyek, pengadaan, dan kegiatan bisnis sesuai persyaratan yang berlaku.",
        stage: "Mitra Bank BUMN & Bank Swasta Nasional",
        highlightBadge: "Tersedia Non-Collateral",
      },
    ],
    insuranceEyebrow: "PERLINDUNGAN RISIKO BISNIS",
    insuranceTitle: "GENERAL INSURANCE",
    insuranceDescription:
      "NJN juga membantu menyediakan solusi perlindungan terhadap berbagai risiko yang dapat memengaruhi kegiatan operasional, aset, proyek, maupun tanggung jawab perusahaan.",
    insuranceSubtitle: "PRODUK YANG DAPAT DISESUAIKAN DENGAN KEBUTUHAN ANTARA LAIN:",
    insuranceItems: [
      {
        icon: "HardHat",
        title: "Contractor's All Risk (CAR)",
        description: "Perlindungan terhadap berbagai risiko dalam pelaksanaan proyek konstruksi.",
      },
      {
        icon: "Factory",
        title: "Erection All Risk (EAR)",
        description: "Perlindungan atas risiko yang berkaitan dengan pemasangan atau instalasi mesin dan peralatan.",
      },
      {
        icon: "Scale",
        title: "Commercial General Liability (CGL)",
        description: "Perlindungan terhadap risiko tanggung jawab hukum perusahaan kepada pihak ketiga.",
      },
      {
        icon: "Briefcase",
        title: "Professional Liability",
        description: "Perlindungan terhadap risiko yang timbul dari pelaksanaan jasa atau tanggung jawab profesional.",
      },
      {
        icon: "Truck",
        title: "Marine Cargo",
        description: "Perlindungan terhadap risiko barang selama proses pengangkutan.",
      },
      {
        icon: "Building",
        title: "Property Insurance",
        description: "Perlindungan terhadap aset dan properti perusahaan.",
      },
      {
        icon: "Wrench",
        title: "Engineering Insurance",
        description: "Perlindungan terhadap berbagai risiko yang berkaitan dengan mesin, instalasi, dan kegiatan teknik.",
      },
      {
        icon: "ShieldCheck",
        title: "Asuransi Umum Lainnya",
        description: "Solusi perlindungan lainnya yang dapat disesuaikan dengan karakteristik risiko dan kebutuhan bisnis klien.",
      },
    ],
  },
  whyUs: {
    eyebrow: "KEUNGGULAN KAMI",
    title: "MENGAPA MEMILIH NJN?",
    description:
      "NJN hadir sebagai mitra terpercaya untuk memberikan solusi jaminan dan perlindungan yang tepat, cepat, dan sesuai kebutuhan bisnis Anda.",
    items: [
      {
        icon: "Clock",
        title: "RESPONS CEPAT & PROFESIONAL",
        description:
          "Mengutamakan respons yang cepat, komunikasi yang jelas, serta pelayanan profesional untuk mendukung kebutuhan tender, proyek, dan aktivitas bisnis yang memiliki batas waktu.",
      },
      {
        icon: "Target",
        title: "SOLUSI SESUAI KEBUTUHAN",
        description:
          "Memahami kebutuhan dan karakteristik bisnis klien untuk memberikan solusi jaminan dan perlindungan yang tepat serta sesuai dengan kondisi masing-masing.",
      },
      {
        icon: "BadgeCheck",
        title: "TRANSPARAN & TERPERCAYA",
        description:
          "Memberikan informasi yang jelas mengenai persyaratan, tahapan, dan proses pengajuan sehingga klien merasa lebih aman dan nyaman.",
      },
      {
        icon: "Layers",
        title: "SOLUSI TERINTEGRASI",
        description:
          "Menghadirkan layanan Bank Garansi, Surety Bond, dan General Insurance dalam satu solusi yang praktis untuk memenuhi berbagai kebutuhan jaminan dan perlindungan bisnis.",
      },
      {
        icon: "HeartHandshake",
        title: "PENDAMPINGAN JANGKA PANJANG",
        description:
          "Tidak hanya fokus pada transaksi, NJN berkomitmen membangun hubungan jangka panjang melalui pendampingan dan dukungan sesuai perkembangan kebutuhan klien.",
      },
    ],
  },
  experience: {
    badgeIcon: "ShieldCheck",
    cardTitle: "PENGALAMAN & KOMPETENSI",
    cardDescription:
      "PT Niaga Jaminan Nusantara dibangun dengan fokus pada penyediaan solusi Bank Guarantee, Surety Bond, dan General Insurance untuk berbagai kebutuhan bisnis dan proyek.",
    cardHighlights: ["Profesional & Responsif", "Pendekatan Konsultatif"],
    eyebrow: "KOMPETENSI KAMI",
    title: "Landasan Pengalaman untuk Menjawab Kebutuhan Setiap Klien",
    paragraphs: [
      "Dalam menjalankan kegiatan usahanya, NJN didukung oleh pemahaman dan pengalaman tim dalam menangani kebutuhan jaminan proyek, tender, konstruksi, pengadaan, serta perlindungan terhadap risiko bisnis. Pengalaman tersebut menjadi landasan bagi NJN dalam memberikan pelayanan yang responsif, profesional, serta berorientasi pada kebutuhan setiap klien.",
      "Melalui pendekatan konsultatif, NJN membantu klien mengidentifikasi kebutuhan jaminan dan perlindungan yang sesuai sehingga proses bisnis maupun pelaksanaan proyek dapat berjalan dengan lebih terarah.",
    ],
  },
  sectors: {
    eyebrow: "SEKTOR INDUSTRI",
    title: "BIDANG YANG KAMI LAYANI",
    description: "Solusi penjaminan dan perlindungan risiko untuk berbagai sektor usaha strategis:",
    items: [
      {
        icon: "HardHat",
        title: "KONSTRUKSI & INFRASTRUKTUR",
        description:
          "Mendukung kebutuhan jaminan dan perlindungan risiko dalam pelaksanaan proyek konstruksi dan infrastruktur.",
      },
      {
        icon: "FileCheck2",
        title: "TENDER & PENGADAAN",
        description:
          "Membantu perusahaan dalam memenuhi kebutuhan jaminan yang diperlukan pada proses tender, pengadaan, maupun pelaksanaan kontrak.",
      },
      {
        icon: "Briefcase",
        title: "KONSULTANSI",
        description:
          "Menyediakan solusi perlindungan yang berkaitan dengan tanggung jawab profesional serta risiko dalam pelaksanaan kegiatan jasa konsultansi.",
      },
      {
        icon: "Truck",
        title: "PERDAGANGAN & SUPPLIER",
        description:
          "Mendukung kebutuhan jaminan dan perlindungan dalam hubungan kontraktual, kegiatan perdagangan, distribusi, serta penyediaan barang dan jasa.",
      },
    ],
  },
  ctaBottom: {
    eyebrow: "JASA SURETY BOND & BANK GARANSI RESMI",
    title: "Niaga Jaminan Nusantara Penerbitan Jaminan",
    description:
      "Temukan solusi penjaminan finansial dan perlindungan risiko bisnis terbaik untuk perusahaan Anda. Kami siap melayani pengajuan cepat, aman, dan tanpa agunan menyulitkan di seluruh Indonesia. Hubungi konsultan profesional kami sekarang untuk konsultasi gratis dan penawaran terbaik!",
    buttonText: "KONSULTASI GRATIS SEKARANG",
  },
  seo: {
    title: "PT Niaga Jaminan Nusantara - Jasa Bank Garansi & Surety Bond Terpercaya",
    description:
      "Layanan penerbitan Bank Garansi dan Surety Bond cepat tanpa agunan (Non Collateral) dan dengan agunan (Collateral) untuk berbagai proyek di seluruh Indonesia. Resmi, legal, dan terdaftar OJK.",
    keywords: [
      "Bank Garansi",
      "Surety Bond",
      "Jasa Bank Garansi",
      "Bid Bond",
      "Performance Bond",
      "Advance Payment Bond",
      "Maintenance Bond",
      "PT Niaga Jaminan Nusantara",
      "Asuransi Proyek",
      "Jaminan Tender",
    ],
  },
};

export type HomeContent = typeof homeDefaults;

export const homeSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman Beranda."),
    {
      key: "hero",
      title: "Hero Section",
      description: "Bagian paling atas halaman beranda.",
      fields: [
        text("tagline", "Tagline / Badge Atas"),
        text("title", "Judul Utama (H1)"),
        textarea("description", "Deskripsi Hero"),
        text("ctaConsultationText", "Teks Tombol Konsultasi (Langsung ke WhatsApp)"),
        strings("badgeItems", "Poin Cepat (Bawah Tombol)", { itemLabel: "Poin" }),
        image("medallionImage", "Gambar Medallion / Seal"),
      ],
    },
    {
      key: "whatIs",
      title: "Apa Itu Jasa Surety Bond",
      fields: [
        text("title", "Judul"),
        text("intro", "Kalimat Pengantar"),
        list(
          "parties",
          "Daftar Tiga Pihak",
          "Pihak",
          [text("name", "Nama Pihak (Obligee/Principal/Surety)"), textarea("description", "Deskripsi")],
          "name"
        ),
        strings("paragraphs", "Paragraf Tambahan", { multiline: true, itemLabel: "Paragraf" }),
      ],
    },
    {
      key: "functions",
      title: "Fungsi Jasa Surety Bond",
      fields: [
        text("title", "Judul"),
        list(
          "items",
          "3 Kartu Fungsi",
          "Fungsi",
          [icon("icon", "Ikon"), text("title", "Judul"), textarea("description", "Deskripsi")],
          "title"
        ),
      ],
    },
    {
      key: "whyNeeded",
      title: "Mengapa Surety Bond Dibutuhkan",
      fields: [
        image("bannerImage", "Gambar Banner"),
        text("badge", "Badge Banner"),
        text("companyTag", "Nama Perusahaan di Banner"),
        text("phoneDisplay", "Tampilan Telepon"),
        url("phoneCall", "Nomor Panggilan Telepon"),
        text("eyebrow", "Label Atas Judul"),
        text("title", "Judul Section"),
        strings("paragraphs", "Paragraf Penjelasan", { multiline: true, itemLabel: "Paragraf" }),
        text("ctaCardTitle", "Judul Kartu CTA"),
        textarea("ctaCardDescription", "Deskripsi Kartu CTA"),
        text("ctaButtonText", "Teks Tombol CTA"),
      ],
    },
    {
      key: "products",
      title: "Produk & Layanan",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        text("suretySectionTitle", "Judul Bagian Surety & BG"),
        textarea("suretySectionDescription", "Deskripsi Bagian Surety & BG"),
        list(
          "suretyItems",
          "Daftar Surety Bond & BG",
          "Produk Penjaminan",
          [
            icon("icon", "Ikon"),
            text("title", "Nama Produk"),
            textarea("description", "Deskripsi"),
            text("stage", "Tahap / Subteks"),
            text("highlightBadge", "Badge Tambahan (Opsional)"),
          ],
          "title"
        ),
        text("insuranceEyebrow", "Label General Insurance"),
        text("insuranceTitle", "Judul General Insurance"),
        textarea("insuranceDescription", "Deskripsi General Insurance"),
        text("insuranceSubtitle", "Subjudul Produk"),
        list(
          "insuranceItems",
          "Daftar Produk General Insurance",
          "Produk Asuransi",
          [icon("icon", "Ikon"), text("title", "Nama Produk"), textarea("description", "Deskripsi")],
          "title"
        ),
      ],
    },
    {
      key: "whyUs",
      title: "Mengapa Memilih Kami (5 Pilar)",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        list(
          "items",
          "Pilar Keunggulan",
          "Keunggulan",
          [icon("icon", "Ikon"), text("title", "Judul"), textarea("description", "Deskripsi")],
          "title"
        ),
      ],
    },
    {
      key: "experience",
      title: "Pengalaman & Kompetensi",
      fields: [
        icon("badgeIcon", "Ikon Kartu Kiri"),
        text("cardTitle", "Judul Kartu Kiri"),
        textarea("cardDescription", "Deskripsi Kartu Kiri"),
        strings("cardHighlights", "Sorotan Bawah Kartu Kiri", { itemLabel: "Poin" }),
        text("eyebrow", "Label Atas"),
        text("title", "Judul Utama"),
        strings("paragraphs", "Paragraf Pengalaman", { multiline: true, itemLabel: "Paragraf" }),
      ],
    },
    {
      key: "sectors",
      title: "Sektor Industri Yang Dilayani",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        list(
          "items",
          "Daftar Sektor",
          "Sektor",
          [icon("icon", "Ikon"), text("title", "Nama Sektor"), textarea("description", "Deskripsi")],
          "title"
        ),
      ],
    },
    {
      key: "ctaBottom",
      title: "Banner CTA Bawah",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        text("buttonText", "Teks Tombol"),
      ],
    },
  ],
};

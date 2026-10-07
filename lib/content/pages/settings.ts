import {
  group,
  image,
  list,
  rich,
  strings,
  text,
  textarea,
  url,
  type PageSchema,
} from "../schema-types";

export const settingsDefaults = {
  company: {
    name: "PT Niaga Jaminan Nusantara",
    shortName: "NJN",
  },
  contact: {
    whatsappNumber: "6282113189343",
    whatsappDisplay: "0821-1318-9343",
    whatsappDefaultMessage:
      "Halo PT Niaga Jaminan Nusantara, saya ingin konsultasi layanan Bank Garansi dan Surety Bond",
    phoneNumber: "081140665585",
    phoneDisplay: "0811-4066-5585",
    email: "info@anugrahluasjaya.co.id",
    address:
      "Gedung Graha Surveyor Indonesia Lantai 15, Jl. Gatot Subroto Kav. 56, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12950",
    hours: "Senin - Sabtu: 08.00 - 18.00 WIB",
  },
  branding: {
    logo: "/images/logo.png",
    logoFooter: "/images/logo-footer.png",
    favicon: "/images/logo.png",
  },
  navbar: {
    links: [
      { label: "Home", href: "/" },
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Layanan Service", href: "/layanan-service" },
      { label: "Blog", href: "/blog" },
      { label: "Kontak Kami", href: "/kontak-kami" },
    ],
    ctaLabel: "Konsultasi",
    mobileCtaLabel: "Konsultasi Sekarang",
  },
  footer: {
    addressLabel: "Alamat:",
    description:
      "Sebagai agen dan konsultan resmi Surety Bond dan Bank Garansi, kami bermitra dengan puluhan perusahaan asuransi terkemuka dan bank BUMN/swasta ternama untuk menjamin legalitas serta keamanan penjaminan proyek Anda. Berpengalaman menangani ribuan proyek konstruksi, pengadaan, dan manufaktur berskala nasional.",
    flyerImage: "/images/njn.png",
    areasTitle: "Melayani Lokasi Terdekat Anda:",
    areas: [
      "DKI Jakarta & Jabodetabek (Bogor, Depok, Tangerang, Bekasi)",
      "Jawa Barat, Jawa Tengah, DI Yogyakarta, Jawa Timur",
      "Sumatera, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Papua",
    ],
    areasHighlight: "Siap melayani seluruh wilayah Indonesia",
    copyright: "PT Niaga Jaminan Nusantara. All rights reserved.",
  },
  floatingWhatsapp: {
    tooltip: "Konsultasi Cepat Online",
  },
  modal: {
    eyebrow: "Formulir Pengajuan",
    title: "Konsultasi Bank Garansi & Surety Bond",
    description:
      "Isi form di bawah ini, tim konsultan kami akan merespons dalam hitungan menit via WhatsApp.",
    nameLabel: "Nama Lengkap *",
    namePlaceholder: "Contoh: Budi Santoso",
    companyLabel: "Nama Perusahaan (PT / CV) *",
    companyPlaceholder: "Contoh: PT Konstruksi Jaya Abadi",
    phoneLabel: "Nomor WhatsApp *",
    phonePlaceholder: "Contoh: 081234567890",
    typeLabel: "Jenis Jaminan yang Dibutuhkan *",
    typeOptions: [
      "Bid Bond (Jaminan Penawaran)",
      "Performance Bond (Jaminan Pelaksanaan)",
      "Advance Payment Bond (Jaminan Uang Muka)",
      "Maintenance Bond (Jaminan Pemeliharaan)",
      "Bank Garansi (Jaminan Bank BUMN/Swasta)",
      "Asuransi Rekayasa / CAR / EAR",
    ],
    valueLabel: "Estimasi Nilai Proyek / Jaminan (Opsional)",
    valuePlaceholder: "Contoh: Rp 500.000.000",
    notesLabel: "Catatan Tambahan (Opsional)",
    notesPlaceholder: "Tuliskan jika ada kebutuhan spesifik seperti tanpa agunan...",
    submitLabel: "Kirim & Hubungkan ke WhatsApp",
  },
  seo: {
    siteUrl: "https://niagajaminannusantara.co.id",
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
    ogImage: "/images/banner-jaminan.jpg",
  },
};

export type SettingsContent = typeof settingsDefaults;

export const settingsSchema: PageSchema = {
  sections: [
    {
      key: "company",
      title: "Perusahaan",
      description: "Identitas perusahaan yang dipakai di seluruh website.",
      fields: [text("name", "Nama Perusahaan"), text("shortName", "Nama Singkat")],
    },
    {
      key: "contact",
      title: "Kontak",
      description: "Nomor WhatsApp, telepon, email, dan alamat yang tampil di seluruh halaman.",
      fields: [
        url("whatsappNumber", "Nomor WhatsApp (format internasional)", "Contoh: 6282113189343 (tanpa + atau spasi)."),
        text("whatsappDisplay", "Nomor WhatsApp (tampilan)"),
        textarea("whatsappDefaultMessage", "Pesan Default WhatsApp"),
        url("phoneNumber", "Nomor Telepon (untuk link tel:)"),
        text("phoneDisplay", "Nomor Telepon (tampilan)"),
        text("email", "Email"),
        textarea("address", "Alamat Lengkap"),
        text("hours", "Jam Operasional (singkat)"),
      ],
    },
    {
      key: "branding",
      title: "Logo & Branding",
      fields: [
        image("logo", "Logo Navbar"),
        image("logoFooter", "Logo Footer"),
        image("favicon", "Favicon"),
      ],
    },
    {
      key: "navbar",
      title: "Navbar",
      fields: [
        list("links", "Menu Navigasi", "Menu", [text("label", "Label"), url("href", "Link", "Contoh: /tentang-kami")], "label"),
        text("ctaLabel", "Label Tombol (Desktop)"),
        text("mobileCtaLabel", "Label Tombol (Mobile)"),
      ],
    },
    {
      key: "footer",
      title: "Footer",
      fields: [
        text("addressLabel", "Label Alamat"),
        textarea("description", "Deskripsi Perusahaan"),
        image("flyerImage", "Gambar Flyer"),
        text("areasTitle", "Judul Wilayah Layanan"),
        strings("areas", "Wilayah Layanan", { itemLabel: "Wilayah" }),
        text("areasHighlight", "Teks Highlight Wilayah"),
        text("copyright", "Teks Copyright", "Tahun ditambahkan otomatis di depan."),
      ],
    },
    {
      key: "floatingWhatsapp",
      title: "Tombol WhatsApp Melayang",
      fields: [text("tooltip", "Teks Tooltip")],
    },
    {
      key: "modal",
      title: "Form Konsultasi (Popup)",
      description: "Popup yang muncul saat pengunjung menekan tombol Konsultasi.",
      fields: [
        text("eyebrow", "Label Kecil"),
        text("title", "Judul"),
        textarea("description", "Deskripsi"),
        group("", "Label Form", [
          text("nameLabel", "Label Nama"),
          text("namePlaceholder", "Placeholder Nama"),
          text("companyLabel", "Label Perusahaan"),
          text("companyPlaceholder", "Placeholder Perusahaan"),
          text("phoneLabel", "Label WhatsApp"),
          text("phonePlaceholder", "Placeholder WhatsApp"),
          text("typeLabel", "Label Jenis Jaminan"),
          text("valueLabel", "Label Nilai Proyek"),
          text("valuePlaceholder", "Placeholder Nilai Proyek"),
          text("notesLabel", "Label Catatan"),
          text("notesPlaceholder", "Placeholder Catatan"),
        ]),
        strings("typeOptions", "Pilihan Jenis Jaminan", { itemLabel: "Pilihan" }),
        text("submitLabel", "Label Tombol Kirim"),
      ],
    },
    {
      key: "seo",
      title: "SEO Global",
      description: "Nilai default SEO dan domain utama website.",
      fields: [
        url("siteUrl", "URL Website Utama", "Contoh: https://niagajaminannusantara.co.id"),
        text("title", "Meta Title Default"),
        textarea("description", "Meta Description Default"),
        strings("keywords", "Keywords", { itemLabel: "Keyword" }),
        image("ogImage", "Gambar Share (Open Graph)"),
      ],
    },
  ],
};

// `rich` di-import agar konsisten dengan file lain; tidak dipakai di sini.
void rich;

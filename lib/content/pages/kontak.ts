import {
  icon,
  list,
  seoSection,
  strings,
  text,
  textarea,
  url,
  type PageSchema,
} from "../schema-types";

export const kontakDefaults = {
  header: {
    tagline: "PT NIAGA JAMINAN NUSANTARA",
    title: "Kontak & Formulir Konsultasi Proyek",
    description:
      "Hubungi konsultan kami atau isi formulir di bawah ini untuk konsultasi kelayakan dokumen tender dan penerbitan Bank Garansi & Surety Bond tanpa agunan. Respon cepat dalam 10-15 menit.",
    badgeText: "Respon Cepat WhatsApp 24 Jam",
  },
  form: {
    eyebrow: "FORMULIR KONTAK",
    title: "Kirim Pesan Kepada Kami",
    description:
      "Silakan isi nama, email, dan pesan Anda di bawah ini. Tim kami akan segera menindaklanjuti.",
    nameLabel: "Nama Lengkap *",
    namePlaceholder: "Masukkan nama lengkap Anda",
    emailLabel: "Alamat Email *",
    emailPlaceholder: "nama@email.com",
    messageLabel: "Pesan / Message *",
    messagePlaceholder: "Tuliskan pesan, pertanyaan, atau rincian kebutuhan Anda di sini...",
    privacyGuarantee: "Jaminan Privasi: Data dan pesan Anda terjamin 100% aman dan rahasia.",
    submitText: "Kirim Pesan",
    submitLoadingText: "Mengirimkan Pesan...",
    successTitle: "Pesan Berhasil Terkirim!",
    successDescription:
      "Jendela chat WhatsApp konsultan telah dibuka dengan format pesan Anda. Kami akan segera merespons pertanyaan Anda.",
  },
  info: {
    eyebrow: "INFORMASI RESMI",
    title: "Kontak Detail Perusahaan",
    addressBadge: "Kantor Operasional",
    addressTitle: "Gedung Graha Surveyor Indonesia Lantai 15",
    addressDetail:
      "Jl. Gatot Subroto Kav. 56, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12950",
    whatsappBadge: "WhatsApp Konsultan (Chat Cepat)",
    whatsappNumber: "6282113189343",
    whatsappDisplay: "0821-1318-9343",
    whatsappSubtext: "Layanan konsultasi online siap merespons 24/7.",
    phoneBadge: "Hotline Telepon",
    phoneNumber: "082113189343",
    phoneDisplay: "0821-1318-9343",
    phoneSubtext: "Telepon langsung tim representatif kami.",
    emailBadge: "Email Resmi",
    email: "info@anugrahluasjaya.co.id",
    emailSubtext: "Kirimkan berkas RKS / Dokumen Pemilihan tender via email.",
    hoursBadge: "Jam Operasional Kantor",
    hoursWeekday: "Senin – Jumat: 08.00 – 18.00 WIB",
    hoursSaturday: "Sabtu: 08.00 – 14.00 WIB",
    hoursSunday: "Minggu & Libur: Layanan WA Tetap Aktif",
  },
  map: {
    title: "Peta Lokasi Graha Surveyor",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Graha+Surveyor+Indonesia+Jl+Gatot+Subroto+Kav+56+Jakarta+Selatan",
    embedUrl:
      "https://maps.google.com/maps?q=Graha+Surveyor+Indonesia+Jl+Gatot+Subroto+Kav+56+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed",
    caption:
      "Lokasi strategis di koridor Gatot Subroto, dekat kawasan Kuningan & Semanggi Jakarta Selatan.",
  },
  regions: {
    title: "Layanan Penjaminan Seluruh Indonesia",
    items: [
      "Jabodetabek",
      "Jawa & Bali",
      "Sumatera",
      "Kalimantan",
      "Sulawesi",
      "Nusa Tenggara & Papua",
    ],
  },
  faqs: {
    eyebrow: "PERTANYAAN UMUM",
    title: "Seputar Konsultasi & Pengajuan Warkat",
    items: [
      {
        icon: "HelpCircle",
        question: "Apakah ada biaya konsultasi?",
        answer:
          "Sama sekali tidak ada biaya (100% Gratis). Anda bebas berkonsultasi mengenai kelayakan dokumen tender dan perhitungan tarif premi.",
      },
      {
        icon: "FileCheck2",
        question: "Berapa lama proses penerbitan?",
        answer:
          "Untuk Surety Bond butuh 1-2 hari kerja. Untuk Bank Garansi berkisar 2-3 hari kerja setelah seluruh dokumen legalitas dan RKS dinyatakan lengkap.",
      },
      {
        icon: "Zap",
        question: "Apakah bisa kirim berkas lewat WhatsApp?",
        answer:
          "Sangat bisa. Anda dapat mengirimkan softcopy dokumen tender (format PDF) langsung ke WhatsApp konsultan kami untuk verifikasi awal yang cepat.",
      },
    ],
  },
  seo: {
    title: "Kontak Kami - Konsultasi Bank Garansi & Surety Bond | PT Niaga Jaminan Nusantara",
    description:
      "Hubungi PT Niaga Jaminan Nusantara untuk konsultasi gratis penerbitan Bank Garansi & Surety Bond tanpa agunan (non-collateral). Kantor di Graha Surveyor Indonesia Lt. 15, Jakarta Selatan. WhatsApp: 0821-1318-9343.",
    keywords: [
      "Kontak Bank Garansi",
      "Konsultasi Surety Bond",
      "PT Niaga Jaminan Nusantara",
      "Kantor PT Niaga Jaminan Nusantara",
      "Alamat Graha Surveyor Indonesia",
      "WhatsApp Bank Garansi",
      "Agen Asuransi Tender Proyek",
      "Jasa Bank Garansi Jakarta",
    ],
  },
};

export type KontakContent = typeof kontakDefaults;

export const kontakSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman Kontak Kami."),
    {
      key: "header",
      title: "Header Halaman",
      fields: [
        text("tagline", "Tagline Kecil"),
        text("title", "Judul Utama (H1)"),
        textarea("description", "Deskripsi"),
        text("badgeText", "Badge Respon Cepat"),
      ],
    },
    {
      key: "form",
      title: "Teks Formulir Kontak",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Form"),
        textarea("description", "Deskripsi Form"),
        text("privacyGuarantee", "Catatan Privasi"),
        text("submitText", "Teks Tombol Kirim"),
        text("submitLoadingText", "Teks Loading Tombol"),
        text("successTitle", "Judul Sukses"),
        textarea("successDescription", "Deskripsi Sukses"),
      ],
    },
    {
      key: "info",
      title: "Informasi Detail Kontak",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        text("addressBadge", "Label Alamat"),
        text("addressTitle", "Nama Gedung"),
        textarea("addressDetail", "Alamat Lengkap"),
        text("whatsappBadge", "Label WhatsApp"),
        url("whatsappNumber", "Nomor WhatsApp (Link)"),
        text("whatsappDisplay", "Nomor WhatsApp (Teks)"),
        text("whatsappSubtext", "Subteks WhatsApp"),
        text("phoneBadge", "Label Telepon"),
        url("phoneNumber", "Nomor Telepon (Link)"),
        text("phoneDisplay", "Nomor Telepon (Teks)"),
        text("phoneSubtext", "Subteks Telepon"),
        text("emailBadge", "Label Email"),
        text("email", "Alamat Email"),
        text("emailSubtext", "Subteks Email"),
        text("hoursBadge", "Label Jam Kerja"),
        text("hoursWeekday", "Jam Kerja Hari Kerja"),
        text("hoursSaturday", "Jam Kerja Sabtu"),
        text("hoursSunday", "Jam Kerja Minggu/Libur"),
      ],
    },
    {
      key: "map",
      title: "Peta Lokasi",
      fields: [
        text("title", "Judul Peta"),
        url("mapsUrl", "Tautan Google Maps"),
        url("embedUrl", "URL Embed Iframe Peta"),
        text("caption", "Keterangan Lokasi"),
      ],
    },
    {
      key: "regions",
      title: "Wilayah Layanan",
      fields: [
        text("title", "Judul"),
        strings("items", "Daftar Wilayah", { itemLabel: "Wilayah" }),
      ],
    },
    {
      key: "faqs",
      title: "FAQ Singkat",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul"),
        list(
          "items",
          "Daftar FAQ",
          "FAQ",
          [icon("icon", "Ikon"), text("question", "Pertanyaan"), textarea("answer", "Jawaban")],
          "question"
        ),
      ],
    },
  ],
};

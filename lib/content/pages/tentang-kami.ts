import {
  icon,
  image,
  list,
  seoSection,
  strings,
  text,
  textarea,
  type PageSchema,
} from "../schema-types";

export const tentangKamiDefaults = {
  profile: {
    bannerImage: "/images/banner-jaminan.jpg",
    bannerTitle: "PT Niaga Jaminan Nusantara (NJN)",
    bannerSubtitle: "Didirikan oleh Dafinah Syafa Niaga dan Anta Rahmadan",
    bannerIcon: "ShieldCheck",
    eyebrow: "PROFIL PERUSAHAAN",
    title: "Solusi Jaminan dan Perlindungan Risiko Bisnis Terpercaya",
    paragraphs: [
      "**PT Niaga Jaminan Nusantara (NJN)** merupakan perusahaan yang bergerak dalam bidang layanan penjaminan dan perlindungan risiko bisnis, mencakup aktivitas agen asuransi, agen penjaminan, serta broker penjaminan. Perusahaan mulai beroperasi pada tahun 2020 di Bekasi, Jawa Barat, dan didirikan oleh **Dafinah Syafa Niaga** dan **Anta Rahmadan**.",
      "NJN hadir untuk membantu perusahaan memperoleh solusi jaminan dan perlindungan yang tepat dalam mendukung aktivitas bisnis, tender, pengadaan, maupun pelaksanaan proyek. Dengan mengedepankan profesionalisme, kecepatan pelayanan, transparansi, dan integritas, NJN berupaya memberikan proses layanan yang mudah dipahami serta sesuai dengan kebutuhan setiap klien.",
      "Lebih dari sekadar penyedia layanan, NJN berkomitmen membangun hubungan bisnis jangka panjang dan menjadi mitra yang dapat diandalkan dalam mendukung keberlangsungan serta pengembangan usaha klien.",
    ],
  },
  pillars: [
    {
      icon: "Calendar",
      title: "BEROPERASI SEJAK 2020",
      description: "Melayani kebutuhan jaminan dan perlindungan bisnis secara profesional.",
    },
    {
      icon: "Layers",
      title: "LAYANAN UTAMA",
      description: "Bank Guarantee, Surety Bond, dan General Insurance.",
    },
    {
      icon: "Award",
      title: "KOMITMEN KAMI",
      description: "Profesional, responsif, transparan, dan terpercaya.",
    },
  ],
  visionMission: {
    eyebrow: "VISI & MISI",
    title: "Visi & Misi Perusahaan",
    visionTitle: "VISI",
    visionStatement:
      "“Menjadi mitra terpercaya dalam menyediakan solusi jaminan dan perlindungan bisnis di Indonesia.”",
    visionFooter: "PT Niaga Jaminan Nusantara",
    missionTitle: "MISI",
    missionPoints: [
      "Memberikan solusi jaminan dan perlindungan yang sesuai dengan kebutuhan serta karakteristik bisnis setiap klien.",
      "Mengutamakan kecepatan, ketepatan, transparansi, dan profesionalisme dalam setiap layanan.",
      "Memberikan kemudahan dan pendampingan untuk membantu klien menjalankan serta mengembangkan peluang bisnisnya.",
      "Menjalankan setiap proses bisnis dengan prinsip integritas, tanggung jawab, dan komitmen terhadap kepercayaan klien.",
    ],
  },
  cta: {
    eyebrow: "MULAI KONSULTASI HARI INI",
    title: "Siap Memenangkan Tender dan Mengamankan Proyek Anda?",
    description:
      "Tim konsultan PT Niaga Jaminan Nusantara siap memberikan solusi penerbitan Bank Garansi, Surety Bond, dan General Insurance terbaik untuk kebutuhan perusahaan Anda. Konsultasi gratis tanpa komitmen!",
    buttonConsultation: "Ajukan Penjaminan Sekarang",
    buttonWhatsapp: "Hubungi via WhatsApp",
  },
  seo: {
    title: "Tentang Kami - Profil Perusahaan | PT Niaga Jaminan Nusantara",
    description:
      "Profil PT Niaga Jaminan Nusantara (NJN), didirikan oleh Dafinah Syafa Niaga dan Anta Rahmadan sejak tahun 2020. Solusi agen dan konsultan resmi Bank Garansi & Surety Bond terpercaya di Indonesia.",
    keywords: [
      "Tentang PT Niaga Jaminan Nusantara",
      "Profil NJN",
      "Dafinah Syafa Niaga",
      "Anta Rahmadan",
      "Agen Asuransi Bank Garansi",
      "Broker Penjaminan Proyek",
      "Sejarah PT Niaga Jaminan Nusantara",
    ],
  },
};

export type TentangKamiContent = typeof tentangKamiDefaults;

export const tentangKamiSchema: PageSchema = {
  sections: [
    seoSection("Meta SEO khusus halaman Tentang Kami."),
    {
      key: "profile",
      title: "Profil Perusahaan",
      fields: [
        image("bannerImage", "Gambar Banner"),
        text("bannerTitle", "Judul Banner Bawah"),
        text("bannerSubtitle", "Subjudul Banner Bawah"),
        icon("bannerIcon", "Ikon Banner"),
        text("eyebrow", "Label Atas"),
        text("title", "Judul Utama (H1)"),
        strings("paragraphs", "Paragraf Cerita", {
          multiline: true,
          rich: true,
          itemLabel: "Paragraf",
        }),
      ],
    },
    {
      key: "",
      title: "3 Pilar Utama",
      fields: [
        list(
          "pillars",
          "Daftar Pilar",
          "Pilar",
          [icon("icon", "Ikon"), text("title", "Judul"), textarea("description", "Deskripsi")],
          "title"
        ),
      ],
    },
    {
      key: "visionMission",
      title: "Visi & Misi",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul Section"),
        text("visionTitle", "Judul Kotak Visi"),
        textarea("visionStatement", "Pernyataan Visi"),
        text("visionFooter", "Footer Kotak Visi"),
        text("missionTitle", "Judul Kotak Misi"),
        strings("missionPoints", "Poin-Poin Misi", { itemLabel: "Poin Misi" }),
      ],
    },
    {
      key: "cta",
      title: "Banner CTA Bawah",
      fields: [
        text("eyebrow", "Label Atas"),
        text("title", "Judul CTA"),
        textarea("description", "Deskripsi CTA"),
        text("buttonConsultation", "Teks Tombol Konsultasi"),
        text("buttonWhatsapp", "Teks Tombol WhatsApp"),
      ],
    },
  ],
};

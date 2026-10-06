import type { Metadata } from "next";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "https://niagajaminannusantara.co.id/tentang-kami",
  },
  openGraph: {
    title: "Tentang Kami - Profil PT Niaga Jaminan Nusantara",
    description:
      "Mitra terpercaya dalam menyediakan solusi jaminan dan perlindungan risiko bisnis di Indonesia sejak tahun 2020.",
    url: "https://niagajaminannusantara.co.id/tentang-kami",
    siteName: "PT Niaga Jaminan Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function TentangKamiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

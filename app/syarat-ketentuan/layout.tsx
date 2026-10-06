import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Penerbitan Bank Garansi dan Surety Bond | PT Niaga Jaminan Nusantara",
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
  alternates: {
    canonical: "https://niagajaminannusantara.co.id/syarat-ketentuan",
  },
  openGraph: {
    title: "Syarat & Ketentuan Penerbitan Bank Garansi & Surety Bond",
    description:
      "Panduan dan checklist persyaratan lengkap penerbitan Bank Garansi dan Surety Bond dari PT Niaga Jaminan Nusantara.",
    url: "https://niagajaminannusantara.co.id/syarat-ketentuan",
    siteName: "PT Niaga Jaminan Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function SyaratKetentuanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

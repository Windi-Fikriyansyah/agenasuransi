import type { Metadata } from "next";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "https://niagajaminannusantara.co.id/blog",
  },
  openGraph: {
    title: "Blog & Edukasi Penjaminan Proyek | PT Niaga Jaminan Nusantara",
    description:
      "Kumpulan artikel, edukasi, dan panduan praktis penerbitan Bank Garansi & Surety Bond dari PT Niaga Jaminan Nusantara.",
    url: "https://niagajaminannusantara.co.id/blog",
    siteName: "PT Niaga Jaminan Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

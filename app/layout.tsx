import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollToTop from "@/components/ScrollToTop";
import { ModalProvider } from "@/components/ModalContext";

export const metadata: Metadata = {
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
  authors: [{ name: "PT Niaga Jaminan Nusantara" }],
  openGraph: {
    title: "PT Niaga Jaminan Nusantara - Jasa Bank Garansi & Surety Bond Terpercaya",
    description: "Penerbitan Bank Garansi & Surety Bond cepat tanpa agunan di seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="min-h-screen bg-[#060c1d] text-slate-100 antialiased selection:bg-[#e5b842] selection:text-[#040814] flex flex-col">
        <ModalProvider>
          {/* Scroll to Top on Route Navigation */}
          <ScrollToTop />

          {/* Header Tetap (Persistent Navbar) */}
          <Navbar />

          {/* Konten Halaman */}
          <main className="flex-1">{children}</main>

          {/* Footer Tetap (Persistent Footer) */}
          <Footer />

          {/* Global WhatsApp & Modal Konsultasi */}
          <FloatingWhatsApp />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollToTop from "@/components/ScrollToTop";
import { ModalProvider } from "@/components/ModalContext";
import { getPageContent } from "@/lib/content/db";
import { settingsDefaults, type SettingsContent } from "@/lib/content/pages/settings";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPageContent<SettingsContent>("settings");
  const seo = settings?.seo || settingsDefaults.seo;
  const company = settings?.company || settingsDefaults.company;
  const branding = settings?.branding || settingsDefaults.branding;

  return {
    metadataBase: new URL(seo.siteUrl || "https://niagajaminannusantara.co.id"),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: company.name }],
    icons: {
      icon: branding.favicon || "/images/logo.png",
      shortcut: branding.favicon || "/images/logo.png",
      apple: branding.favicon || "/images/logo.png",
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: "id_ID",
      images: [
        {
          url: seo.ogImage || "/images/banner-jaminan.jpg",
          alt: company.name,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const isCms = headersList.get("x-is-cms") === "1";
  const settings = await getPageContent<SettingsContent>("settings");

  return (
    <html lang="id" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className="min-h-screen bg-[#060c1d] text-slate-100 antialiased selection:bg-[#e5b842] selection:text-[#040814] flex flex-col">
        {isCms ? (
          // Jika di panel CMS, render children tanpa header/footer publik
          children
        ) : (
          // Jika di website publik, render seluruh komponen situs dengan konten dinamis
          <ModalProvider>
            <ScrollToTop />
            <Navbar settings={settings} />
            <main className="flex-1">{children}</main>
            <Footer settings={settings} />
            <FloatingWhatsApp settings={settings} />
            <ConsultationModal settings={settings} />
          </ModalProvider>
        )}
      </body>
    </html>
  );
}

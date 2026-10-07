import React from "react";
import type { Metadata } from "next";
import { getCurrentAdmin } from "@/lib/auth/session";
import CmsShell from "./CmsShell";

export const metadata: Metadata = {
  title: "Dashboard CMS | PT Niaga Jaminan Nusantara",
  description: "Panel administrasi pengelolaan konten website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  return <CmsShell admin={admin}>{children}</CmsShell>;
}

import React from "react";
import { notFound } from "next/navigation";
import { PAGE_REGISTRY } from "@/lib/content/registry";
import { getPageContent } from "@/lib/content/db";
import PageEditor from "./PageEditor";

interface Props {
  params: Promise<{ pageId: string }>;
}

export default async function CmsDynamicPageEditor({ params }: Props) {
  const { pageId } = await params;
  const pageDef = PAGE_REGISTRY[pageId];

  if (!pageDef) {
    notFound();
  }

  const initialData = await getPageContent(pageId);

  return <PageEditor pageDef={pageDef} initialData={initialData} />;
}

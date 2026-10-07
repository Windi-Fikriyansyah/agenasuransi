import React from "react";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/content/db";
import ArticleEditor from "../ArticleEditor";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleEditor initialArticle={article} />;
}

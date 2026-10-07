import { getPageContent, getArticles } from "@/lib/content/db";
import type { BlogIndexContent } from "@/lib/content/pages/blog-index";
import type { SettingsContent } from "@/lib/content/pages/settings";
import BlogListClient from "./BlogListClient";

export default async function Page() {
  const [content, articles, settings] = await Promise.all([
    getPageContent<BlogIndexContent>("blog-index"),
    getArticles(),
    getPageContent<SettingsContent>("settings"),
  ]);

  return (
    <BlogListClient
      content={content}
      articles={articles}
      settings={settings}
    />
  );
}

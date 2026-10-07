import "server-only";
import { unstable_cache, revalidateTag, revalidatePath } from "next/cache";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase/server";
import { PAGE_REGISTRY } from "./registry";
import { ARTICLES, type Article } from "@/data/articles";

/**
 * Deep merge source into target.
 */
function deepMerge<T extends Record<string, any>>(target: T, source: any): T {
  if (!source || typeof source !== "object") return target;
  const result: any = Array.isArray(target) ? [...target] : { ...target };

  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = (target as any)?.[key];

    if (
      srcVal &&
      typeof srcVal === "object" &&
      !Array.isArray(srcVal) &&
      tgtVal &&
      typeof tgtVal === "object" &&
      !Array.isArray(tgtVal)
    ) {
      result[key] = deepMerge(tgtVal, srcVal);
    } else if (srcVal !== undefined) {
      result[key] = srcVal;
    }
  }

  return result;
}

/**
 * Mengambil konten halaman dari Supabase dengan fallback ke default.
 * Di-cache menggunakan unstable_cache agar cepat dan hemat kuota Supabase.
 */
export async function getPageContent<T = any>(pageId: string): Promise<T> {
  const pageDef = PAGE_REGISTRY[pageId];
  const defaults = pageDef?.defaults ?? ({} as T);

  // Jika Supabase belum dikonfigurasi, langsung kembalikan default
  if (!isSupabaseConfigured()) {
    return defaults;
  }

  const cachedFetcher = unstable_cache(
    async () => {
      const supabase = getSupabaseServer();
      if (!supabase) return defaults;

      try {
        const { data, error } = await supabase
          .from("pages")
          .select("content")
          .eq("id", pageId)
          .single();

        if (error || !data?.content) {
          return defaults;
        }

        return deepMerge(defaults, data.content);
      } catch (err) {
        console.error(`[getPageContent] Error fetching page ${pageId}:`, err);
        return defaults;
      }
    },
    [`page-content-${pageId}`],
    {
      tags: [`page:${pageId}`, "pages"],
      revalidate: 3600, // 1 jam SWR
    }
  );

  return cachedFetcher();
}

/**
 * Menyimpan konten halaman ke Supabase dan membatalkan cache Next.js.
 */
export async function savePageContent(pageId: string, content: any) {
  const supabase = getSupabaseServer();
  if (!supabase) {
    return {
      success: false,
      error:
        "Supabase belum dikonfigurasi di environment variable (.env). Silakan atur NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY terlebih dahulu.",
    };
  }

  try {
    const pageDef = PAGE_REGISTRY[pageId];
    const title = pageDef?.title ?? pageId;

    const { error } = await supabase.from("pages").upsert(
      {
        id: pageId,
        title,
        content,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (error) {
      return { success: false, error: error.message };
    }

    // Invalidate cache
    try {
      revalidateTag(`page:${pageId}`, "max");
      revalidateTag("pages", "max");
      revalidatePath("/", "layout");
    } catch (revalidateErr) {
      console.warn("revalidate error (normal during build):", revalidateErr);
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal menyimpan konten." };
  }
}

/* ========================================================================
   ARTIKEL (BLOG)
   ======================================================================== */

export async function getArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) {
    return ARTICLES;
  }

  const cached = unstable_cache(
    async () => {
      const supabase = getSupabaseServer();
      if (!supabase) return ARTICLES;

      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) {
          return ARTICLES;
        }

        return data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          category: item.category,
          date: item.date_display || item.date,
          isoDate: item.iso_date || item.created_at,
          readTime: item.read_time,
          author: item.author,
          authorRole: item.author_role,
          summary: item.summary,
          content: Array.isArray(item.content) ? item.content : [item.content],
          keyTakeaways: Array.isArray(item.key_takeaways) ? item.key_takeaways : [],
          tags: Array.isArray(item.tags) ? item.tags : [],
        }));
      } catch (err) {
        console.error("[getArticles] Error fetching articles:", err);
        return ARTICLES;
      }
    },
    ["all-articles"],
    {
      tags: ["articles"],
      revalidate: 3600,
    }
  );

  return cached();
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug) ?? null;
}

export async function saveArticle(article: Article) {
  const supabase = getSupabaseServer();
  if (!supabase) {
    return {
      success: false,
      error: "Supabase belum terhubung di .env.",
    };
  }

  try {
    const payload = {
      id: article.id,
      title: article.title,
      slug: article.slug,
      category: article.category,
      date_display: article.date,
      iso_date: article.isoDate,
      read_time: article.readTime,
      author: article.author,
      author_role: article.authorRole,
      summary: article.summary,
      content: article.content,
      key_takeaways: article.keyTakeaways,
      tags: article.tags,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("articles")
      .upsert(payload, { onConflict: "id" });

    if (error) {
      return { success: false, error: error.message };
    }

    try {
      revalidateTag("articles", "max");
      revalidatePath("/blog");
      revalidatePath(`/blog/${article.slug}`);
      revalidatePath("/", "layout");
    } catch {}

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal menyimpan artikel." };
  }
}

export async function deleteArticle(articleId: string) {
  const supabase = getSupabaseServer();
  if (!supabase) {
    return { success: false, error: "Supabase belum terhubung di .env." };
  }

  try {
    const { error } = await supabase.from("articles").delete().eq("id", articleId);
    if (error) {
      return { success: false, error: error.message };
    }

    try {
      revalidateTag("articles", "max");
      revalidatePath("/blog");
      revalidatePath("/", "layout");
    } catch {}

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal menghapus artikel." };
  }
}

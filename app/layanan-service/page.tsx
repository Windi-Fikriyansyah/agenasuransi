import { getPageContent } from "@/lib/content/db";
import type { LayananContent } from "@/lib/content/pages/layanan";
import type { SettingsContent } from "@/lib/content/pages/settings";
import LayananClient from "./LayananClient";

export default async function Page() {
  const [content, settings] = await Promise.all([
    getPageContent<LayananContent>("layanan"),
    getPageContent<SettingsContent>("settings"),
  ]);

  return <LayananClient content={content} settings={settings} />;
}

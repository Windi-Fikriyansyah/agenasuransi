import { getPageContent } from "@/lib/content/db";
import type { SyaratKetentuanContent } from "@/lib/content/pages/syarat-ketentuan";
import type { SettingsContent } from "@/lib/content/pages/settings";
import SyaratKetentuanClient from "./SyaratKetentuanClient";

export default async function Page() {
  const [content, settings] = await Promise.all([
    getPageContent<SyaratKetentuanContent>("syarat-ketentuan"),
    getPageContent<SettingsContent>("settings"),
  ]);

  return <SyaratKetentuanClient content={content} settings={settings} />;
}

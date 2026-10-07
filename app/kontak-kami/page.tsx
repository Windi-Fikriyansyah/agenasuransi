import { getPageContent } from "@/lib/content/db";
import type { KontakContent } from "@/lib/content/pages/kontak";
import type { SettingsContent } from "@/lib/content/pages/settings";
import KontakClient from "./KontakClient";

export default async function Page() {
  const [content, settings] = await Promise.all([
    getPageContent<KontakContent>("kontak"),
    getPageContent<SettingsContent>("settings"),
  ]);

  return <KontakClient content={content} settings={settings} />;
}

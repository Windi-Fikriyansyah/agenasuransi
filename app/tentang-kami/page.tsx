import { getPageContent } from "@/lib/content/db";
import type { TentangKamiContent } from "@/lib/content/pages/tentang-kami";
import type { SettingsContent } from "@/lib/content/pages/settings";
import TentangKamiClient from "./TentangKamiClient";

export default async function Page() {
  const [content, settings] = await Promise.all([
    getPageContent<TentangKamiContent>("tentang-kami"),
    getPageContent<SettingsContent>("settings"),
  ]);

  return <TentangKamiClient content={content} settings={settings} />;
}

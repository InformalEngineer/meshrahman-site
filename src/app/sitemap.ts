import type { MetadataRoute } from "next";
import { getAllEssays } from "@/lib/essays";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://meshrahman.com";
  const staticPages = ["", "/about", "/essays", "/projects", "/now", "/reading", "/contact"];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}/`.replace(/\/\/$/, "/") })),
    ...getAllEssays().map((essay) => ({
      url: `${base}/essays/${essay.slug}/`,
      lastModified: essay.date,
    })),
  ];
}

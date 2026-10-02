import type { Metadata } from "next";

// Next merges metadata shallowly: a page that sets `openGraph` or
// `alternates` replaces the parent's object whole, so the canonical URL, the
// share image, and the RSS link all vanish unless every page sets them again.
// pageMeta() sets them together so no page ships half a share card.
export const SITE = "https://meshrahman.com";
export const HOME_TITLE = "Mesh Rahman, an engineer who writes down what actually works";
export const HOME_DESCRIPTION =
  "Toronto engineer Mesh Rahman builds electric bus depots at work and servers at home. Essays on money, homelab builds, and ADHD systems, with real numbers in them.";
export const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "Mesh Rahman" };

const rss = {
  "application/rss+xml": [{ url: "/feed.xml", title: "Mesh Rahman, essays" }],
};

export function pageMeta({
  path,
  title,
  description,
  type = "website",
  publishedTime,
  absoluteTitle = false,
}: {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path, types: rss },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Mesh Rahman",
      locale: "en_CA",
      type,
      images: [OG_IMAGE],
      ...(publishedTime ? { publishedTime, authors: [SITE] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

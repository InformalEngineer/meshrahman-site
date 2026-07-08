import { getAllEssays, getEssay } from "@/lib/essays";

// Static export: this renders once at build time (no Request usage, 03-TRD §2).
export const dynamic = "force-static";

const escape = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export async function GET() {
  const base = "https://meshrahman.com";
  const essays = getAllEssays();
  const items = await Promise.all(
    essays.map(async (meta) => {
      const essay = await getEssay(meta.slug);
      const url = `${base}/essays/${essay.slug}/`;
      return `    <item>
      <title>${escape(essay.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
      ${essay.excerpt ? `<description>${escape(essay.excerpt)}</description>` : ""}
      <content:encoded><![CDATA[${essay.contentHtml}]]></content:encoded>
    </item>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mesh Rahman, essays</title>
    <link>${base}</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Stories with numbers in them: money, career, ADHD systems, experiments, and builds.</description>
    <language>en-ca</language>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

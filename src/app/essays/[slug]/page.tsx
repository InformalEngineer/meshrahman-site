import type { Metadata } from "next";
import { getAllEssays, getEssay } from "@/lib/essays";
import NewsletterCTA from "@/components/NewsletterCTA";

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = await getEssay(slug);
  return {
    title: essay.title,
    description: essay.excerpt || undefined,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = await getEssay(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    datePublished: essay.date,
    author: { "@type": "Person", name: "Mesh Rahman", url: "https://meshrahman.com" },
    url: `https://meshrahman.com/essays/${essay.slug}/`,
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <p className="font-mono text-xs text-zinc-500">
        {essay.date.slice(0, 10)} · {essay.readingTime} min ·{" "}
        {essay.tags.join(", ")}
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
        {essay.title}
      </h1>
      {essay.migrated && (
        <p className="mt-4 rounded border border-zinc-800 bg-zinc-900/50 px-4 py-2 font-mono text-xs text-zinc-500">
          changelog: 2026-07, migrated from meshaelr.com
          {essay.sourceSlug ? ` (was /${essay.sourceSlug})` : ""}. A full
          rewrite pass in my current voice is queued.
        </p>
      )}
      <article
        className="prose prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: essay.contentHtml }}
      />
      <div className="mt-14">
        <NewsletterCTA />
      </div>
    </main>
  );
}

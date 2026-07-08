import type { Metadata } from "next";
import Link from "next/link";
import { getAllEssays, getEssay } from "@/lib/essays";
import NewsletterCTA from "@/components/NewsletterCTA";
import LibraryCard from "@/components/LibraryCard";

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
    openGraph: {
      title: essay.title,
      description: essay.excerpt || undefined,
      type: "article",
      publishedTime: essay.date,
      url: `https://meshrahman.com/essays/${essay.slug}/`,
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = await getEssay(slug);

  // Essays are sorted newest-first, so "previous" is the older neighbour.
  const all = getAllEssays();
  const index = all.findIndex((e) => e.slug === slug);
  const newer = index > 0 ? all[index - 1] : null;
  const older = index < all.length - 1 ? all[index + 1] : null;

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
      <Link
        href="/essays/"
        className="font-mono text-xs text-zinc-500 transition-colors hover:text-accent"
      >
        ← all essays
      </Link>
      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {essay.title}
      </h1>
      <LibraryCard
        published={essay.date}
        readingTime={essay.readingTime}
        tags={essay.tags}
        migrated={essay.migrated}
        sourceSlug={essay.sourceSlug}
      />
      <article
        className="prose prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-accent prose-blockquote:border-accent prose-img:rounded-lg prose-img:border prose-img:border-zinc-800"
        dangerouslySetInnerHTML={{ __html: essay.contentHtml }}
      />
      <nav
        aria-label="More essays"
        className="mt-14 grid gap-3 border-t border-zinc-800 pt-6 sm:grid-cols-2"
      >
        {older ? (
          <Link
            href={`/essays/${older.slug}/`}
            className="group rounded-lg border border-zinc-800 p-4 transition-colors hover:border-accent/60"
          >
            <p className="font-mono text-xs text-zinc-500">← older</p>
            <p className="mt-1 text-sm font-medium text-zinc-100 group-hover:text-accent">
              {older.title}
            </p>
          </Link>
        ) : (
          <span aria-hidden />
        )}
        {newer && (
          <Link
            href={`/essays/${newer.slug}/`}
            className="group rounded-lg border border-zinc-800 p-4 text-right transition-colors hover:border-accent/60"
          >
            <p className="font-mono text-xs text-zinc-500">newer →</p>
            <p className="mt-1 text-sm font-medium text-zinc-100 group-hover:text-accent">
              {newer.title}
            </p>
          </Link>
        )}
      </nav>
      <div className="mt-10">
        <NewsletterCTA />
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import type { EssayMeta } from "@/lib/essays";

const TAGS = ["money", "career", "adhd", "experiments", "builds"];

function EssayIndexInner({ essays }: { essays: EssayMeta[] }) {
  const params = useSearchParams();
  const initial = params.get("tag");
  const [active, setActive] = useState<string | null>(
    initial && TAGS.includes(initial) ? initial : null
  );

  // Keep the URL shareable without a server round trip (static export).
  const select = (tag: string | null) => {
    setActive(tag);
    window.history.replaceState(null, "", tag ? `/essays/?tag=${tag}` : "/essays/");
  };

  const counts = Object.fromEntries(
    TAGS.map((t) => [t, essays.filter((e) => e.tags.includes(t)).length])
  );
  const shown = active ? essays.filter((e) => e.tags.includes(active)) : essays;

  return (
    <>
      <div role="group" aria-label="Filter essays by tag" className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => select(null)}
          aria-pressed={active === null}
          className={`rounded px-3 py-1 font-mono text-xs transition-colors ${
            active === null
              ? "bg-accent text-zinc-950"
              : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100"
          }`}
        >
          all ({essays.length})
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => select(tag)}
            aria-pressed={active === tag}
            className={`rounded px-3 py-1 font-mono text-xs transition-colors ${
              active === tag
                ? "bg-accent text-zinc-950"
                : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100"
            }`}
          >
            {tag} ({counts[tag]})
          </button>
        ))}
      </div>
      <ul className="mt-8 space-y-4">
        {shown.map((essay) => (
          <li key={essay.slug}>
            <Link
              href={`/essays/${essay.slug}/`}
              className="group block rounded-lg border border-zinc-800 p-5 transition-colors hover:border-accent/60 hover:bg-zinc-900/40"
            >
              <p className="font-medium text-zinc-100 transition-colors group-hover:text-accent">
                {essay.title}
              </p>
              {essay.excerpt && (
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {essay.excerpt}
                </p>
              )}
              <p className="mt-3 font-mono text-xs text-zinc-500">
                {essay.date.slice(0, 10)} · {essay.readingTime} min ·{" "}
                {essay.tags.join(", ")}
              </p>
            </Link>
          </li>
        ))}
        {shown.length === 0 && (
          <li className="rounded-lg border border-zinc-800 p-5 text-sm text-zinc-400">
            Nothing under this tag yet. The current builds live on the{" "}
            <Link href="/projects/" className="text-accent hover:underline">
              projects page
            </Link>{" "}
            until their write-ups land here.
          </li>
        )}
      </ul>
    </>
  );
}

export default function EssayIndex({ essays }: { essays: EssayMeta[] }) {
  return (
    <Suspense>
      <EssayIndexInner essays={essays} />
    </Suspense>
  );
}

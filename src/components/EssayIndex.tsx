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

  const shown = active ? essays.filter((e) => e.tags.includes(active)) : essays;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded px-3 py-1 font-mono text-xs ${
            active === null
              ? "bg-accent text-zinc-950"
              : "border border-zinc-700 text-zinc-400 hover:text-zinc-100"
          }`}
        >
          all
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded px-3 py-1 font-mono text-xs ${
              active === tag
                ? "bg-accent text-zinc-950"
                : "border border-zinc-700 text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="mt-8 space-y-4">
        {shown.map((essay) => (
          <li key={essay.slug}>
            <Link
              href={`/essays/${essay.slug}/`}
              className="group block rounded border border-zinc-800 p-4 hover:border-zinc-600"
            >
              <p className="font-medium text-zinc-100 group-hover:text-accent">
                {essay.title}
              </p>
              {essay.excerpt && (
                <p className="mt-1 text-sm text-zinc-500">{essay.excerpt}</p>
              )}
              <p className="mt-2 font-mono text-xs text-zinc-500">
                {essay.date.slice(0, 10)} · {essay.readingTime} min ·{" "}
                {essay.tags.join(", ")}
              </p>
            </Link>
          </li>
        ))}
        {shown.length === 0 && (
          <li className="text-sm text-zinc-500">Nothing under this tag yet.</li>
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

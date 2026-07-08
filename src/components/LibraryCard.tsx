import Link from "next/link";

// Essay record as a library date-due card (06-design-direction: library
// checkout cards). Every stamp is a real date from the essay's history, the
// card replaces the plain meta line and changelog note without losing any
// information (tags stay clickable).
export default function LibraryCard({
  published,
  readingTime,
  tags,
  migrated,
  sourceSlug,
}: {
  published: string;
  readingTime: number;
  tags: string[];
  migrated?: boolean;
  sourceSlug?: string;
}) {
  return (
    <div className="mt-6 rounded border border-zinc-800 bg-zinc-900/30 font-mono text-xs">
      <p className="flex items-baseline justify-between gap-4 border-b border-zinc-800 px-4 py-2 uppercase tracking-widest text-zinc-500">
        <span>Library record</span>
        <span aria-hidden>№ {published.slice(0, 10).replaceAll("-", "")}</span>
      </p>
      <dl>
        <div className="flex items-center justify-between gap-4 border-b border-dashed border-zinc-800 px-4 py-2">
          <dt className="text-zinc-500">first published</dt>
          <dd>
            <span className="stamp text-accent/80">{published.slice(0, 10)}</span>
          </dd>
        </div>
        {migrated && (
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-zinc-800 px-4 py-2">
            <dt className="text-zinc-500">
              transferred from meshaelr.com
              {sourceSlug ? ` (was /${sourceSlug})` : ""}
            </dt>
            <dd>
              <span className="stamp text-zinc-400">2026-07</span>
            </dd>
          </div>
        )}
        {migrated && (
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-zinc-800 px-4 py-2">
            <dt className="text-zinc-500">rewrite pass, current voice</dt>
            <dd>
              <span className="stamp border-dashed text-zinc-500">queued</span>
            </dd>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-zinc-500">
          <dt>borrow time: {readingTime} min</dt>
          <dd>
            shelved under:{" "}
            {tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && ", "}
                <Link
                  href={`/essays/?tag=${tag}`}
                  className="transition-colors hover:text-accent"
                >
                  {tag}
                </Link>
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}

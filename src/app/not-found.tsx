import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "This page is not here.",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        This page is not here.
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
        If you followed a link from the old site, the post probably moved when
        everything migrated over here in 2026 (13 years of URLs, most survived,
        a few didn&apos;t). The essays index is the fastest way to find what
        you were after.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/essays/"
          className="rounded bg-accent px-4 py-2 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90"
        >
          Browse the essays
        </Link>
        <Link
          href="/"
          className="rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-accent hover:text-accent"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

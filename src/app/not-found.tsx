import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "This page is not here.",
};

export default function NotFound() {
  // Colour bars like a station that signed off for the night, desaturated to
  // sit on the dark theme (06-design-direction: CRT signal, rendered in code).
  const bars = [
    "#9a9a9e",
    "#b0a44e",
    "#5fa8a4",
    "#6aa05f",
    "#a05f9a",
    "#a05f5f",
    "#5f6aa0",
  ];
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <svg
        viewBox="0 0 280 56"
        width="280"
        height="56"
        aria-hidden="true"
        className="signal-flicker max-w-full rounded border border-zinc-800"
        shapeRendering="crispEdges"
      >
        {bars.map((color, i) => (
          <rect key={color} x={i * 40} y="0" width="40" height="56" fill={color} />
        ))}
      </svg>
      <p className="mt-6 font-mono text-sm text-accent">404 · no signal</p>
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

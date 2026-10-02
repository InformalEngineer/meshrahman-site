import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/now/",
  title: "Now",
  description:
    "What Mesh Rahman is building and testing this month: the homelab cluster, the Sequoia, and the two sites.",
});

// Update monthly (05-content §3). Keep it honest: what is actually on the
// bench right now, one line each.
const updated = "2026-07";

const items = [
  {
    label: "This website",
    note: "rebuilt from Ghost to a two-site setup (stories here, procedures on Informal Engineer). Migration in progress, redirects in log-only mode.",
  },
  {
    label: "The essays",
    note: "migrated from the old site and getting rewrite passes one at a time, oldest numbers first.",
  },
  {
    label: "Homelab",
    note: "quiet month on purpose while the sites ship. The telemetry widget for this page is queued behind them.",
  },
];

export default function Now() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Now</h1>
      <p className="mt-2 font-mono text-xs text-subtle">updated {updated}</p>
      <ul className="mt-10 space-y-6">
        {items.map((item) => (
          <li key={item.label} className="border-l-2 border-accent pl-4">
            <p className="font-medium text-zinc-100">{item.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.note}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

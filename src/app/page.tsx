import Link from "next/link";
import { getAllEssays } from "@/lib/essays";

// Every card links somewhere real (01-PRD F1: nothing on Home is decorative).
// Tag cards go to the filtered essay index, build-type cards go to the bench.
const interests = [
  {
    label: "Homelab",
    note: "Proxmox, a NAS full of used SAS drives, and the 2am forum threads behind them",
    href: "/projects/",
    hint: "on the bench",
  },
  {
    label: "Money",
    note: "real budgets with real numbers, a mortgage I argue with",
    href: "/essays/?tag=money",
    hint: "essays tagged money",
  },
  {
    label: "Career",
    note: "a decade of building subways, hospitals, and data centres",
    href: "/essays/?tag=career",
    hint: "essays tagged career",
  },
  {
    label: "ADHD systems",
    note: "the operating system that makes the rest possible",
    href: "/essays/?tag=adhd",
    hint: "essays tagged adhd",
  },
  {
    label: "Builds",
    note: "a truck, a house, a 3D printer that mostly listens",
    href: "/essays/?tag=builds",
    hint: "essays tagged builds",
  },
  {
    label: "Experiments",
    note: "n=1 tests I actually run (mouth tape included)",
    href: "/essays/?tag=experiments",
    hint: "essays tagged experiments",
  },
];

export default function Home() {
  const latest = getAllEssays().slice(0, 4);
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="font-mono text-sm text-accent">hi, I&apos;m Mesh</p>
      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        I build things{" "}
        <span className="text-zinc-500">
          (servers, spreadsheets, a truck, a career)
        </span>{" "}
        and I write down what actually works.
      </h1>
      <p className="mt-5 text-lg text-zinc-400 sm:text-xl">
        Including the parts nobody tells you.
      </p>
      <p className="mt-8 font-mono text-xs text-zinc-500">
        making things on the internet since 2010 · Toronto · hosting bill: $0 a
        month
      </p>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
          <span aria-hidden className="text-accent">/ </span>
          what I&apos;m into
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {interests.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group rounded-lg border border-zinc-800 p-4 transition-colors hover:border-accent/60 hover:bg-zinc-900/40"
            >
              <p className="text-sm font-medium text-zinc-100 group-hover:text-accent">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
              <p className="mt-3 font-mono text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
                {item.hint}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
          <span aria-hidden className="text-accent">/ </span>
          latest essays
        </h2>
        <ul className="mt-2 divide-y divide-zinc-800/80">
          {latest.map((essay) => (
            <li key={essay.slug}>
              <Link
                href={`/essays/${essay.slug}/`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="font-medium text-zinc-100 transition-colors group-hover:text-accent">
                  {essay.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-zinc-500">
                  {essay.date.slice(0, 10)} · {essay.readingTime} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/essays/"
          className="mt-4 inline-block font-mono text-sm text-accent hover:underline"
        >
          all essays →
        </Link>
      </section>

      <section className="mt-16 rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
          <span aria-hidden className="text-accent">/ </span>
          two places, that&apos;s the whole system
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          The stories with numbers in them live here. The step-by-step
          procedures, lab notes, and parts lists live at Informal Engineer, the
          sibling site. If you came for the homelab configs, that is where they
          are.
        </p>
        <a
          href="https://informalengineer.com"
          className="mt-4 inline-block rounded border border-zinc-700 px-4 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-accent hover:text-accent"
        >
          informalengineer.com ↗
        </a>
      </section>
    </main>
  );
}

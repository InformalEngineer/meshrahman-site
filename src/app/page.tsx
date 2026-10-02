import Link from "next/link";
import { getAllEssays } from "@/lib/essays";
import PixelIcon from "@/components/PixelIcon";
import PowerMeter from "@/components/PowerMeter";
import { HOME_DESCRIPTION, HOME_TITLE, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  absoluteTitle: true,
});

// Every card links somewhere real (01-PRD F1: nothing on Home is decorative).
// Four cards, not six: a card that opens onto one essay reads as an empty
// shelf. ADHD lives in the hero line and About, builds live on /projects.
const interests = [
  {
    label: "Homelab",
    glyph: "server",
    note: "three used mini PCs in a Proxmox cluster, a NAS, and the 2am forum threads behind all of it",
    href: "/projects/",
    hint: "see the diagrams",
  },
  {
    label: "Money",
    glyph: "coin",
    note: "my real budget, a mortgage I argue with, and the three months I sold on Amazon",
    href: "/essays/?tag=money",
    tag: "money",
  },
  {
    label: "Experiments",
    glyph: "flask",
    note: "n=1 tests I actually ran, for months, with the data (mouth tape included)",
    href: "/essays/?tag=experiments",
    tag: "experiments",
  },
  {
    label: "Career",
    glyph: "tower",
    note: "data centres, a subway extension, electric bus depots, and what meetings actually cost",
    href: "/essays/?tag=career",
    tag: "career",
  },
];

export default function Home() {
  const essays = getAllEssays();
  const latest = essays.slice(0, 4);
  const countFor = (tag: string) => essays.filter((e) => e.tags.includes(tag)).length;

  // Real numbers only. 29 is the project count from the day-job record
  // (portfolio page in the Ghost export), essays are counted at build time.
  const readings = [
    { value: new Date().getFullYear() - 2010, label: "years making things online" },
    { value: 29, suffix: "+", label: "construction projects" },
    { value: essays.length, label: "essays with numbers" },
    { value: 0, prefix: "$", label: "monthly hosting bill" },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <p className="font-mono text-sm text-accent">hi, I&apos;m Mesh · engineer in Toronto</p>
      <h1 className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl">
        I build electric bus depots at work and servers at home, then I write
        down what actually worked.
        <span aria-hidden className="cursor-blink ml-1 font-mono text-accent">
          ▍
        </span>
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
        Real numbers on money and home builds, from an ADHD brain that needs
        everything in a spreadsheet. The parts that broke stay in.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/essays/"
          className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90"
        >
          Read the essays →
        </Link>
        <Link
          href="/about/"
          className="rounded border border-zinc-700 px-5 py-2.5 text-sm text-zinc-200 transition-colors hover:border-accent hover:text-accent"
        >
          The long version
        </Link>
      </div>

      <PowerMeter readings={readings} />

      <section className="mt-16" aria-labelledby="into">
        <h2 id="into" className="font-mono text-xs uppercase tracking-wide text-zinc-400">
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
              <div className="flex items-center gap-3">
                <PixelIcon
                  glyph={item.glyph}
                  size={20}
                  className="shrink-0 text-subtle transition-colors group-hover:text-accent"
                />
                <p className="text-sm font-medium text-zinc-100 group-hover:text-accent">
                  {item.label}
                </p>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{item.note}</p>
              <p className="mt-3 font-mono text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">
                {item.tag ? `${countFor(item.tag)} essays` : item.hint}{" "}
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="latest">
        <h2 id="latest" className="font-mono text-xs uppercase tracking-wide text-zinc-400">
          <span aria-hidden className="text-accent">/ </span>
          latest essays
        </h2>
        <ul className="mt-2 divide-y divide-zinc-800/80">
          {latest.map((essay) => (
            <li key={essay.slug}>
              <Link
                href={`/essays/${essay.slug}/`}
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="font-medium text-zinc-100 transition-colors group-hover:text-accent">
                  {essay.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-zinc-400">
                  <time dateTime={essay.date.slice(0, 10)}>{essay.date.slice(0, 10)}</time> ·{" "}
                  {essay.readingTime} min
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/essays/"
          className="mt-4 inline-block font-mono text-sm text-accent hover:underline"
        >
          all {essays.length} essays →
        </Link>
      </section>

      <section
        className="mt-16 rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
        aria-labelledby="howto"
      >
        <h2 id="howto" className="font-mono text-xs uppercase tracking-wide text-zinc-400">
          <span aria-hidden className="text-accent">/ </span>
          looking for the how-to?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          The step-by-step stuff lives on Informal Engineer, my lab site:
          homelab guides, weekly lab notes, and parts lists with what I actually
          paid in CAD. This site is for the stories behind them.
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

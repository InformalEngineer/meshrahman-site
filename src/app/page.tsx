import Link from "next/link";
import { getAllEssays } from "@/lib/essays";

const interests = [
  { label: "Homelab", note: "Proxmox, a NAS full of used SAS drives, and the 2am forum threads behind them" },
  { label: "Money", note: "real budgets with real numbers, a mortgage I argue with" },
  { label: "Career", note: "a decade of building subways, hospitals, and data centres" },
  { label: "ADHD systems", note: "the operating system that makes the rest possible" },
  { label: "Builds", note: "a truck, a house, a 3D printer that mostly listens" },
  { label: "Experiments", note: "n=1 tests I actually run (mouth tape included)" },
];

export default function Home() {
  const latest = getAllEssays().slice(0, 3);
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-sm text-accent">hi, I&apos;m Mesh</p>
      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        I build things (servers, spreadsheets, a truck, a career) and I write
        down what actually works.
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        Including the parts nobody tells you.
      </p>

      <section className="mt-14">
        <h2 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
          what I&apos;m into
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {interests.map((item) => (
            <div key={item.label} className="rounded border border-zinc-800 p-4">
              <p className="text-sm font-medium text-zinc-100">{item.label}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs uppercase tracking-wide text-zinc-500">
          latest essays
        </h2>
        <ul className="mt-4 space-y-4">
          {latest.map((essay) => (
            <li key={essay.slug}>
              <Link
                href={`/essays/${essay.slug}/`}
                className="group block rounded border border-zinc-800 p-4 hover:border-zinc-600"
              >
                <p className="font-medium text-zinc-100 group-hover:text-accent">
                  {essay.title}
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {essay.date.slice(0, 10)} · {essay.readingTime} min ·{" "}
                  {essay.tags.join(", ")}
                </p>
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
    </main>
  );
}

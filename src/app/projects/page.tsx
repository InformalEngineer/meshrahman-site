import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { HomelabDiagram, TwoSiteDiagram } from "@/components/Diagrams";

export const metadata: Metadata = pageMeta({
  path: "/projects/",
  title: "Projects",
  description:
    "What Mesh Rahman has built and is building: a $0 a month two-site setup, a three-node Proxmox homelab, a 2011 Toyota Sequoia, and the budget spreadsheet.",
});

// 01-PRD F4: each card carries a live element (demo, diagram, or clip).
// Diagrams are drawn in code from real build facts. A card with nothing real
// to show says what it is and links to the writing, no "queued" promises
// (a list of promises reads as a to-do list, audit 2026-10).
type Project = {
  title: string;
  status: "SHIPPED" | "RUNNING" | "IN PROGRESS";
  body: string;
  visual?: React.ReactNode;
  link?: { href: string; label: string; external?: boolean };
};

const projects: Project[] = [
  {
    title: "The $0 a month publishing setup",
    status: "SHIPPED",
    body: "Two static sites and a redirect worker, deployed from git to Cloudflare's free tier. It replaced a $12 USD a month Ghost server that billed me for four years whether I wrote anything or not (about $790 CAD in total, a lot of it for guilt). Every old URL from the last 13 years still lands somewhere sensible.",
    visual: <TwoSiteDiagram />,
    link: { href: "/essays/zero-dollar-website/", label: "read the story" },
  },
  {
    title: "Homelab: three mini PCs, one cluster",
    status: "IN PROGRESS",
    body: "My family uses things running in our basement every day (ad blocking, the media server, the home automations), and until this year all of it lived on one Lenovo box. One box means every update is a bet the whole house loses if I'm wrong. So I bought three used Lenovo M710q mini PCs and CA$120 of RAM, and I'm moving everything onto a cluster where any one machine is allowed to die.",
    visual: <HomelabDiagram />,
    link: {
      href: "https://informalengineer.com/notes/",
      label: "lab notes on informalengineer.com ↗",
      external: true,
    },
  },
  {
    title: "2011 Toyota Sequoia",
    status: "IN PROGRESS",
    body: "My wife was pregnant, we needed a second car, I had $20,000 CAD to spend, and I came home with a 2011 Sequoia. I saw the red flags. I want to be clear that I saw them. It is slowly becoming the family camping rig, and the buying story is the first video.",
    visual: (
      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded border border-zinc-800 bg-zinc-800 font-mono text-xs sm:grid-cols-4">
        {[
          ["paid", "$14,500 CAD"],
          ["in USD", "~$10,500"],
          ["odometer", "195,000 km"],
          ["budget left", "$5,500 CAD"],
        ].map(([k, v]) => (
          <div key={k} className="bg-zinc-950 px-3 py-2">
            <dt className="text-zinc-400">{k}</dt>
            <dd className="mt-0.5 text-accent">{v}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    title: "The budgeting system",
    status: "RUNNING",
    body: "The spreadsheet that has run our money since 2019, through a house, a truck, and a kid. The essay that is up now is the 2019 version. The rebuild, with my current categories and real numbers, is first in the rewrite queue.",
    link: { href: "/essays/my-budgeting-system/", label: "read the 2019 version" },
  },
];

const badgeStyles: Record<string, string> = {
  SHIPPED: "bg-accent text-zinc-950",
  RUNNING: "border border-accent/50 text-accent",
  "IN PROGRESS": "border border-zinc-600 text-zinc-300",
};

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-xl text-zinc-300">
        What is on the bench and what already shipped, with the real numbers.
        The statuses are honest, IN PROGRESS means I am still in the middle of
        it.
      </p>
      <div className="mt-10 space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-zinc-800 p-5 transition-colors hover:border-zinc-700"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-medium text-zinc-100">{p.title}</h2>
              <span className={`rounded px-2 py-0.5 font-mono text-xs ${badgeStyles[p.status]}`}>
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.body}</p>
            {p.visual}
            {p.link &&
              (p.link.external ? (
                <a
                  href={p.link.href}
                  className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
                >
                  {p.link.label}
                </a>
              ) : (
                <Link
                  href={p.link.href}
                  className="mt-4 inline-block font-mono text-xs text-accent hover:underline"
                >
                  {p.link.label} →
                </Link>
              ))}
          </article>
        ))}
      </div>
    </main>
  );
}

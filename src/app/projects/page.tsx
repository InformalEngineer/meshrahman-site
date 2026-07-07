import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "What I've built and what I'm building. Live elements coming per project.",
};

// 01-PRD F4 wants each card to carry a live element (demo, diagram, or clip).
// Phase 1 ships honest cards; the interactive pieces land in Phase 2/3 and
// each card says what its live element will be, a promise with a receipt.
const projects = [
  {
    title: "This two-site setup",
    status: "SHIPPED",
    body: "One personal site (this one) and one lab (Informal Engineer), both static, deployed from git to the edge, with a permanent redirect map protecting 13 years of old URLs. Total hosting bill: $0 a month.",
    liveElement: "the sites themselves",
  },
  {
    title: "Homelab",
    status: "RUNNING",
    body: "Proxmox cluster, NAS on used SAS drives, tunnel-only networking with zero open ports. The parts list and guides live on Informal Engineer.",
    liveElement: "live telemetry widget, queued (uptime, containers, storage)",
  },
  {
    title: "2011 Toyota Sequoia build",
    status: "IN PROGRESS",
    body: "The $14,500 CAD family hauler that is slowly becoming a camping rig. Bought with full awareness of every red flag (I saw them, I want to be clear that I saw them).",
    liveElement: "build log with photos, coming with the video series",
  },
  {
    title: "The budgeting system",
    status: "RUNNING",
    body: "The spreadsheet system that has survived a house, a truck, and a kid. The essay version is live, the interactive calculator version is queued.",
    liveElement: "embedded calculator, queued",
  },
  {
    title: "Apollo",
    status: "RUNNING",
    body: "The nightly-backup and automation setup that this whole publishing pipeline borrowed its patterns from.",
    liveElement: "architecture diagram, queued",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        The bench. Statuses are honest and the queued live elements are
        commitments, not decoration.
      </p>
      <div className="mt-10 space-y-4">
        {projects.map((p) => (
          <div key={p.title} className="rounded border border-zinc-800 p-5">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-medium text-zinc-100">{p.title}</h2>
              <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-accent">
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            <p className="mt-2 font-mono text-xs text-zinc-600">
              live element: {p.liveElement}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

// Project diagrams, drawn in code (06-design-direction: rendered, no image
// assets). Built as HTML boxes instead of SVG so text wraps on phones and
// every label stays selectable and readable by screen readers. Every fact
// here is real: the two-site setup is INFRASTRUCTURE-GUIDE.md, the homelab
// is the homelab26 build notes (content/2026/02-homelab-cluster-1).

function Node({
  title,
  detail,
  tone = "default",
}: {
  title: string;
  detail?: string;
  tone?: "default" | "accent" | "muted";
}) {
  const tones = {
    default: "border-zinc-700 bg-zinc-900/60",
    accent: "border-accent/70 bg-accent/5",
    muted: "border-dashed border-zinc-700 bg-transparent",
  };
  return (
    <div className={`rounded border px-3 py-2 ${tones[tone]}`}>
      <p className="font-mono text-xs text-zinc-100">{title}</p>
      {detail && <p className="mt-0.5 text-[11px] leading-snug text-zinc-400">{detail}</p>}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 py-1 pl-4 font-mono text-[11px] text-subtle">
      <span aria-hidden className="text-accent">↓</span>
      {label}
    </div>
  );
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
      <figcaption className="mb-3 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
        {title}
      </figcaption>
      {children}
    </figure>
  );
}

export function TwoSiteDiagram() {
  return (
    <Frame title="how a post gets published · $0 a month">
      <Node title="markdown file on my laptop" detail="an essay, a guide, or a lab note" />
      <Arrow label="git push, open a pull request" />
      <Node
        title="GitHub (InformalEngineer org)"
        detail="CI builds the site and posts a preview link, that is the proofread"
      />
      <Arrow label="merge to main, about 2 minutes" />
      <Node title="Cloudflare Pages, free tier" detail="static files served from the edge" tone="accent" />
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        <Node title="meshrahman.com" detail="Next.js, the stories" />
        <Node title="informalengineer.com" detail="Astro, the procedures" />
        <Node title="meshaelr.com" detail="a Worker with 20 permanent redirects, so old links never die" tone="muted" />
      </div>
    </Frame>
  );
}

export function HomelabDiagram() {
  const nodes = [
    { name: "node 1 · M710q", ram: "24 GB" },
    { name: "node 2 · M710q", ram: "24 GB" },
    { name: "node 3 · M710q", ram: "20 GB" },
  ];
  return (
    <Frame title="homelab, cluster build (2026)">
      <Node title="the internet" tone="muted" />
      <Arrow label="Cloudflare Tunnel, outbound only, zero open ports" />
      <div className="rounded border border-accent/70 bg-accent/5 p-3">
        <p className="font-mono text-xs text-zinc-100">Proxmox cluster, 68 GB RAM total</p>
        <p className="mt-0.5 text-[11px] text-zinc-400">
          one Kubernetes (k3s) VM per node, config lives in Git and Flux applies it
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {nodes.map((n) => (
            <Node key={n.name} title={n.name} detail={`used Lenovo mini PC, ${n.ram}`} />
          ))}
        </div>
        <p className="mt-2 font-mono text-[11px] text-subtle">
          built so any one node can die and the services keep running
        </p>
      </div>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <Node title="QNAP NAS, 8 TB" detail="bulk storage" />
        <Node
          title="M720s, the old single box"
          detail="i5-8500, 16 GB, 4 TB ZFS pool, 5 guests, gets wiped and rejoins as node 4"
          tone="muted"
        />
      </div>
    </Frame>
  );
}

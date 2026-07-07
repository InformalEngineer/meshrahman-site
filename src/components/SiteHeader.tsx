import Link from "next/link";

const nav = [
  { href: "/essays/", label: "Essays" },
  { href: "/projects/", label: "Projects" },
  { href: "/now/", label: "Now" },
  { href: "/reading/", label: "Reading" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-5">
        <Link href="/" className="font-mono text-sm text-accent">
          mesh rahman
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-400">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-zinc-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://informalengineer.com"
          className="ml-auto rounded border border-zinc-700 px-3 py-1 font-mono text-xs text-zinc-300 hover:border-accent hover:text-accent"
        >
          Informal Engineer ↗
        </a>
      </div>
    </header>
  );
}

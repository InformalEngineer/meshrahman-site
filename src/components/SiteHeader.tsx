"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/essays/", label: "Essays" },
  { href: "/projects/", label: "Projects" },
  { href: "/now/", label: "Now" },
  { href: "/reading/", label: "Reading" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    // Sticky only from sm up: the wrapped 3-row header would eat a mobile viewport.
    <header className="top-0 z-40 border-b border-zinc-800/80 bg-[#0c0c0e]/85 backdrop-blur sm:sticky">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
        >
          mesh rahman
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-zinc-100 underline decoration-accent decoration-2 underline-offset-8"
                    : "text-zinc-400 transition-colors hover:text-zinc-100"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="https://informalengineer.com"
          className="ml-auto rounded border border-zinc-700 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-accent hover:text-accent"
        >
          Informal Engineer ↗
        </a>
      </div>
    </header>
  );
}

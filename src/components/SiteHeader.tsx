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
    // Mobile: brand + sibling button on row one, nav as a single swipeable
    // row underneath (was three wrapped rows, ~135px of a 812px screen).
    // Sticky only from sm up, where the whole header is one row.
    <header className="top-0 z-40 border-b border-zinc-800/80 bg-[#0c0c0e]/85 backdrop-blur sm:sticky">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-1 px-6 pt-4 pb-1 sm:flex-nowrap sm:pb-4">
        <Link
          href="/"
          className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
        >
          mesh rahman
        </Link>
        <a
          href="https://informalengineer.com"
          className="ml-auto rounded border border-zinc-700 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-accent hover:text-accent sm:order-last"
        >
          Informal Engineer ↗
        </a>
        <nav
          aria-label="Main"
          className="-mx-6 flex w-[calc(100%+3rem)] gap-x-5 overflow-x-auto px-6 py-2 text-sm [scrollbar-width:none] sm:mx-0 sm:w-auto sm:overflow-visible sm:p-0"
        >
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 py-1 ${
                  active
                    ? "text-zinc-100 underline decoration-accent decoration-2 underline-offset-8"
                    : "text-zinc-400 transition-colors hover:text-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import NewsletterCTA from "./NewsletterCTA";
import DialUpStatus from "./DialUpStatus";

const siteLinks = [
  { href: "/essays/", label: "Essays" },
  { href: "/projects/", label: "Projects" },
  { href: "/now/", label: "Now" },
  { href: "/reading/", label: "Reading" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <NewsletterCTA />
        <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto_auto]">
          <p className="max-w-md text-xs leading-relaxed text-zinc-500">
            Mesh Rahman. Engineer (P.Eng) and project manager (PMP) by day,
            professional tinkerer the rest of the time. The technical guides
            live at{" "}
            <a
              href="https://informalengineer.com"
              className="text-zinc-400 transition-colors hover:text-accent"
            >
              informalengineer.com
            </a>
            .
          </p>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-1">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-mono text-xs text-zinc-500">
            <a
              href="https://github.com/InformalEngineer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="mailto:MeshaelR@gmail.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>{" "}
            ·{" "}
            <a href="/feed.xml" className="transition-colors hover:text-accent">
              RSS
            </a>
          </p>
        </div>
        <DialUpStatus />
      </div>
    </footer>
  );
}

import NewsletterCTA from "./NewsletterCTA";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <NewsletterCTA />
        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 text-xs text-zinc-500">
          <p className="max-w-md">
            Mesh Rahman. Engineer (P.Eng) and project manager (PMP) by day,
            professional tinkerer the rest of the time. The technical guides
            live at{" "}
            <a href="https://informalengineer.com" className="text-zinc-400 hover:text-accent">
              informalengineer.com
            </a>
            .
          </p>
          <p className="font-mono">
            <a href="https://github.com/InformalEngineer" className="hover:text-accent">
              GitHub
            </a>{" "}
            ·{" "}
            <a href="mailto:MeshaelR@gmail.com" className="hover:text-accent">
              Email
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

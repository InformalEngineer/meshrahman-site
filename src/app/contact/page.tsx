import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and socials. One paragraph, no form theater.",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-6 max-w-xl leading-relaxed text-zinc-300">
        Email works:{" "}
        <a href="mailto:MeshaelR@gmail.com" className="text-accent hover:underline">
          MeshaelR@gmail.com
        </a>
        . I read everything, I reply to most of it, and I&apos;m slow in a
        predictable way (there is a kid here now). Code lives at{" "}
        <a
          href="https://github.com/InformalEngineer"
          className="text-accent hover:underline"
        >
          github.com/InformalEngineer
        </a>
        . The technical guides and lab notes live at{" "}
        <a href="https://informalengineer.com" className="text-accent hover:underline">
          informalengineer.com
        </a>
        .
      </p>
    </main>
  );
}

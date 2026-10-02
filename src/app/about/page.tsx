import type { Metadata } from "next";
import Link from "next/link";
import CareerSchedule from "@/components/CareerSchedule";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/about/",
  title: "About",
  description:
    "Mesh Rahman is a Toronto infrastructure program manager (P.Eng, PMP) building electric bus depots. He started on YouTube at 14, worked on data centres and a subway extension, and writes down the real numbers.",
});

// Chapter structure is hard-coded on purpose (01-PRD §6, §10): Minecraft
// comes before the P.Eng. Facts come from the journey and portfolio drafts in
// the Ghost export. Voice pass 2026-10 (audit), Mesh to confirm before merge.
const chapters = [
  {
    id: "minecraft",
    kicker: "chapter one",
    title: "The Minecraft years",
    body: `We moved to Canada in 2006, I was ten, and English came second (it still does, you'll notice it in the writing, I've decided that's fine). By 2010 I was recording gaming commentary after football practice and uploading it from my bedroom, and it got out of hand in the best way. By the summer of grade 11 I had about 20,000 subscribers, a content director role at Machinima, and roughly $3,000 USD a month coming in from videos. My parents thought I was doing homework up there. (I was rendering.) That channel taught me the habit everything on this site runs on: build the thing, then write down how you built it.`,
  },
  {
    id: "big-things",
    kicker: "chapter two",
    title: "Building big things",
    body: `I took 2014 off to work for Samsung, then did engineering at McMaster from 2015 to 2021 (with an internship in the middle). Field engineer on CIBC Square, then virtual design and construction on hospitals, nuclear projects, and data centres, then project manager on TOR1, which at the time was the biggest data centre in Canada. After that I was the design package manager on the Scarborough Subway Extension until the design was done. Today I'm an infrastructure program manager, building electric bus depots and terminals and upgrading existing depots at sites that are not allowed to go down. More than 29 projects, about $15.8 billion CAD in combined value, and for a lot of it my actual job was making sure a pipe and a duct never try to live at the same coordinates. Somewhere in there I got my P.Eng and my PMP, which mostly changed what I'm allowed to sign. I still read the forum threads.`,
  },
  {
    id: "small-things",
    kicker: "chapter three",
    title: "Building small things",
    body: `Same instincts, aimed at my own square footage. A homelab that started as one Lenovo mini PC and is turning into a three-node Proxmox cluster, built so any one box can die without the house noticing. A 2011 Toyota Sequoia I bought for $14,500 CAD with full awareness of every red flag (I saw them, I want to be clear that I saw them). A house that keeps generating projects. A spreadsheet for every one of them, because I don't trust a decision I can't put in a table.`,
  },
  {
    id: "operating-system",
    kicker: "chapter four",
    title: "The operating system",
    body: `I was failing courses left and right in first and second year of engineering, until I got diagnosed with ADHD. The only thing that changed after: I wrote exams in a quiet room with a bit of extra time, and suddenly I was near the top of the class. Same brain, different setup. That's why I care about systems more than motivation. Checklists, timers, Stoicism, writing everything down, take any one of them away and things start falling over, so I treat them like structure. I share what works for me because a stranger's 2am forum post once did the same for me (sharing systems here, not diagnosing anyone).`,
  },
  {
    id: "now",
    kicker: "chapter five",
    title: "Now",
    body: `A wife who is always the most accurate reviewer in the room, a new kid, and exactly two places on the internet. This site has the stories. Informal Engineer has the procedures, the parts lists, and the weekly lab notes. I have started a lot of brands since PixelizedChaos, and keeping it to two is the hardest engineering problem on this page.`,
  },
];

// For the person who searched the name (01-PRD §3): the facts in one glance.
const facts = [
  ["Day job", "Infrastructure program manager"],
  ["Based in", "Toronto, Ontario"],
  ["Licences", "P.Eng, PMP"],
  ["School", "Engineering, McMaster (2015 to 2021)"],
  ["Project record", "29+ projects, ~$15.8B CAD combined"],
  ["Online since", "2010"],
];

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
        I&apos;m Mesh Rahman, an infrastructure program manager and licensed
        engineer in Toronto. I&apos;ve worked on more than 29 construction
        projects worth about $15.8 billion CAD combined, and I
        still think the most useful thing I ever built was a gaming channel when
        I was fourteen. Here&apos;s why, in chapters.
      </p>

      <dl className="mt-8 grid gap-x-6 gap-y-2 rounded-lg border border-zinc-800 p-4 font-mono text-xs sm:grid-cols-3">
        {facts.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between gap-4 border-b border-dashed border-zinc-800 pb-2 sm:block sm:border-0 sm:pb-0"
          >
            <dt className="text-zinc-400">{k}</dt>
            <dd className="text-zinc-100">{v}</dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 sm:block">
          <dt className="text-zinc-400">Reach me</dt>
          <dd>
            <Link href="/contact/" className="text-accent hover:underline">
              contact page →
            </Link>
          </dd>
        </div>
      </dl>

      <CareerSchedule />

      <nav aria-label="Chapters" className="mt-12 flex flex-wrap gap-2 font-mono text-xs">
        {chapters.map((ch, i) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="rounded border border-zinc-800 px-2.5 py-1 text-zinc-400 transition-colors hover:border-accent hover:text-accent"
          >
            {String(i + 1).padStart(2, "0")} {ch.title}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {chapters.map((ch) => (
          <section key={ch.id} id={ch.id} className="scroll-mt-24" aria-labelledby={`${ch.id}-h`}>
            <p className="font-mono text-xs text-accent">{ch.kicker}</p>
            <h2 id={`${ch.id}-h`} className="mt-1 text-xl font-semibold">
              {ch.title}
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-300">{ch.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The full story, told as chapters. Minecraft channels, subway megaprojects, data centres, a homelab, and the ADHD operating system underneath all of it.",
};

// Chapter structure is hard-coded on purpose (01-PRD §6, §10): Minecraft
// comes before the P.Eng. Facts below come from the journey and portfolio
// drafts in the Ghost export. DRAFT status: Mesh should do one voice pass.
const chapters = [
  {
    kicker: "chapter one",
    title: "The Minecraft years",
    body: `I've been making things on the internet since 2010. It started with YouTube gaming commentaries recorded after football practice, and it got out of hand in the best way, by the summer of my junior year of high school I had about 20,000 subscribers, a content director role at Machinima, and roughly $3,000 USD a month coming in from videos. My parents thought I was doing homework up there. (I was rendering.) That channel taught me the habit that everything else here runs on: build the thing, then document the thing.`,
  },
  {
    kicker: "chapter two",
    title: "Building big things",
    body: `The day job decade: field engineer at CIBC Square, then virtual design and construction on hospitals, nuclear projects, and data centres, then project management on a hyperscale data centre build, then integrated digital delivery on a subway extension. Around 29 projects with a cumulative value north of $15.8 billion CAD, which sounds impressive until you learn my actual job was making sure pipes don't occupy the same coordinates as ducts. Somewhere in there I picked up a P.Eng and a PMP. They show up here as facts, not as the point.`,
  },
  {
    kicker: "chapter three",
    title: "Building small things",
    body: `The same instincts, aimed at my own square footage. A homelab that started as one mini PC and is now a rack I have opinions about. A 2011 Toyota Sequoia I'm building out (wife's request that it stop being a parts shelf is pending review). A house that keeps generating projects. Spreadsheets with real numbers in them, because I don't trust a decision I can't put in a table.`,
  },
  {
    kicker: "chapter four",
    title: "The operating system",
    body: `I was failing university courses left and right until an ADHD diagnosis in second year. The only change after it: I wrote exams in a quiet room with a bit of extra time, and suddenly I was grading with the top of the class. That experience is why I care about systems more than motivation. Stoicism, checklists, timers, writing everything down, none of it is aesthetic for me, it's load-bearing. I share the systems here because someone else's 2am forum post once did the same for me. I share what works for me, I'm not diagnosing anyone.`,
  },
  {
    kicker: "chapter five",
    title: "Now",
    body: `A wife who is always the most accurate reviewer in the room, a new kid, and exactly two properties on the internet: this site for the stories, and Informal Engineer for the procedures. Everything I make lives in one of those two places now. That's the whole system, and keeping it to two is the hardest engineering problem on this page.`,
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-3 text-zinc-400">
        The story in chapters, because a résumé wouldn&apos;t explain why the
        Minecraft part matters most.
      </p>
      <div className="mt-12 space-y-12">
        {chapters.map((ch) => (
          <section key={ch.title}>
            <p className="font-mono text-xs text-accent">{ch.kicker}</p>
            <h2 className="mt-1 text-xl font-semibold">{ch.title}</h2>
            <p className="mt-3 leading-relaxed text-zinc-300">{ch.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

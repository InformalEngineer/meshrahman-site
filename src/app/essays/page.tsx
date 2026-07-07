import type { Metadata } from "next";
import EssayIndex from "@/components/EssayIndex";
import { getAllEssays } from "@/lib/essays";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Personal writing with real numbers in it: money, career, ADHD systems, and experiments.",
};

export default function Essays() {
  const essays = getAllEssays();
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Essays</h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        Stories with numbers in them. Most of these lived on the old site
        first and are getting rewrite passes one by one, the changelog line on
        each essay says where it stands.
      </p>
      <EssayIndex essays={essays} />
    </main>
  );
}

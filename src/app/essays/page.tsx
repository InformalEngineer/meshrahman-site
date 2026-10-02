import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import EssayIndex from "@/components/EssayIndex";
import { getAllEssays } from "@/lib/essays";

export const metadata: Metadata = pageMeta({
  path: "/essays/",
  title: "Essays",
  description:
    "Personal essays with real numbers in them: budgeting, debt, selling on Amazon, meeting costs, and n=1 experiments like 16 months of mouth taping.",
});

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

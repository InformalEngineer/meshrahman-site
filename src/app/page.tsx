export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-[#febe04] mb-6">meshrahman.com</p>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight mb-6">
          I&apos;m Mesh. I build things (servers, spreadsheets, a truck, a
          career) and I write down what actually works.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Including the parts nobody tells you.
        </p>
        <p className="mt-12 font-mono text-xs text-zinc-600">
          Site under construction. Phase 1 in progress.
        </p>
      </div>
    </main>
  );
}

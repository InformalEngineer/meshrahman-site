"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// Shonen-scale counter strip (06-design-direction: counters that count up).
// Every value is real and rendered in the static HTML, so crawlers and no-JS
// readers get the final numbers. With motion allowed, the digits roll up from
// zero once, the first time the strip is on screen. Digits are written to the
// DOM directly so the animation never re-renders React (and never trips the
// no-setState-in-effect lint rule).
export type Reading = { value: number; prefix?: string; suffix?: string; label: string };

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function PowerMeter({ readings }: { readings: Reading[] }) {
  const ref = useRef<HTMLDListElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const digits = Array.from(el.querySelectorAll<HTMLElement>("[data-value]"));
    const write = (eased: number) =>
      digits.forEach((d) => {
        d.textContent = String(Math.round(Number(d.dataset.value) * eased));
      });
    // Zero before first paint, then roll up when the strip is half visible.
    write(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 900);
          write(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      write(1);
    };
  }, []);

  return (
    <dl
      ref={ref}
      className="mt-10 grid grid-cols-2 divide-zinc-800 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 sm:grid-cols-4 sm:divide-x"
    >
      {readings.map((r) => (
        <div key={r.label} className="flex flex-col-reverse gap-1 px-4 py-3">
          <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
            {r.label}
          </dt>
          <dd className="font-mono text-2xl tabular-nums text-accent">
            {r.prefix}
            <span data-value={r.value}>{r.value}</span>
            {r.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}

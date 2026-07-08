"use client";

import { useEffect, useState } from "react";

// The dial-up honesty line (06-design-direction). Real page weight, measured
// in this browser, priced in 56k seconds. Numbers must be real or the line
// stays silent, no made-up nostalgia.
export default function DialUpStatus() {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    // Measure in a deferred callback: keeps the lint rule happy (no sync
    // setState in an effect) and gives late resources a beat to land in the
    // performance buffer before we count their bytes.
    const timer = window.setTimeout(() => {
      const nav = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      const resources = performance.getEntriesByType(
        "resource",
      ) as PerformanceResourceTiming[];
      const bytes =
        (nav?.transferSize ?? 0) +
        resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);

      if (!bytes) {
        // transferSize is 0 when everything came from cache
        setLine("this copy came from your cache, 0 KB moved");
        return;
      }
      const kb = Math.max(1, Math.round(bytes / 1024));
      const secs = Math.max(1, Math.round((bytes * 8) / 56000));
      const eta =
        secs >= 60
          ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")} min`
          : `${secs} s`;
      const got = nav
        ? ` · you got it in ${(nav.duration / 1000).toFixed(1)} s`
        : "";
      setLine(`this page: ${kb} KB · 56k would have needed ${eta}${got}`);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <p className="mt-8 font-mono text-xs text-zinc-600">
      <span aria-hidden className="text-zinc-500">
        ▸ CONNECTED 56.0 kbps ·{" "}
      </span>
      {line ?? "measuring…"}
    </p>
  );
}

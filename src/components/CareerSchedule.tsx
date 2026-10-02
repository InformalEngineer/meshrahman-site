// The career, drawn as a project schedule (01-PRD F9: the PM joke the
// audience will get). Plain server-rendered HTML: an ordered list a screen
// reader reads as "2010 to 2014, YouTube...", with the Gantt bars layered on
// top as decoration. Dates come from the portfolio page in the Ghost export.
// Employers are left out on purpose, project types only.
type Task = {
  wbs: string;
  label: string;
  start: number; // decimal year
  end: number | "now";
  track: "critical" | "side";
};

const TASKS: Task[] = [
  { wbs: "1.0", label: "YouTube channel, then content director at Machinima", start: 2010, end: 2014.6, track: "side" },
  { wbs: "1.1", label: "A year off, working for Samsung", start: 2014, end: 2015, track: "side" },
  { wbs: "2.0", label: "Engineering at McMaster, internship included", start: 2015, end: 2021.3, track: "critical" },
  { wbs: "3.0", label: "Field engineer, CIBC Square", start: 2018.4, end: 2019.2, track: "critical" },
  { wbs: "3.1", label: "Virtual design and construction: hospitals, nuclear, data centres", start: 2019.2, end: 2021.3, track: "critical" },
  { wbs: "3.2", label: "Project manager, TOR1 (then Canada's largest data centre)", start: 2021.3, end: 2023.1, track: "critical" },
  { wbs: "3.3", label: "Design package manager, Scarborough Subway Extension", start: 2023.1, end: 2025.8, track: "critical" },
  { wbs: "3.4", label: "Infrastructure program manager: electric bus depots and terminals", start: 2026.0, end: "now", track: "critical" },
  { wbs: "4.0", label: "Writing it down: the blog, then these two sites", start: 2019.8, end: "now", track: "side" },
  { wbs: "4.1", label: "Selling on Amazon (3 months, abandoned)", start: 2022.2, end: 2022.5, track: "side" },
];

const FIRST = 2010;
const LAST = 2027;
const span = LAST - FIRST;
const pct = (year: number) => ((year - FIRST) / span) * 100;

export default function CareerSchedule() {
  const now = new Date();
  const statusDate = now.getFullYear() + now.getMonth() / 12;
  const ticks = Array.from({ length: Math.floor(span / 2) + 1 }, (_, i) => FIRST + i * 2);
  const label = (y: number | "now") => (y === "now" ? "now" : String(Math.floor(y)));

  return (
    <figure className="mt-12 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 sm:p-5">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs text-zinc-400">
        <span className="uppercase tracking-widest">Project schedule · Mesh Rahman</span>
        <span>
          status date {now.toISOString().slice(0, 7)} · <span className="text-accent">■</span>{" "}
          critical path · <span className="text-subtle">■</span> side quests
        </span>
      </figcaption>

      <div className="relative mt-4">
        {/* year grid and the status-date line, decoration only */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block sm:left-[38%]">
          {ticks.map((y) => (
            <span
              key={y}
              className="absolute bottom-0 top-0 border-l border-dashed border-zinc-800"
              style={{ left: `${pct(y)}%` }}
            />
          ))}
          <span
            className="absolute bottom-0 top-0 border-l border-accent/70"
            style={{ left: `${pct(statusDate)}%` }}
          />
        </div>

        <ol className="relative space-y-2.5">
          {TASKS.map((t) => {
            const end = t.end === "now" ? statusDate : t.end;
            return (
              <li key={t.wbs} className="grid gap-1 sm:grid-cols-[38%_1fr] sm:items-center sm:gap-0">
                <p className="pr-3 text-xs leading-snug text-zinc-300">
                  <span className="mr-2 font-mono text-subtle">{t.wbs}</span>
                  {t.label}
                  <span className="sr-only">
                    , {label(t.start)} to {label(t.end)}
                  </span>
                </p>
                <div aria-hidden className="relative h-3 rounded-sm bg-zinc-800/40 sm:bg-transparent">
                  <span
                    className={`absolute top-0 h-3 rounded-sm ${
                      t.track === "critical"
                        ? "bg-accent"
                        : "border border-zinc-500 bg-zinc-700/60"
                    }`}
                    style={{
                      left: `${pct(t.start)}%`,
                      width: `max(${pct(end) - pct(t.start)}%, 4px)`,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ol>

        <div aria-hidden className="relative mt-3 h-4 font-mono text-[10px] text-subtle sm:ml-[38%]">
          {ticks.map((y) => (
            <span key={y} className="absolute -translate-x-1/2" style={{ left: `${pct(y)}%` }}>
              {String(y).slice(2).padStart(3, "’")}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}

"use client";

import { motion } from "framer-motion";
import type { ActivityPoint } from "@/lib/types";

type ActivityTileProps = {
  activity: ActivityPoint[];
};

const colors = [
  "bg-cyan-300/30",
  "bg-cyan-300/45",
  "bg-emerald-300/35",
  "bg-emerald-300/50",
  "bg-teal-300/65",
];

export function ActivityTile({ activity }: ActivityTileProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileHover={{ scale: 1.015, y: -2 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 ring-1 ring-inset ring-white/5 md:col-span-2 xl:col-span-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.1),_transparent_32%)] opacity-80" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
              Weekly activity
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Contribution rhythm
            </h2>
          </div>
          <p className="text-sm text-zinc-400">12 week pulse</p>
        </header>

        <section
          aria-label="Activity chart"
          className="grid items-end gap-2 rounded-[1.5rem] border border-white/[0.08] bg-black/20 p-4"
          style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
        >
          {activity.map((point, index) => (
            <div key={`${point.day}-${index}`} className="flex h-full flex-col items-center justify-end gap-2">
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.02 }}
                className={`block w-full rounded-full ${colors[point.value % colors.length]} origin-bottom`}
                style={{ height: `${point.value * 8}px` }}
              />
            </div>
          ))}
        </section>

        <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-3">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Best day</p>
            <p className="mt-1 font-semibold text-white">Sunday</p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-3">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Average</p>
            <p className="mt-1 font-semibold text-white">6.2 sessions</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
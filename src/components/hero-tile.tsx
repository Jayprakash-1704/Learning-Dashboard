"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import type { DashboardProfile } from "@/lib/types";

type HeroTileProps = {
  profile: DashboardProfile;
};

export function HeroTile({ profile }: HeroTileProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileHover={{ scale: 1.015, y: -2 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 ring-1 ring-inset ring-white/5 md:col-span-2 xl:col-span-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,232,249,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_35%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <header className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            Daily orbit live
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Flame className="h-3.5 w-3.5 text-orange-300" />
            {profile.streak} day streak
          </span>
        </header>

        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">
            Welcome back, {profile.name}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your learning dashboard is synced and ready.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
            You are currently in {profile.level}. Keep the momentum moving and
            the system will keep the rest beautifully in sync.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-4 sm:max-w-md">
          {[
            { label: "Streak", value: `${profile.streak} days` },
            { label: "Mode", value: profile.level },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl"
            >
              <dt className="text-xs uppercase tracking-[0.28em] text-zinc-400">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}
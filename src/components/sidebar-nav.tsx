"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Compass,
  LayoutDashboard,
  Menu,
  Settings2,
} from "lucide-react";

type SidebarNavProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const items = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "settings", label: "Settings", icon: Settings2 },
];

export function SidebarNav({ activeTab, setActiveTab }: SidebarNavProps) {
  return (
    <>
      <aside className="hidden w-72 shrink-0 border-r border-white/[0.05] bg-black/20 px-4 py-6 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-emerald-400/20 ring-1 ring-white/10">
            <Menu className="h-5 w-5 text-cyan-200" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">NovaLearn</p>
            <p className="text-xs text-zinc-400">Student orbit</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-2" aria-label="Primary">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 text-left text-sm text-zinc-300 transition-transform duration-200 hover:scale-[1.01] hover:text-white"
              >
                {activeTab === item.id ? (
                  <motion.span
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 rounded-2xl bg-white/[0.10] ring-1 ring-cyan-300/25"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="relative z-10 font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <section className="mt-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 ring-1 ring-white/10">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
            Focus mode
          </p>
          <p className="mt-3 text-sm text-zinc-300">
            Keep the active sprint compact and the flow uninterrupted.
          </p>
        </section>
      </aside>

      <nav
        aria-label="Mobile primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.05] bg-[#050816]/90 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-2xl lg:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-4 gap-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className="relative flex flex-col items-center gap-2 rounded-2xl px-2 py-3 text-xs text-zinc-400"
              >
                {activeTab === item.id ? (
                  <motion.span
                    layoutId="mobile-sidebar-active-pill"
                    className="absolute inset-0 rounded-2xl bg-white/[0.10] ring-1 ring-cyan-300/25"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10 grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] ring-1 ring-white/10">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
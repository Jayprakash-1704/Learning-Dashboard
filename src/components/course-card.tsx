"use client";

import { motion } from "framer-motion";
import { Brain, Code2, GraduationCap, LineChart, Sparkles } from "lucide-react";
import type { Course } from "@/lib/types";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileHover={{ scale: 1.015, y: -2 }}
      className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.045] p-5 ring-1 ring-inset ring-white/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.1),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.12),_transparent_28%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
            <CourseIcon name={course.icon_name} className="h-5 w-5 text-cyan-100" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            {course.progress}% complete
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{course.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {course.progress >= 80
              ? "This course is close to completion and ready for a final review."
              : "The next milestone is already queued in your study stack."}
          </p>
        </div>

        <div className="space-y-2">
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: course.progress / 100 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.18 }}
              style={{ transformOrigin: "0% 50%" }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300"
            />
          </div>
          <div className="flex justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
            <span>Progress</span>
            <span>Synced</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CourseIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "brain":
      return <Brain className={className} />;
    case "code-2":
      return <Code2 className={className} />;
    case "line-chart":
      return <LineChart className={className} />;
    case "graduation":
      return <GraduationCap className={className} />;
    case "sparkles":
    default:
      return <Sparkles className={className} />;
  }
}
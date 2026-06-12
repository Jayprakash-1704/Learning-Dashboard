"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ActivityTile } from "./activity-tile";
import { CourseCard } from "./course-card";
import { HeroTile } from "./hero-tile";
import { SidebarNav } from "./sidebar-nav";
import type { ActivityPoint, Course, DashboardProfile } from "@/lib/types";

type DashboardSceneProps = {
  profile: DashboardProfile;
  courses: Course[];
  activity: ActivityPoint[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export function DashboardScene({
  profile,
  courses,
  activity,
}: DashboardSceneProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(110,231,183,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_28%),linear-gradient(180deg,#050816_0%,#070b18_50%,#03060f_100%)] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">
        <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="relative flex-1 px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:py-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12"
          >
            <HeroTile profile={profile} />
            <ActivityTile activity={activity} />

            <section className="md:col-span-2 xl:col-span-12">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
                    Active Courses
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Learning momentum in motion
                  </h2>
                </div>
                <p className="hidden text-sm text-zinc-400 sm:block">
                  Synced from Supabase on the server.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
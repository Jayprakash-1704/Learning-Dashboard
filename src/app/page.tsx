import { Suspense } from "react";
import { DashboardScene } from "@/components/dashboard-scene";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { getDashboardData } from "@/lib/dashboard-data";

export default function Home() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
  const { courses, profile, activity } = await getDashboardData();

  return (
    <DashboardScene
      courses={courses}
      profile={profile}
      activity={activity}
    />
  );
}

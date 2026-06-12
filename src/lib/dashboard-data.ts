import { mockActivity, mockCourses, mockProfile } from "./mock-data";
import { createSupabaseServerClient } from "./supabase";
import type { ActivityPoint, Course, DashboardProfile } from "./types";

export type DashboardData = {
  profile: DashboardProfile;
  courses: Course[];
  activity: ActivityPoint[];
};

export async function getDashboardData(): Promise<DashboardData> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      profile: mockProfile,
      courses: mockCourses,
      activity: mockActivity,
    };
  }

  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load courses from Supabase: ${error.message}`);
  }

  return {
    profile: mockProfile,
    courses: (data ?? mockCourses) as Course[],
    activity: mockActivity,
  };
}
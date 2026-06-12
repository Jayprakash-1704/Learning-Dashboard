import type { ActivityPoint, Course, DashboardProfile } from "./types";

export const mockProfile: DashboardProfile = {
  name: "Maya",
  streak: 18,
  level: "Momentum Builder",
};

export const mockCourses: Course[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    title: "Advanced React Patterns",
    progress: 82,
    icon_name: "brain",
    created_at: "2026-06-01T08:30:00.000Z",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    title: "Design Systems for Interfaces",
    progress: 64,
    icon_name: "sparkles",
    created_at: "2026-06-02T08:30:00.000Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    title: "Data Structures in TypeScript",
    progress: 49,
    icon_name: "code-2",
    created_at: "2026-06-03T08:30:00.000Z",
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    title: "Product Analytics Foundations",
    progress: 91,
    icon_name: "line-chart",
    created_at: "2026-06-04T08:30:00.000Z",
  },
];

export const mockActivity: ActivityPoint[] = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 7 },
  { day: "Fri", value: 6 },
  { day: "Sat", value: 4 },
  { day: "Sun", value: 8 },
  { day: "Mon", value: 5 },
  { day: "Tue", value: 7 },
  { day: "Wed", value: 9 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 6 },
  { day: "Sat", value: 8 },
  { day: "Sun", value: 10 },
];
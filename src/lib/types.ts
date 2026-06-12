export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type DashboardProfile = {
  name: string;
  streak: number;
  level: string;
};

export type ActivityPoint = {
  day: string;
  value: number;
};
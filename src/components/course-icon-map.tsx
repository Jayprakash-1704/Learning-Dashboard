import {
  Brain,
  Code2,
  GraduationCap,
  LineChart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  "code-2": Code2,
  sparkles: Sparkles,
  "line-chart": LineChart,
  graduation: GraduationCap,
};

export function getCourseIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
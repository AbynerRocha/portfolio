import { getTechBadgeColor } from "#/utils/projects.ts";
import { twMerge } from "tailwind-merge";

export function TechBadge({ children }: { children: string }) {
  return <span
    className={twMerge("px-4 py-1 text-xs rounded-md m-1 h-fit text-center", getTechBadgeColor(children))}
  >{children}</span>
}
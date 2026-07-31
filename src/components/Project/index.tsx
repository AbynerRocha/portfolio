import type { Project } from "#/utils/projects.ts";
import { ProjectCard } from "./Card";
import { HighlightProject } from "./Highlight";

export type ProjectCardProps = {
  data: Project
}

export { HighlightProject, ProjectCard }

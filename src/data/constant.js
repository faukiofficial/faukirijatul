import projects from "./dataProject";

export const allTools = Array.from(
  new Set(projects.flatMap((project) => project.tool))
);

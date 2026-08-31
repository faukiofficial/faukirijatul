import { projects } from '@/data/dataProject';

/**
 * Returns a unique list of all tools used across projects.
 */
export function getAllTools(): string[] {
  return Array.from(new Set(projects.flatMap((project) => project.tool)));
}

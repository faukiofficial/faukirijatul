import { Link } from 'react-router-dom';
import type { ProjectItem } from '@/types/project';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project._id}`}
      className="h-full w-full rounded-md border bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-gray-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-t-md border-b object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <h4 className="text-lg font-semibold">{project.title}</h4>

        {project.mainStack.length > 0 && (
          <div className="mt-2">
            <span className="font-semibold">Main Stack:</span>
            <p className="text-sm text-gray-700">
              {project.mainStack.join(' | ')}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

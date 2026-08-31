import { Link } from 'react-router-dom';
import { projects } from '@/data/dataProject';
import { MAX_PREVIEW_PROJECTS } from '@/constants/project';
import { ProjectCard } from '@/components/ProjectCard';

export function Project() {
  const previewProjects = projects.slice(0, MAX_PREVIEW_PROJECTS);

  return (
    <section id="project" className="bg-gray-300 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-2 text-center text-4xl font-semibold uppercase text-gray-900">
          Projects ({projects.length})
        </h3>

        <p className="mb-8 text-center text-gray-700">
          * Not all projects I&apos;ve worked on are displayed here.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((item) => (
            <ProjectCard key={item._id} project={item} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/all-projects"
            className="rounded-md bg-gray-900 px-4 py-2 font-semibold text-white transition-colors hover:text-blue-400"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

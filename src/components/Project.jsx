// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../data/dataProject";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-8 uppercase">
          Projects ({projects.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((item) => (
            <ProjectCard key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/all-projects"
            className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-md hover:text-blue-400"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;

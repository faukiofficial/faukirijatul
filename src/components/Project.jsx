// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../data/dataProject";

const Project = () => {
  return (
    <section id="project" className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-2 uppercase">
          Projects ({projects.length})
        </h3>
        <p className="text-center text-gray-700 mb-8">
          * Not all projects I{"'"}ve worked on are displayed here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((item) => (
            <Link
              to={`/project/${item._id}`}
              key={item._id}
              className="border rounded-md hover:shadow-xl hover:shadow-gray-500 hover:scale-120 transition duration-500 ease-in-out transform hover:rotate-5 w-full h-full bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-t-md border-b"
              />
              <div className="p-3">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <div className="mt-2">
                  <b className="font-semibold">Main Stack :</b>
                  <div>{item.mainStack?.join(" | ")}</div>
                </div>
              </div>
            </Link>
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

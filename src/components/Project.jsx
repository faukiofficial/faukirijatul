// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../data/dataProject";

const Project = () => { 


  return (
    <section id="project" className="py-8 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-8 uppercase">Projects ({projects.length})</h3>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((item, index) => (
            <div className="item" key={index}>
              <Link to={`/project/${item._id}`} className="block border rounded-md overflow-hidden hover:shadow-2xl relative group w-full h-full">
                <img className="w-full h-full" src={item.image} alt={item.title} />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                  <h3 className="text-white text-lg opacity-0 group-hover:opacity-100">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/all-projects" className="py-2 px-4 bg-gray-900 text-white font-semibold rounded-md hover:text-blue-400">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Project;


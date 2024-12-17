import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import projects from "../data/dataProject";

const AllProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section
        id="all-projects"
        className="pt-10 pb-6 bg-[#dedede] min-h-[86vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-semibold text-center text-gray-900 mb-8">
            All Projects
          </h3>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-2xl font-bold text-center text-gray-900 mb-8">
              No projects found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((item, index) => (
                <div className="item" key={index}>
                  <Link
                    to={`/project/${item._id}`}
                    className="block border rounded-md overflow-hidden shadow-2xl relative group w-full h-full"
                  >
                    <img
                      className="w-full h-full"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-30 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                      <h3 className="text-white text-lg opacity-100 shadow-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AllProjectsPage;

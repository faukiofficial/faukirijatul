import { useState } from "react";
import { Link } from "react-router-dom";
import projectList from "../data/DataProject";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AllProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(projectList.length / projectsPerPage);

  // Get current projects
  const currentProjects = projectList.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <section id="all-projects" className="pt-10 pb-6 bg-[#dedede] min-h-[86vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProjects.map((item) => (
              <div className="item" key={item.id}>
                <Link
                  to={`/project/${item.id}`}
                  className="block border rounded-md overflow-hidden hover:shadow-2xl relative group"
                >
                  <img className="w-full" src={item.image} alt={item.title} />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                    <h3 className="text-white text-lg opacity-0 group-hover:opacity-100">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`py-2 px-4 mx-1 ${
                  currentPage === index + 1
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                } font-bold rounded-md hover:text-blue-400`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AllProjectsPage;

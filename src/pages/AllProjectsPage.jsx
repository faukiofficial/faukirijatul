import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const AllProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const projectsPerPage = 6;

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://faukirijatul-server.vercel.app/api/projects");
        setProjects(response.data);
        setIsloading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current projects
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  return (
    <>
      <Navbar />
      <section
        id="all-projects"
        className="pt-10 pb-6 bg-[#dedede] min-h-[86vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
            All Projects
          </h3>

          {/* Search Input */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {isLoading && (
            <p className="text-center text-slate-500 text-xl font-bold">
              Loading . . .
            </p>
          )}

          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProjects.map((item) => (
                <div className="item" key={item._id}>
                  <Link
                    to={`/project/${item._id}`}
                    className="block border rounded-md overflow-hidden shadow-2xl relative group w-full h-full"
                  >
                    <img
                      className="w-full h-full"
                      src={`https://faukirijatul-server.onrender.com${item.image}`}
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
          ) : (
            !isLoading && (
              <p className="text-center text-red-500 text-xl font-bold">
                No projects found.
              </p>
            )
          )}

          {/* Pagination */}
          {totalPages > 1 && (
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
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AllProjectsPage;

import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import Select from "react-select";
import projects from "../data/dataProject";
import { AppContext } from "../context/AppContext";

const AllProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {selectedTool, setSelectedTool} = useContext(AppContext);

  const allTools = Array.from(
    new Set(projects.flatMap((project) => project.tool))
  );

  const toolOptions = allTools.map((tool) => ({
    value: tool,
    label: tool,
  })).sort((a, b) => a.label.localeCompare(b.label));

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTool = selectedTool
      ? project.tool.includes(selectedTool)
      : true;
    return matchesSearch && matchesTool;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToolChange = (selectedOption) => {
    setSelectedTool(selectedOption ? selectedOption.value : null);
  };

  return (
    <>
      <Navbar />
      <section
        id="all-projects"
        className="pt-28 pb-6 bg-[#dedede] min-h-[92vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-semibold text-center text-gray-900 mb-8">
            All Projects
          </h3>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 px-4 py-2 md:py-1 h-10 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-300"
            />

            <Select
              options={toolOptions}
              onChange={handleToolChange}
              value={toolOptions.find((option) => option.value === selectedTool)}
              isClearable
              placeholder="Filter by tool..."
              className="w-full md:w-60"
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

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Select from "react-select";
import projects from "../data/dataProject";
// import { AppContext } from "../context/AppContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { allTools } from "../data/constant";

const AllProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const { selectedTool, setSelectedTool } = useContext(AppContext);
  const [selectedTool, setSelectedTool] = useState(null);

  const navigate = useNavigate();

  const { title } = useParams();

  useEffect(() => {
    if (title) {
      setSelectedTool(title);
    } else {
      setSelectedTool(null);
    }
  }, [title]);

  const toolOptions = allTools
    .map((tool) => ({
      value: tool,
      label: tool,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

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
    const toolValue = selectedOption ? selectedOption.value : "";
    navigate(`/all-projects/${toolValue}`, { replace: true });
  };

  return (
    <>
      <Navbar />
      <section
        id="all-projects"
        className="pt-28 pb-16 bg-[#dedede] min-h-[calc(100vh-60px)]"
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
              value={toolOptions.find(
                (option) => option.value === selectedTool
              )}
              isClearable
              placeholder="Filter by stack..."
              className="w-full md:w-60"
            />
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-2xl font-bold text-center text-gray-900 mb-8">
              No projects found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((item) => (
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
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AllProjectsPage;

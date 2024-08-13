// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import projectList from "../data/DataProject";
import axios from "axios";

const Project = () => { 

  const [projectListApi, setProjectListApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // Fungsi untuk fetch data
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://faukirijatul-server.onrender.com/api/projects');
        setProjectListApi(response.data);
      } catch (err) {
        console.error(err.message);
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    };

    fetchProjects();
  }, []);

  const displayedProjects = projectListApi.slice(0, 3);

  return (
    <section id="project" className="py-8 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-8 uppercase">Projects</h3>
        {isError && (
          <p className="text-center text-xl text-red-600 my-20 font-bold">Error fetching API</p>
        )}
        {isLoading ? (
          <p className="text-center text-xl text-slate-600 my-20 font-bold">Loading to get the data. . .</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((item) => (
            <div className="item" key={item._id}>
              <a href={`/project/${item._id}`} className="block border rounded-md overflow-hidden hover:shadow-2xl relative group w-full h-full">
                <img className="w-full h-full" src={`https://faukirijatul-server.onrender.com${item.image}`} alt={item.title} />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-opacity duration-300">
                  <h3 className="text-white text-lg opacity-0 group-hover:opacity-100">{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
        )}
        <div className="flex justify-center mt-8">
          <a href="/all-projects" className="py-2 px-4 bg-gray-900 text-white font-bold rounded-md hover:text-blue-400">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Project;


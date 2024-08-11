import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlayCircle,
  FaGithub,
} from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectListApi, setProjectListApi] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Fungsi untuk fetch data
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://faukirijatul-server.onrender.com/api/projects");
        setProjectListApi(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProjects();
  }, []);

  const currentIndex = projectListApi.findIndex((item) => item._id === id);
  const data = projectListApi[currentIndex];

  if (projectListApi.length === 0) {
    return <p>Loading...</p>;
  }

  if (currentIndex === -1) {
    return <Navigate to="/page-not-found" />;
  }

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      navigate(`/project/${projectListApi[currentIndex - 1]._id}`);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < projectListApi.length - 1) {
      navigate(`/project/${projectListApi[currentIndex + 1]._id}`);
    }
  };

  const handleViewDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleViewGithubClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  const handleEditClick = () => {
    navigate(`/editproject/${id}`); // Arahkan ke halaman edit dengan ID yang sesuai
  };

  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`https://faukirijatul-server.onrender.com/api/projects/${id}`);
        navigate("/all-projects"); // Arahkan ke halaman daftar proyek setelah penghapusan
      } catch (err) {
        console.error("Failed to delete the project:", err.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section
        id="detail-portfolio"
        className="py-8 bg-gray-100 min-h-[86vh] relative"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-900 mb-8">
            {data.title}
          </h1>
          <div className="relative-container relative flex items-center justify-center">
            <button
              onClick={handlePrevClick}
              className={`bg-slate-200 absolute left-[10px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 z-30 ${
                currentIndex === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <img
              src={`https://faukirijatul-server.onrender.com${data.image}`}
              alt={data.title}
              className={`w-full rounded-lg relative`}
            />
            <button
              onClick={handleNextClick}
              className={`bg-slate-200 absolute right-[10px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 ${
                currentIndex === projectListApi.length - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === projectListApi.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="flex gap-1 flex-row justify-center items-center mt-5">
            <button
              onClick={() => handleViewDemoClick(data.linkDemo)}
              className="bg-blue-400 text-white rounded-full p-2 md:w-[15rem] text-base md:text-2xl hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center shadow-lg mr-4"
            >
              <FaPlayCircle className="mr-2" />
              View Demo
            </button>
            <button
              onClick={() => handleViewGithubClick(data.linkGithub)}
              className="bg-gray-900 text-white rounded-full p-2 md:w-[15rem] text-base md:text-2xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center shadow-lg"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </button>
          </div>
          <p className="skill text-center text-xl text-gray-800 md:mt-[35px] mt-[40px]">
            <b>Languanges & tools:</b>
            <br />
            {data.tool.join(", ")}
          </p>

          {/* Tombol Edit Page, hanya muncul jika isAuthenticated true */}
          {isAuthenticated && (
            <div className="text-center mt-8 flex justify-center gap-4">
              <button
                onClick={handleEditClick}
                className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition-colors duration-200"
              >
                Edit Page
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default DetailProject;

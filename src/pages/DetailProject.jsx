import "../styles/DetailProject.css"
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import projectList from "../data/DataProject";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { FaArrowLeft, FaArrowRight, FaPlayCircle, FaGithub } from "react-icons/fa";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = projectList.findIndex((item) => item.id === id);
  const data = projectList[currentIndex];

  const [transitionClass, setTransitionClass] = useState('');

  if (data === undefined) {
    return <Navigate to="/page-not-found" />;
  }

  useEffect(() => {
    // Menambahkan kelas untuk animasi masuk
    setTransitionClass('slide-in');
  }, [id]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      // Menambahkan kelas untuk animasi keluar sebelum navigasi
      setTransitionClass('slide-out-left');
      setTimeout(() => {
        navigate(`/project/${projectList[currentIndex - 1].id}`);
      }, 300); // Durasi animasi
    }
  };

  const handleNextClick = () => {
    if (currentIndex < projectList.length - 1) {
      // Menambahkan kelas untuk animasi keluar sebelum navigasi
      setTransitionClass('slide-out-right');
      setTimeout(() => {
        navigate(`/project/${projectList[currentIndex + 1].id}`);
      }, 300); // Durasi animasi
    }
  };

  const handleViewDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleViewGithubClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <>
      <Navbar />
      <section id="detail-portfolio" className="py-8 bg-gray-100 min-h-[86vh] relative">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-900 mb-8">
            {data.title}
          </h1>
          <div className="relative-container relative flex items-center justify-center">
            <button
              onClick={handlePrevClick}
              className={`bg-slate-200 absolute left-[10px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 z-30 ${
                currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <img
              src={data.image}
              alt={data.title}
              className={`w-full h-[32rem] rounded-lg mb-4 relative ${transitionClass}`}
            />
            
            <button
              onClick={handleNextClick}
              className={`bg-slate-200 absolute right-[10px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 ${
                currentIndex === projectList.length - 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === projectList.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="flex gap-1 flex-row justify-center items-center">
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
            <b>Languanges & tools:</b><br/>{data.tool}
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default DetailProject;

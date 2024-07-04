import { useParams, Navigate, useNavigate } from "react-router-dom";
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

  if (data === undefined) {
    return <Navigate to="/page-not-found" />;
  }

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      navigate(`/project/${projectList[currentIndex - 1].id}`);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < projectList.length - 1) {
      navigate(`/project/${projectList[currentIndex + 1].id}`);
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
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            {data.title}
          </h1>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrevClick}
              className={`absolute left-[-60px] text-4xl p-3 rounded-full transition-transform duration-200 ${
                currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <img
              src={data.image}
              alt={data.title}
              className="w-full rounded-lg mb-4 relative"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <button
                onClick={() => handleViewDemoClick(data.linkDemo)}
                className="bg-blue-400 text-white rounded-full py-2 w-[15rem] text-2xl hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center shadow-lg mr-4"
              >
                <FaPlayCircle className="mr-2" />
                View Demo
              </button>
              <button
                onClick={() => handleViewGithubClick(data.linkGithub)}
                className="bg-gray-900 text-white rounded-full py-2 w-[15rem] text-2xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center shadow-lg"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </button>
            </div>
            <button
              onClick={handleNextClick}
              className={`absolute right-[-60px] text-4xl p-3 rounded-full transition-transform duration-200 ${
                currentIndex === projectList.length - 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-400 hover:text-gray-900 hover:scale-110"
              }`}
              disabled={currentIndex === projectList.length - 1}
            >
              <FaArrowRight />
            </button>
          </div>
          <p className="skill text-center text-xl text-gray-800 mt-10">
            <b>Tools:</b> {data.tool}
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default DetailProject;

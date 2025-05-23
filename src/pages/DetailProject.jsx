import { useParams, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlayCircle,
  FaGithub,
} from "react-icons/fa";
import projects from "../data/dataProject";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((item) => item._id === id);
  const data = projects[currentIndex];

  if (projects.length === 0) {
    return (
      <>
        <Navbar />
      </>
    );
  }

  if (currentIndex === -1) {
    return <Navigate to="/page-not-found" />;
  }

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      navigate(`/project/${projects[currentIndex - 1]._id}`, { replace: true });
    }
  };

  const handleNextClick = () => {
    if (currentIndex < projects.length - 1) {
      navigate(`/project/${projects[currentIndex + 1]._id}`, { replace: true });
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
      <section className="pt-28  pb-10 bg-[#dedede] min-h-[94vh] relative">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="md:text-4xl text-2xl font-semibold text-center text-gray-900 flex flex-col items-center">
            {data.title}
            <span className="text-base font-normal mt-2">
              ( {projects.indexOf(data) + 1} of {projects.length} projects )
            </span>
          </h1>
          <div className="relative-container relative flex items-center justify-center mt-4">
            <button
              onClick={handlePrevClick}
              className={`bg-slate-200 lg:bg-slate-800 absolute left-[10px] lg:-left-[80px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 z-30 ${
                currentIndex === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400 hover:text-gray-900 lg:hover:text-blue-300 hover:scale-110"
              }`}
              disabled={projects.indexOf(data) === 0}
            >
              <FaArrowLeft />
            </button>
            <img
              src={data.image}
              alt={data.title}
              className="w-full rounded-lg relative"
            />
            <button
              onClick={handleNextClick}
              className={`bg-slate-200 lg:bg-slate-800 absolute right-[10px] lg:-right-[80px] md:text-4xl text-2xl p-3 rounded-full transition-transform duration-200 ${
                projects.indexOf(data) === projects.length - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400 hover:text-gray-900 lg:hover:text-blue-300 hover:scale-110"
              }`}
              disabled={currentIndex === projects.length}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="flex gap-1 flex-row justify-center items-center mt-5">
            {data.linkDemo && (
              <button
                onClick={() => handleViewDemoClick(data.linkDemo)}
                className="bg-blue-400 text-white rounded-full p-2 md:w-[15rem] text-base md:text-2xl hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center shadow-lg mr-4"
              >
                <FaPlayCircle className="mr-2" />
                View Demo
              </button>
            )}
            {data.linkGithub && (
              <button
                onClick={() => handleViewGithubClick(data.linkGithub)}
                className="bg-gray-900 text-white rounded-full p-2 md:w-[15rem] text-base md:text-2xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center shadow-lg"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </button>
            )}
          </div>

          {data.description && (
            <p className="text-gray-900 text-base lg:text-lg md:mt-[35px] mt-[40px] mb-4 text-center">
              {data.description}
            </p>
          )}
          <div
            className={`text-center text-xl text-gray-800 ${
              data.description ? "" : " md:mt-[35px] mt-[40px]"
            }`}
          >
            <b className="font-semibold">Languanges & tools:</b>
            <div className="mt-2">{data.tool.join(" | ")}</div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default DetailProject;

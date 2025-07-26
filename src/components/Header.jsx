import profilePicture from "../assets/profile3.png";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-gray-800 text-white pb-20 pt-32 600px:pb-[200px] 600px:pt-[230px] bg-[radial-gradient(rgba(229,231,235,0.05)_5%,transparent_20%)] bg-[size:10px_10px] lg:bg-[size:20px_20px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center space-y-8">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-[13rem] h-[13rem] object-cover rounded-full mb-8 mx-auto"
          />
          <h1 className="text-4xl 800px:text-5xl font-bold uppercase">
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-clip-text text-transparent">
              Fauki
            </span>{" "}
            Rijatul H
          </h1>
          <p className="text-lg 800px:text-xl mt-2">
            Dedicated{" "}
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]  bg-clip-text text-transparent font-bold">
              software engineer
            </span>{" "}
            committed to lifelong learning and continuous self-improvement.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.linkedin.com/in/faukirijatulh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <SlSocialLinkedin className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a
              href="https://github.com/faukiofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <FaGithub className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a
              href="https://github.com/faukirijatul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <FaGithub className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a
              href="https://www.instagram.com/faukirijatul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <FaInstagram className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a
              href="https://wa.me/6287845352397"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <FaWhatsapp className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-5">
            <div className="relative group">
              <div className="absolute transitiona-all duration-1000 opacity-40 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

              <a
                href="https://docs.google.com/document/d/1LT2cfEXHMclTYSuzDeL12Ouym92rz_zX/edit?usp=sharing&ouid=107530896604415709600&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 min-w-20 800px:min-w-40 text-base font-semibold transition-all duration-200 bg-white text-gray-900 rounded-md hover:text-blue-400"
              >
                Resume
              </a>
            </div>
            <div className="relative group block md:hidden">
              <div className="absolute transitiona-all duration-1000 opacity-40 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

              <Link
                to="/experiences"
                className="inline-flex relative items-center justify-center w-full sm:w-auto px-5 py-3 min-w-20 800px:min-w-40 text-base font-semibold transition-all duration-200 bg-white text-gray-900 rounded-md hover:text-blue-400"
              >
                Experiences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

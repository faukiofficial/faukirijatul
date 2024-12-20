import profilePicture from "../assets/profile.jpg";
import { FaInstagram, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="bg-gray-800 bg-center bg-cover relative font-sans text-white text-shadow-lg py-20 600px:py-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="text-center">
          <img src={profilePicture} alt="Profile" className="w-[10rem] h-[10rem] rounded-full mb-8 mx-auto" />
          <h1 className="text-2xl 800px:text-4xl font-bold uppercase">Fauki Rijatul H</h1>
          <p className="text-lg 800px:text-xl mt-2">
          Dedicated software engineer committed to lifelong learning and continuous self-improvement.</p>
          <div className="mt-8 flex justify-center">
            <a href="https://www.linkedin.com/in/fauki-rijatul-h-9a93ab251/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <SlSocialLinkedin className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a href="https://github.com/faukiofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <FaGithub className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a href="https://www.instagram.com/faukirijatul/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <FaInstagram className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a href="https://facebook.com/faukiofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <FiFacebook className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a href="https://x.com/faukiofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <FaTwitter className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
            <a href="https://wa.me/6287845352397" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-4">
              <FaWhatsapp className="w-6 h-6 800px:w-8 800px:h-8" />
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-5">
            <button className="py-1 px-2 min-w-20 800px:min-w-40 text-base 800px:text-xl bg-white text-gray-900 rounded-md hover:text-blue-400"><a href="#">Resume</a></button>
            <Link to="/experiences" className="py-1 px-2 min-w-20 800px:min-w-40 text-base 800px:text-xl bg-white text-gray-900 rounded-md hover:text-blue-400 block md:hidden">Experiences</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

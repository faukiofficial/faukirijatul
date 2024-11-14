import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from "../assets/logofauki.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg"
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-semibold text-white flex items-center"
            >
              <img src={logo} alt="faukirijatul" className="w-5 800px:w-7 mr-2" />{" "}
              <span className="text-lg 800px:text-2xl">FaukiRijatul</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/all-projects"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl"
              >
                Experiences
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? (
                <RiCloseFill className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute bg-gray-900 w-full`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/all-projects"
            className="block px-3 py-2 rounded-md text-base hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/experience"
            className="block px-3 py-2 rounded-md text-base hover:text-blue-400 transition-colors duration-200"
          >
            Experiences
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

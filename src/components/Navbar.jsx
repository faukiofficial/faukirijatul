import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logofauki.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProjectDropdown = () => {
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsProjectDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      closeDropdowns();
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
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <img src={logo} alt="faukirijatul" className="w-7 mr-2" /> <span>FaukiRijatul</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div
                className="relative group"
                onMouseEnter={toggleProjectDropdown}
                onMouseLeave={toggleProjectDropdown}
              >
                <HashLink
                  to="/#project"
                  className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Projects
                </HashLink>
                {isProjectDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-[9rem] shadow-lg overflow-hidden">
                    <Link
                      to="/all-projects"
                      className="block px-4 py-2 bg-gray-900 hover:text-blue-400 transition-colors duration-200"
                      onClick={closeDropdowns}
                    >
                      All Projects
                    </Link>
                  </div>
                )}
              </div>
              <HashLink
                to="/#about"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
              >
                About
              </HashLink>
              <Link
                to="/experience"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
              >
                Experiences
              </Link>
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

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden absolute bg-gray-900 w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <HashLink
            to="/#project"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </HashLink>
          <HashLink
            to="/#about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            About
          </HashLink>
          <Link
            to="/experience"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Experiences
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

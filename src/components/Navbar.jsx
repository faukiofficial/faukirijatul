import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import logo from "../assets/logofauki.svg";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?");
    
    if (confirmLogout) {
      try {
        await axios.post("https://faukirijatul-server.onrender.com/api/auth/logout");
        localStorage.removeItem("authToken");
        console.log("Logout successful, redirecting...");
        setIsAuthenticated(false);
        navigate('/')
      } catch (error) {
        console.error("Error logging out:", error);
      }
    }
  };

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
              className="text-2xl font-bold text-white flex items-center"
            >
              <img src={logo} alt="faukirijatul" className="w-7 mr-2" />{" "}
              <span>FaukiRijatul</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/all-projects"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
              >
                Experiences
              </a>
              {isAuthenticated ? (
                <a
                href="/addproject"
                className="hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-xl font-medium"
              >
                Add Project
              </a>
              ) : (
                <>
                </>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="py-1 w-20 text-xl text-white bg-red-600 text-gray-900 font-bold rounded-md hover:text-blue-400 text-center"
                >
                  Logout
                </button>
              ) : (
                <a
                  href="/login"
                  className="py-1 w-20 text-xl bg-white text-gray-900 font-bold rounded-md hover:text-blue-400 text-center"
                >
                  Login
                </a>
              )}
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
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/experience"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Experiences
          </a>
          {isAuthenticated ? (
            <a
            href="/addproject"
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Add Project
          </a>
          ) : (
            <>
            </>
          )}
          {isAuthenticated ? (
            <a
              onClick={handleLogout}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-600 transition-colors duration-200"
            >
              Logout
            </a>
          ) : (
            <a
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import logo from '../assets/logofauki.svg';
import { useClickOutside } from '../hooks/useClickOutside';
import { NAV_LINKS } from '@/constants/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useClickOutside(menuRef, closeMenu, isMenuOpen);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 z-50 w-full bg-gray-900/90 text-white shadow-lg backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center text-2xl font-semibold text-white"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="Fauki Rijatul"
                className="mr-2 h-5 w-5 sm:h-7 sm:w-7"
              />
              <span className="text-lg sm:text-2xl">FaukiRijatul</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-3 py-2 text-xl transition-colors duration-200 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="rounded-md px-3 py-2 text-xl transition-colors duration-200 hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <RiCloseFill className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute w-full bg-gray-900 md:hidden`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-base transition-colors duration-200 hover:text-blue-400"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="block rounded-md px-3 py-2 text-base transition-colors duration-200 hover:text-blue-400"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}

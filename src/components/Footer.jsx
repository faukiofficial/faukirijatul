import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center h-16 flex items-center justify-center">
      <span>&copy; {new Date().getFullYear()} -</span>
      <Link
        className="hover:underline ml-1"
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Fauki Rijatul H
      </Link>
      <span>. All rights reserved</span>
    </footer>
  );
};

export default Footer;

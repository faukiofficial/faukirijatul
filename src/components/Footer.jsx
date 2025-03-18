import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center h-16 flex items-center justify-center">
      <span>&copy; {new Date().getFullYear()} -</span>
      <Link className="hover:underline ml-1" to="/">
        Fauki Rijatul H
      </Link>
      <span>. All rights reserved</span>
    </footer>
  );
};

export default Footer;

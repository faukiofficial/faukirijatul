import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center h-16 flex items-center justify-center">
        <Link className="hover:underline" to="/">&copy; Fauki Rijatul H  </Link> 
    </footer>
  )
};

export default Footer;

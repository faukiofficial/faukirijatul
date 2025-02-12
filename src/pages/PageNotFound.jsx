import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RiErrorWarningLine } from "react-icons/ri";

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[94vh] flex flex-col justify-center items-center gap-4">
        <RiErrorWarningLine className="text-[6rem] text-red-500 mx-auto" />
        <h3 className="text-2xl font-semibold text-gray-900">
          Oopps
        </h3>
        <p className="">Page Not Found</p>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;

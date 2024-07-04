import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNode,
  FaVuejs,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { FaPhp, FaLaravel, FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative text-lg bg-gray-200 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-8 uppercase">About</h3>
        <p className="text-center text-gray-900 text-2xl">
          Experienced in collaborating on diverse web projects with teams during academic assignments, internships, and ongoing learning. Deeply passionate about web development, specializing in JavaScript and PHP frameworks, with a strong desire to innovate and create impactful digital solutions. Committed to utilizing expertise to deliver exceptional user experiences and drive business growth. Eager to contribute to forward-thinking teams and projects that have pushed the boundaries of web technology and enhanced overall digital presence and functionality.
        </p>
        <h4 className="text-center text-3xl font-bold mt-8 mb-2 uppercase text-gray-900">Programming Languages & Tools</h4>
        <div className="flex justify-center flex-wrap">
          <FaHtml5 className="inline-block text-[#E34F26] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaCss3Alt className="inline-block text-[#1572B6] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <DiJavascript className="inline-block text-[#F7DF1E] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaPhp className="inline-block text-[#777BB4] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaBootstrap className="inline-block text-[#7952B3] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <RiTailwindCssFill className="inline-block text-[#38B2AC] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaReact className="inline-block text-[#61DAFB] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaVuejs className="inline-block text-[#4FC08D] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaLaravel className="inline-block text-[#FF2D20] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaNode className="inline-block text-[#339933] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <SiExpress className="inline-block text-[#000000] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <SiMysql className="inline-block text-[#4479A1] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <SiMongodb className="inline-block text-[#47A248] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
          <FaGithub className="inline-block text-[#181717] w-12 h-auto m-3 cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default About;

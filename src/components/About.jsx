import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript, DiRedis } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiCloudinary,
  SiVercel,
} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative text-lg bg-gray-200 text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-8 uppercase">
          About
        </h3>
        <p className="text-center text-gray-900 text-lg 800px:text-2xl">
          Experienced in collaborating on various web projects as part of
          academic assignments and personal learning. Passionate about web
          development, with a focus on JavaScript frameworks and a drive to
          create impactful digital solutions. Dedicated to using skills to
          deliver exceptional user experiences and support business growth.
          Eager to contribute to innovative teams and projects that push the
          boundaries of web technology and enhance digital presence and
          functionality.{" "}
        </p>
        <h4 className="text-center text-3xl font-semibold mt-8 mb-2 uppercase text-gray-900">
          Programming Languages, Frameworks & Tools
        </h4>
        <div className="flex justify-center flex-wrap">
          <FaHtml5
            className="inline-block text-[#E34F26] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="HTML"
          />
          <FaCss3Alt
            className="inline-block text-[#1572B6] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="CSS"
          />
          <DiJavascript
            className="inline-block text-[#F7DF1E] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="JavaScript"
          />
          <SiTypescript
            className="inline-block text-[#007ACC] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="TypeScript"
          />
          <FaBootstrap
            className="inline-block text-[#7952B3] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Bootstrap"
          />
          <RiTailwindCssFill
            className="inline-block text-[#38B2AC] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Tailwind CSS"
          />
          <FaReact
            className="inline-block text-[#61DAFB] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="React"
          />
          <SiRedux
            className="inline-block text-[#764ABC] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Redux"
          />
          <FaNode
            className="inline-block text-[#339933] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Node.js"
          />
          <SiExpress
            className="inline-block text-[#000000] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Express.js"
          />
          <SiMysql
            className="inline-block text-[#4479A1] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="MySQL"
          />
          <SiMongodb
            className="inline-block text-[#47A248] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="MongoDB"
          />
          <DiRedis
            className="inline-block text-[#DC382D] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Redis"
          />
          <SiCloudinary
            className="inline-block text-[#3448C5] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Cloudinary"
          />
          <FaGithub
            className="inline-block text-[#181717] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="GitHub"
          />
          <SiVercel 
            className="inline-block text-[#000000] w-12 h-auto m-3 cursor-pointer hover:text-blue-400"
            title="Vercel"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

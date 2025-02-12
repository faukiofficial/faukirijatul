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

const skills = [
  { icon: FaHtml5, color: "#E34F26", name: "HTML" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
  { icon: DiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiTypescript, color: "#007ACC", name: "TypeScript" },
  { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
  { icon: RiTailwindCssFill, color: "#38B2AC", name: "Tailwind CSS" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiRedux, color: "#764ABC", name: "Redux" },
  { icon: FaNode, color: "#339933", name: "Node.js" },
  { icon: SiExpress, color: "#000000", name: "Express.js" },
  { icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: DiRedis, color: "#DC382D", name: "Redis" },
  { icon: SiCloudinary, color: "#3448C5", name: "Cloudinary" },
  { icon: FaGithub, color: "#181717", name: "GitHub" },
  { icon: SiVercel, color: "#000000", name: "Vercel" },
];

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
          Gained experience in programming through academic projects and
          hands-on web development. Worked on several full-stack projects,
          building applications with Node.js, React, and Next.js. Passionate
          about full-stack development, with a focus on creating impactful
          digital solutions that enhance user experience and drive business
          growth. Excited to contribute to innovative teams and projects that
          push the boundaries of web technology, particularly in full-stack
          development.
        </p>
        <h4 className="text-center text-3xl font-semibold mt-8 mb-5 uppercase text-gray-900">
          Programming Languages, Frameworks & Tools
        </h4>
        <div className="flex justify-center flex-wrap gap-2">
          {skills.map(({ icon: Icon, color, name }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-1 min-w-[100px] border hover:border-blue-400 hover:bg-gray-100 rounded-md p-2 cursor-pointer"
            >
              <Icon
                className="w-12 h-auto hover:text-blue-400"
                style={{ color }}
              />
              <p className="text-center text-gray-900 text-sm 800px:text-base">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

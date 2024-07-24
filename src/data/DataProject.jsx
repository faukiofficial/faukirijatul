import {
  FaCss3Alt,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { FaSass } from "react-icons/fa6";

import project1Image from "../assets/faukirijatul.svg";
import project2Image from "../assets/jagocatat.svg";
import project3Image from "../assets/simple_cruds_app.svg";
import project4Image from "../assets/Project4.svg";
import project5Image from "../assets/Project5.svg";
import project6Image from "../assets/Project6.svg";
import project7Image from "../assets/Project7.svg";
import project8Image from "../assets/Project8.svg";
import project9Image from "../assets/Project9.svg";
import project10Image from "../assets/Project10.svg";
import project11Image from "../assets/Project11.svg";
import project12Image from "../assets/Project12.svg";

const projectList = [
    {
    id: "1",
    title: "NoteApp: JagoCatat",
    image: project2Image,
    linkDemo: "https://jagocatat.onrender.com/dashboard",
    linkGithub: "https://github.com/faukiofficial/JagoCatat.git",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" title="HTML" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" title="JavaScript"/>,
      <RiTailwindCssFill key="tailwindcss" className="inline-block text-[#38B2AC] w-12 h-auto m-3" title="Tailwind CSS"/>,
      <TbBrandVite key="vite" className="inline-block text-[#646cff] w-12 h-auto m-3" title="Vite"/>,
      <FaReact key="reactjs" className="inline-block text-[#61DAFB] w-12 h-auto m-3" title="ReactJS"/>,
      <FaNode key="nodejs" className="inline-block text-[#339933] w-12 h-auto m-3" title="NodeJS"/>,
      <SiExpress key="expressjs" className="inline-block text-[#000000] w-12 h-auto m-3" title="ExpressJS"/>,
      <SiMongodb key="mongodb" className="inline-block text-[#47A248] w-12 h-auto m-3" title="MongoDB"/>,
    ],
  },
  {
    id: "2",
    title: "Personal Web: Fauki Rijatul",
    image: project1Image,
    linkDemo: "https://faukirijatul.vercel.app/",
    linkGithub: "https://github.com/faukiofficial/faukirijatul.git",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" title="HTML" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" title="CSS" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" title="JavaScript"/>,
      <RiTailwindCssFill key="tailwindcss" className="inline-block text-[#38B2AC] w-12 h-auto m-3" title="Tailwind CSS"/>,
      <TbBrandVite key="vite" className="inline-block text-[#646cff] w-12 h-auto m-3" title="Vite"/>,
      <FaReact key="reactjs" className="inline-block text-[#61DAFB] w-12 h-auto m-3" title="ReactJS"/>,
    ],
  },
  {
    id: "3",
    title: "Simple CRUDS App",
    image: project3Image,
    linkDemo: "https://tugas-api-express-mongo.onrender.com/",
    linkGithub: "https://github.com/faukiofficial/tugas-api-express-mongo.git",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" title="HTML" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" title="JavaScript"/>,
      <FaSass key="sass" className="inline-block text-[#CF649A] w-12 h-auto m-2" title="sass" />,
      <TbBrandVite key="vite" className="inline-block text-[#646cff] w-12 h-auto m-3" title="Vite"/>,
      <FaReact key="reactjs" className="inline-block text-[#61DAFB] w-12 h-auto m-3" title="ReactJS"/>,
      <FaNode key="nodejs" className="inline-block text-[#339933] w-12 h-auto m-3" title="NodeJS"/>,
      <SiExpress key="expressjs" className="inline-block text-[#000000] w-12 h-auto m-3" title="ExpressJS"/>,
      <SiMongodb key="mongodb" className="inline-block text-[#47A248] w-12 h-auto m-3" title="MongoDB"/>,
    ],
  },
  {
    id: "4",
    title: "New Project Will Be Added 4",
    image: project4Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "5",
    title: "New Project Will Be Added 5",
    image: project5Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "6",
    title: "New Project Will Be Added 6",
    image: project6Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "7",
    title: "New Project Will Be Added 7",
    image: project7Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "8",
    title: "New Project Will Be Added 8",
    image: project8Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "9",
    title: "New Project Will Be Added 9",
    image: project9Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "10",
    title: "New Project Will Be Added 10",
    image: project10Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "11",
    title: "New Project Will Be Added 11",
    image: project11Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
  {
    id: "12",
    title: "New Project Will Be Added 12",
    image: project12Image,
    linkDemo: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    linkGithub: "https://web.facebook.com/faukiofficial?_rdc=1&_rdr",
    tool: [
      <FaHtml5 key="html" className="inline-block text-[#E34F26] w-12 h-auto m-2" />,
      <FaCss3Alt key="css" className="inline-block text-[#1572B6] w-12 h-auto m-2" />,
      <DiJavascript key="javascript" className="inline-block text-[#F7DF1E] w-12 h-auto m-2" />,
    ],
  },
];

export default projectList;

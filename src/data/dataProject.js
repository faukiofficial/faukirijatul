import personalPortfolio from "../assets/faukirijatul.svg";
import jagoCatat from "../assets/jagocatat.svg";
import apaKabar from "../assets/apakabar.svg";
import tokoKita from "../assets/Tokokita.svg";
import beboTech from "../assets/bebotech.svg";
import belaja from "../assets/belaja.svg";
import eventBookingBE from "../assets/Event-Ticket-Booking-Backend.svg";
import adminDashboard from "../assets/admindashboard.svg";
import blogBackendRedis from "../assets/blog-backend-redis.svg";
import learny from "../assets/learny.svg";
import faukiblog from "../assets/faukiblog.svg";

const projects = [
  {
    _id: "57960",
    title: "Fauki - Blog App",
    description:
      "This fullstack blogging application allows users to create rich text posts, like, comment, and save/bookmark blogs. Built with React.js, Vite, and TypeScript on the frontend, and Express.js with MongoDB on the backend. Styled with Tailwind CSS for a responsive UI.",
    image: faukiblog,
    linkDemo: "https://fauki.vercel.app",
    linkGithub: "https://github.com/faukirijatul/blog-mern-ts.git",
    tool: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "OAuth",
      "MongoDB",
      "Json Web Token",
    ],
  },
  {
    _id: "79878",
    title: "Apakabar - Chat App",
    description:
      "This fullstack chat application enables real-time communication between users. It supports features like private messaging and online status indicators. The frontend is built with React.js and Vite, while the backend leverages Express.js and Socket.io for real-time interactions. MongoDB is used for data storage, and the UI is styled with Tailwind CSS and DaisyUI.",
    image: apaKabar,
    linkDemo: "https://apakabar-chatapp-web.onrender.com",
    linkGithub: "https://github.com/faukiofficial/apakabar-chatapp-web.git",
    tool: [
      "React",
      "Tailwind CSS",
      "Daisy UI",
      "Zustand",
      "Express JS",
      "Node JS",
      "Socket.io",
      "Cloudinary",
      "OAuth",
      "MongoDB",
      "Json Web Token",
    ],
  },
  {
    _id: "33093",
    title: "Toko kita",
    description:
      "This fullstack e-commerce application supports two roles: users and admins. Users can browse, shop, and make payments, while admins can manage products and handle shipment processing. The frontend is built with React.js and Vite, while the backend is powered by Express.js and MongoDB. Styling is handled using Tailwind CSS.",
    image: tokoKita,
    linkDemo: "https://tokokita.onrender.com",
    linkGithub: "https://github.com/faukiofficial/Tokokita.git",
    tool: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "MongoDB",
      "Json Web Token",
    ],
  },
  {
    _id: "53454",
    title: "Admin Dashboard",
    description:
      "The backend is built using Express.js. Additional features include email functionality for OTP registration, forget password, change email, and change password, powered by Nodemailer. The frontend is developed using React.js. It includes state management with @reduxjs/toolkit. Styling is handled using Tailwind CSS, ensuring a responsive and modern user interface.",
    image: adminDashboard,
    linkDemo: "https://adminedu.onrender.com",
    linkGithub: "https://github.com/faukiofficial/admindashboard.git",
    tool: [
      "React",
      "Tailwind CSS",
      "Express JS",
      "Node JS",
      "MongoDB",
      "Redux Toolkit",
      "Nodemailer",
      "Json Web Token",
    ],
  },
  {
    _id: "31232",
    title: "Jago Catat",
    description:
      "This application is a fullstack platform for note-taking, allowing users to create, edit, and delete notes. Built with React.js and Vite for the frontend, and Express.js and MongoDB for the backend. Utilizes Tailwind CSS for a responsive and modern design.",
    image: jagoCatat,
    linkDemo: "https://jagocatat.onrender.com",
    linkGithub: "https://github.com/faukiofficial/JagoCatat.git",
    tool: [
      "React",
      "Tailwind CSS",
      "Express JS",
      "Node JS",
      "MongoDB",
      "Json Web Token",
    ],
  },
  {
    _id: "99232",
    title: "Learny - LMS (FrontEnd)",
    image: learny,
    linkDemo: "#",
    linkGithub: "https://github.com/faukiofficial/lms2.git",
    tool: ["React", "TypeScript", "Tailwind CSS", "Context API", "Clerk"],
  },
  {
    _id: "87927",
    title: "Blog Backend",
    image: blogBackendRedis,
    linkDemo: "#",
    linkGithub: "https://github.com/faukiofficial/blog-mern-ts.git",
    tool: [
      "TypeScript",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "MongoDB",
      "Redis",
      "Nodemailer",
      "EJS",
      "Json Web Token",
    ],
  },
  {
    _id: "67567",
    title: "Belaja",
    image: belaja,
    linkDemo: "#",
    linkGithub: "https://github.com/faukiofficial/Belaja.git",
    tool: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "MongoDB",
      "Redis",
      "Nodemailer",
      "Json Web Token",
    ],
  },
  {
    _id: "45656",
    title: "Event Ticket Booking (Backend)",
    description:
      "The backend is built with Express.js, the database is managed using the Mongoose, and authentication is implemented with JsonWebToken. It includes mailing features for OTP registration and order notifications using Nodemailer and Mustache.",
    image: eventBookingBE,
    linkDemo: "#",
    linkGithub:
      "https://github.com/faukiofficial/event-ticket-booking-backend.git",
    tool: ["Express JS", "Node JS", "MongoDB", "Nodemailer", "Json Web Token"],
  },
  {
    _id: "45654",
    title: "Bebo Tech",
    description:
      "Make an frontend based on Figma design.",
    image: beboTech,
    linkDemo: "https://bebotech.onrender.com/",
    linkGithub: "https://github.com/faukiofficial/frontend-sisko.git",
    tool: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    _id: "64565",
    title: "Personal Portfolio",
    description:
      "A fullstack website to showcase a personal description. Highlights skills and experiences using a sleek and user-friendly interface. Designed with modern web technologies, it ensures responsiveness and accessibility.",
    image: personalPortfolio,
    linkDemo: "https://faukirijatul.vercel.app",
    linkGithub: "https://github.com/faukiofficial/faukirijatul.git",
    tool: ["React", "Tailwind CSS"],
  },
];

export default projects;

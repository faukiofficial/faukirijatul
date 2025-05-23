import personalPortfolio from "../assets/projects/faukirijatul.svg";
import jagoCatat from "../assets/projects/jagocatat.svg";
import apaKabar from "../assets/projects/apakabar.svg";
import tokoKita from "../assets/projects/Tokokita.svg";
import beboTech from "../assets/projects/bebotech.svg";
import belaja from "../assets/projects/belaja.svg";
import eventBookingBE from "../assets/projects/Event-Ticket-Booking-Backend.svg";
import adminDashboard from "../assets/projects/admindashboard.svg";
import blogBackendRedis from "../assets/projects/blog-backend-redis.svg";
import learny from "../assets/projects/learny.svg";
import faukiblog from "../assets/projects/faukiblog.svg";
import tokobaju from "../assets/projects/tokobaju.svg";
import authsystem from "../assets/projects/auth-system.svg";
import todolistLaravel from "../assets/projects/todolist-laravel.svg";

const projects = [
  {
    _id: "3876800",
    title: "Tokobaju (E-Commerce) - Web App",
    image: tokobaju,
    linkDemo: "https://tokobaju-nine.vercel.app",
    linkGithub:
      "https://github.com/faukirijatul/ecommerce-frontend-react",
    mainStack: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Stripe",
      "Express JS",
      "MongoDB",
    ],
    tool: [
      "JavaScript",
      "React",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Context API",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "Stripe",
      "MongoDB",
      "Mongoose",
      "Json Web Token",
      "Nodemailer",
      "Vercel",
    ],
  },
  {
    _id: "387960",
    title: "Auth System - Web App",
    image: authsystem,
    linkDemo: "https://authsystem-sand.vercel.app",
    linkGithub:
      "https://github.com/faukirijatul/express-nextjs-ts-authsystem.git",
    mainStack: [
      "TypeScript",
      "Next JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express JS",
      "MySQL",
    ],
    tool: [
      "TypeScript",
      "Next JS",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "OAuth",
      "Next Auth",
      "MySQL",
      "Prisma",
      "Jest",
      "Json Web Token",
      "Nodemailer",
      "Railway",
      "Vercel",
    ],
  },
  {
    _id: "57960",
    title: "Fauki - Blog Web App",
    description:
      "This fullstack blogging application allows users to create rich text posts, like, comment, and save/bookmark blogs. Built with React.js, Vite, and TypeScript on the frontend, and Express.js with MongoDB on the backend. Styled with Tailwind CSS for a responsive UI.",
    image: faukiblog,
    linkDemo: "https://fauki.vercel.app",
    linkGithub: "https://github.com/faukirijatul/blog-mern-ts.git",
    mainStack: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
    ],
    tool: [
      "TypeScript",
      "React",
      "CSS",
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
    title: "Apakabar - Chat Web App",
    description:
      "This fullstack chat application enables real-time communication between users. It supports features like private messaging and online status indicators. The frontend is built with React.js and Vite, while the backend leverages Express.js and Socket.io for real-time interactions. MongoDB is used for data storage, and the UI is styled with Tailwind CSS and DaisyUI.",
    image: apaKabar,
    linkDemo: "https://apakabar-chatapp-web.onrender.com",
    linkGithub: "https://github.com/faukiofficial/apakabar-chatapp-web.git",
    mainStack: [
      "React",
      "Zustand",
      "Tailwind CSS",
      "Daisy UI",
      "Express JS",
      "Socket.io",
      "MongoDB",
    ],
    tool: [
      "JavaScript",
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
    title: "Toko Kita - ECommerce Web App",
    description:
      "This fullstack e-commerce application supports two roles: users and admins. Users can browse, shop, and make payments, while admins can manage products and handle shipment processing. The frontend is built with React.js and Vite, while the backend is powered by Express.js and MongoDB. Styling is handled using Tailwind CSS.",
    image: tokoKita,
    linkDemo: "https://tokokita.onrender.com",
    linkGithub: "https://github.com/faukiofficial/Tokokita.git",
    mainStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
    ],
    tool: [
      "JavaScript",
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
    title: "Admin Dashboard - Web App",
    description:
      "The backend is built using Express.js. Additional features include email functionality for OTP registration, forget password, change email, and change password, powered by Nodemailer. The frontend is developed using React.js. It includes state management with @reduxjs/toolkit. Styling is handled using Tailwind CSS, ensuring a responsive and modern user interface.",
    image: adminDashboard,
    linkDemo: "https://adminedu.onrender.com",
    linkGithub: "https://github.com/faukiofficial/admindashboard.git",
    mainStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
    ],
    tool: [
      "JavaScript",
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
    title: "Jago Catat - Note Taking App",
    description:
      "This application is a fullstack platform for note-taking, allowing users to create, edit, and delete notes. Built with React.js and Vite for the frontend, and Express.js and MongoDB for the backend. Utilizes Tailwind CSS for a responsive and modern design.",
    image: jagoCatat,
    linkDemo: "https://jagocatat.onrender.com",
    linkGithub: "https://github.com/faukiofficial/JagoCatat.git",
    mainStack: ["React", "Tailwind CSS", "Express JS", "MongoDB"],
    tool: [
      "JavaScript",
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
    title: "Learny - LMS Web App (Frontend)",
    image: learny,
    linkDemo: "",
    linkGithub: "https://github.com/faukiofficial/lms2.git",
    mainStack: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    tool: ["React", "TypeScript", "Tailwind CSS", "Context API", "Clerk"],
  },
  {
    _id: "87927",
    title: "Blog Backend",
    image: blogBackendRedis,
    linkDemo: "",
    linkGithub: "https://github.com/faukiofficial/blog-mern-ts.git",
    mainStack: ["TypeScript", "Express JS", "Node JS", "MongoDB", "Redis"],
    tool: [
      "HTML",
      "CSS",
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
    title: "Belaja - LMS Web App",
    image: belaja,
    linkDemo: "",
    linkGithub: "https://github.com/faukiofficial/Belaja.git",
    mainStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Midtrans",
      "Express JS",
      "MongoDB",
      "Redis",
    ],
    tool: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Express JS",
      "Node JS",
      "Cloudinary",
      "Midtrans",
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
    linkDemo: "",
    linkGithub:
      "https://github.com/faukiofficial/event-ticket-booking-backend.git",
    mainStack: ["Express JS", "Node JS", "MongoDB", "Nodemailer"],
    tool: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express JS",
      "Node JS",
      "MongoDB",
      "Nodemailer",
      "Json Web Token",
    ],
  },
  {
    _id: "4880354",
    title: "Simple Todo List",
    image: todolistLaravel,
    linkDemo: "",
    linkGithub: "https://github.com/faukirijatul/todolist-laravel11.git",
    mainStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    tool: ["PHP", "Laravel", "MySQL", "HTML", "Bootstrap"],
  },
  {
    _id: "45654",
    title: "Bebo Tech (Figma Slicing) - Web App",
    description: "Make a frontend based on Figma design.",
    image: beboTech,
    linkDemo: "https://bebotech.onrender.com/",
    linkGithub: "https://github.com/faukiofficial/frontend-sisko.git",
    mainStack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    tool: ["React", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    _id: "64565",
    title: "Personal Portfolio Web App",
    description:
      "A fullstack website to showcase a personal description. Highlights skills and experiences using a sleek and user-friendly interface. Designed with modern web technologies, it ensures responsiveness and accessibility.",
    image: personalPortfolio,
    linkDemo: "https://faukirijatul.vercel.app",
    linkGithub: "https://github.com/faukiofficial/faukirijatul.git",
    mainStack: ["React", "Tailwind CSS", "Context API"],
    tool: ["JavaScript", "React", "Tailwind CSS", "Context API"],
  },
];

export default projects;

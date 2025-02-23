import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaComputer } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#dedede]">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8 pt-28">
          Experiences
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaComputer />}
          >
            <h3 className="ertical-timeline-element-title text-2xl font-semibold text-gray-900">
              Fullstack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-900">
              Eduwork, Remote
            </h4>
            <p className="text-base">MERN Stack</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBook />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold text-gray-900">
              Bookstore Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-900">
              Lapak Mumtaz, Bogor, Indonesia
            </h4>
            <p className="text-base">Leadership, Digital Marketing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaComputer />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold text-gray-900">
              Web Developer Intership
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-900">
              IPB University, Bogor, Indonesia
            </h4>
            <p className="text-base">PHP, Laravel, MySQL, Team Work</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaComputer />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold text-gray-900">
              Bachelors Degree : Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-gray-900">
              IPB University, Bogor, Indonesia
            </h4>
            <p className="text-base">
              Team Work, Time Management, Communication, Basic Programming, Web
              Development
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Experience;

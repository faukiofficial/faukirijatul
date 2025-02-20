import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { stackData } from "../data/stackData";

const About = () => {
  const { setSelectedTool } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative text-lg bg-gray-200 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {stackData.map((stack) => (
            <div
              key={stack.id}
              className="flex flex-col items-center justify-between gap-1 min-w-[100px] border hover:border-blue-400 hover:bg-gray-100 rounded-md p-2 cursor-pointer"
              onClick={() => {
                setSelectedTool(stack.title);
                navigate("/all-projects");
              }}
            >
              <img src={stack.icon} alt={stack.title} height={50} width={50} />
              <p className="text-center text-gray-900 text-sm 800px:text-base">
                {stack.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

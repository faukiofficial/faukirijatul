// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { stackData } from "../data/stackData";
import { allTools } from "../data/constant";

const About = () => {
  // const { setSelectedTool } = useContext(AppContext);
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
          Developed scalable, high-performance web applications as a Full-Stack
          Developer for over 2 years, specializing in React.js and Next.js for
          dynamic frontends and seamless user experiences. Built robust backend
          systems and RESTful APIs using Express.js professionally for more than
          1 year. Excelled in problem-solving and debugging, quickly resolved
          complex technical issues in both greenfield and legacy codebases, and
          delivered clean, maintainable solutions that enhanced performance and
          supported business growth.
        </p>
        <h4 className="text-center text-3xl font-semibold mt-8 mb-5 uppercase text-gray-900">
          Programming Languages, Frameworks & Tools
        </h4>

        <div className="flex justify-center flex-wrap gap-5 items-center">
          {stackData.map((data) => (
            <div
              key={data.title}
              className="flex flex-col items-center border border-gray-400/40 rounded-md p-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {data.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {data.stacks.map((stack) => (
                  <div
                    key={stack.id}
                    className={`flex flex-col items-center justify-between gap-1 min-w-[100px] border hover:border-blue-400 hover:bg-gray-100 rounded-md p-2 ${
                      allTools.includes(stack.title)
                        ? "cursor-pointer"
                        : "cursor-enabled"
                    }`}
                    onClick={
                      allTools.includes(stack.title)
                        ? () => {
                            // setSelectedTool(stack.title);
                            navigate(`/all-projects/${stack.title}`);
                          }
                        : null
                    }
                  >
                    <img
                      src={stack.icon}
                      alt={stack.title}
                      height={50}
                      width={50}
                    />
                    <p className="text-center text-gray-900 text-sm 800px:text-base">
                      {stack.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

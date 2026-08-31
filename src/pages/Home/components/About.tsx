import { useNavigate } from 'react-router-dom';
import { stackData } from '@/data/stackData';
import { StackCategory } from '@/types/stack';
import { STACK_ICON_SIZE } from '@/constants/stack';
import { getAllTools } from '@/utils/getAllTools';

export function About() {
  const navigate = useNavigate();

  const allTools = getAllTools();

  const handleStackClick = (stackTitle: string) => {
    if (!allTools.includes(stackTitle)) return;
    navigate(`/all-projects/${stackTitle}`);
  };

  return (
    <section
      id="about"
      className="relative bg-gray-200 py-16 text-lg text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-center text-4xl font-semibold uppercase text-gray-900">
          About
        </h3>

        <p className="text-center text-lg text-gray-900 sm:text-2xl">
          Developed scalable, high-performance web applications as a Full-Stack
          Developer for over 2 years, specializing in React.js and Next.js for
          dynamic frontends and seamless user experiences. Built robust backend
          systems and RESTful APIs using Express.js professionally for more than
          1 year. Excelled in problem-solving and debugging, quickly resolved
          complex technical issues in both greenfield and legacy codebases, and
          delivered clean, maintainable solutions that enhanced performance and
          supported business growth.
        </p>

        <h4 className="mb-5 mt-8 text-center text-3xl font-semibold uppercase text-gray-900">
          Programming Languages, Frameworks & Tools
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {(stackData as StackCategory[]).map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center rounded-md border border-gray-400/40 p-4"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.stacks.map((stack) => {
                  const isClickable = allTools.includes(stack.title);

                  return (
                    <button
                      key={stack.id}
                      type="button"
                      disabled={!isClickable}
                      onClick={() => handleStackClick(stack.title)}
                      className={`flex min-w-[100px] flex-col items-center justify-between gap-1 rounded-md border p-2 transition-colors ${
                        isClickable
                          ? 'cursor-pointer hover:border-blue-400 hover:bg-gray-100'
                          : 'cursor-default opacity-80'
                      }`}
                    >
                      <img
                        src={stack.icon}
                        alt={stack.title}
                        height={STACK_ICON_SIZE}
                        width={STACK_ICON_SIZE}
                        loading="lazy"
                      />
                      <p className="text-center text-sm text-gray-900 sm:text-base">
                        {stack.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

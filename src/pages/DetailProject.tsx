import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlayCircle,
  FaGithub,
} from 'react-icons/fa';
import { projects } from '@/data/dataProject';

export function DetailProject() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((item) => item._id === id);
  const data = projects[currentIndex];

  if (currentIndex === -1 || !data) {
    return <Navigate to="/page-not-found" replace />;
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projects.length - 1;

  const handlePrevClick = () => {
    if (isFirst) return;
    navigate(`/project/${projects[currentIndex - 1]._id}`, { replace: true });
  };

  const handleNextClick = () => {
    if (isLast) return;
    navigate(`/project/${projects[currentIndex + 1]._id}`, { replace: true });
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const hasDemo = Boolean(data.linkDemo?.trim());
  const hasGithub = Boolean(data.linkGithub?.trim());

  return (
    <section className="relative min-h-[94vh] bg-[#dedede] px-4 pb-12 pt-20 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <h1 className="flex flex-col items-center text-center text-2xl font-bold text-gray-900 md:text-4xl">
          {data.title}
          <span className="mt-2 text-sm font-normal text-gray-600 md:text-base">
            ({currentIndex + 1} of {projects.length} projects)
          </span>
        </h1>

        <div className="relative mx-auto mt-6 flex max-w-[864px] items-center justify-center">
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={isFirst}
            aria-label="Previous project"
            className={`absolute -left-3 z-10 rounded-full bg-slate-800/80 p-2.5 text-xl text-blue-400 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 sm:-left-5 sm:p-3 sm:text-2xl lg:-left-16 lg:bg-slate-800 lg:p-4 lg:text-3xl xl:-left-20 ${
              isFirst
                ? 'cursor-not-allowed opacity-40 hover:scale-100'
                : 'hover:text-blue-300'
            }`}
          >
            <FaArrowLeft />
          </button>

          <div className="relative aspect-[16/9] w-full rounded-xl border bg-transparent">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full rounded-xl object-cover object-center"
            />
          </div>

          <button
            type="button"
            onClick={handleNextClick}
            disabled={isLast}
            aria-label="Next project"
            className={`absolute -right-3 z-10 rounded-full bg-slate-800/80 p-2.5 text-xl text-blue-400 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 sm:-right-5 sm:p-3 sm:text-2xl lg:-right-16 lg:bg-slate-800 lg:p-4 lg:text-3xl xl:-right-20 ${
              isLast
                ? 'cursor-not-allowed opacity-40 hover:scale-100'
                : 'hover:text-blue-300'
            }`}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {hasDemo && (
            <button
              type="button"
              onClick={() => handleOpenLink(data.linkDemo!)}
              className="flex w-full max-w-xs items-center justify-center rounded-full bg-blue-500 px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg sm:w-auto md:text-lg"
            >
              <FaPlayCircle className="mr-2 text-xl" />
              View Demo
            </button>
          )}

          {hasGithub && (
            <button
              type="button"
              onClick={() => handleOpenLink(data.linkGithub!)}
              className="flex w-full max-w-xs items-center justify-center rounded-full bg-gray-900 px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-gray-800 hover:shadow-lg sm:w-auto md:text-lg"
            >
              <FaGithub className="mr-2 text-xl" />
              View on GitHub
            </button>
          )}
        </div>

        {data.description && (
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-800 sm:text-base md:text-lg">
            {data.description}
          </p>
        )}

        <div
          className={`text-center text-base text-gray-800 md:text-lg ${
            data.description ? 'mt-6' : 'mt-10'
          }`}
        >
          <span className="font-semibold text-gray-900">
            Languages & Tools:
          </span>
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm font-medium text-gray-700 sm:text-base">
            {data.tool.join(' | ')}
          </div>
        </div>
      </div>
    </section>
  );
}

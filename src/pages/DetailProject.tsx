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
    <section className="relative min-h-[94vh] bg-[#dedede] pb-10 pt-28">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="flex flex-col items-center text-center text-2xl font-semibold text-gray-900 md:text-4xl">
          {data.title}
          <span className="mt-2 text-base font-normal">
            ({currentIndex + 1} of {projects.length} projects)
          </span>
        </h1>

        <div className="relative mt-4 flex items-center justify-center">
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={isFirst}
            aria-label="Previous project"
            className={`absolute left-[10px] z-30 rounded-full bg-slate-200 p-3 text-2xl transition-transform duration-200 md:text-4xl lg:-left-[80px] lg:bg-slate-800 ${
              isFirst
                ? 'cursor-not-allowed text-gray-400'
                : 'text-blue-400 hover:scale-110 hover:text-gray-900 lg:hover:text-blue-300'
            }`}
          >
            <FaArrowLeft />
          </button>

          <img
            src={data.image}
            alt={data.title}
            className="relative w-full rounded-lg"
            loading="eager"
          />

          <button
            type="button"
            onClick={handleNextClick}
            disabled={isLast}
            aria-label="Next project"
            className={`absolute right-[10px] rounded-full bg-slate-200 p-3 text-2xl transition-transform duration-200 md:text-4xl lg:-right-[80px] lg:bg-slate-800 ${
              isLast
                ? 'cursor-not-allowed text-gray-400'
                : 'text-blue-400 hover:scale-110 hover:text-gray-900 lg:hover:text-blue-300'
            }`}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-5 flex flex-row items-center justify-center gap-1">
          {hasDemo && (
            <button
              type="button"
              onClick={() => handleOpenLink(data.linkDemo!)}
              className="mr-4 flex items-center justify-center rounded-full bg-blue-400 p-2 text-base text-white shadow-lg transition-colors duration-200 hover:bg-blue-600 md:w-[15rem] md:text-2xl"
            >
              <FaPlayCircle className="mr-2" />
              View Demo
            </button>
          )}

          {hasGithub && (
            <button
              type="button"
              onClick={() => handleOpenLink(data.linkGithub!)}
              className="flex items-center justify-center rounded-full bg-gray-900 p-2 text-base text-white shadow-lg transition-colors duration-200 hover:bg-gray-700 md:w-[15rem] md:text-2xl"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </button>
          )}
        </div>

        {data.description && (
          <p className="mb-4 mt-10 text-center text-base text-gray-900 md:mt-9 lg:text-lg">
            {data.description}
          </p>
        )}

        <div
          className={`text-center text-xl text-gray-800 ${
            data.description ? '' : 'mt-10 md:mt-9'
          }`}
        >
          <span className="font-semibold">Languages & tools:</span>
          <div className="mt-2">{data.tool.join(' | ')}</div>
        </div>
      </div>
    </section>
  );
}

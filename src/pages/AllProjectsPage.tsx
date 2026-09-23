import { useState, useEffect, useMemo, type ChangeEvent } from 'react';
import Select, { type SingleValue } from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '@/data/dataProject';
import { getAllTools } from '@/utils/getAllTools';
import { ProjectCard } from '@/components/ProjectCard';

interface ToolOption {
  value: string;
  label: string;
}

export function AllProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const navigate = useNavigate();
  const { title } = useParams<{ title?: string }>();

  const allTools = getAllTools();

  useEffect(() => {
    setSelectedTool(title ?? null);
  }, [title]);

  const toolOptions: ToolOption[] = useMemo(
    () =>
      allTools
        .map((tool) => ({ value: tool, label: tool }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [allTools],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesTool = selectedTool
        ? project.tool.includes(selectedTool)
        : true;

      return matchesSearch && matchesTool;
    });
  }, [searchQuery, selectedTool]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleToolChange = (selectedOption: SingleValue<ToolOption>) => {
    const toolValue = selectedOption?.value ?? '';
    navigate(`/all-projects/${toolValue}`, { replace: true });
  };

  return (
    <section
      id="all-projects"
      className="min-h-[calc(100vh-60px)] bg-[#dedede] pb-16 pt-20 md:pt-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          All Projects
        </h3>

        <p className="mb-6 text-center text-xs text-gray-600 sm:mb-8 sm:text-sm">
          * Not all projects I&apos;ve worked on are displayed here.
        </p>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-10 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-800 shadow-sm transition-colors focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 sm:flex-1"
          />

          <Select<ToolOption>
            options={toolOptions}
            onChange={handleToolChange}
            value={
              toolOptions.find((option) => option.value === selectedTool) ??
              null
            }
            isClearable
            placeholder="Filter by stack..."
            className="w-full text-sm sm:w-64"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '40px',
                height: '40px',
                borderRadius: '0.375rem',
                borderColor: '#d1d5db',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: '#9ca3af',
                },
              }),
              menu: (base) => ({
                ...base,
                zIndex: 40,
              }),
            }}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="my-16 text-center">
            <p className="text-xl font-semibold text-gray-800 sm:text-2xl">
              No projects found.
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Try searching with another keyword or resetting the stack filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item) => (
              <ProjectCard key={item._id} project={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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
      className="min-h-[calc(100vh-60px)] bg-[#dedede] pb-16 pt-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-2 text-center text-4xl font-semibold text-gray-900">
          All Projects
        </h3>

        <p className="mb-8 text-center text-gray-700">
          * Not all projects I&apos;ve worked on are displayed here.
        </p>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-10 flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-300 focus:outline-none md:py-1"
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
            className="w-full md:w-60"
          />
        </div>

        {filteredProjects.length === 0 ? (
          <p className="mb-8 text-center text-2xl font-bold text-gray-900">
            No projects found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {filteredProjects.map((item) => (
              <ProjectCard key={item._id} project={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

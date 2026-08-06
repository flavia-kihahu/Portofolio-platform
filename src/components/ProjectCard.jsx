import { Trash2 } from 'lucide-react';

export default function ProjectCard({
  project,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-transparent bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500">
      <img
        src={project.image || "https://via.placeholder.com/400x300"}
        alt={project.title}
        className="h-64 w-full object-cover"
      />
      <div className="space-y-4 p-8">
        <span className="rounded-full text-md text-blue-700">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-stone-900">
          {project.title}
        </h3>
        <p className="text-lg text-stone-600">
          {project.description}
        </p>
        <div className="relative overflow-hidden rounded-3xl flex justify-end">
        <button
          onClick={() => onDelete(project.id)}
          className="rounded-xl bg-red-100 w-8 h-8 font-semibold text-red-500 flex items-center justify-center transition hover:bg-red-700"
        >
          <Trash2 />
        </button>
        </div>
      </div>
    </div>
  );
}
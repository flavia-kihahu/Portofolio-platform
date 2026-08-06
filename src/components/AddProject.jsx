import { useState } from "react";
import Info from "./Info";

const AddProject = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddProject({ title, description, image: image || null, category, id: Date.now() });
    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  return (
    <section className="bg-stone-100 flex items-center justify-center px-6 pt-4 pb-12">
      <div className="grid w-full max-w-7xl overflow-hidden rounded-2xl shadow-2xl lg:grid-cols-2">
        <Info />
        <div className="bg-white p-10 lg:p-12">
            <span className="rounded-full px-4 py-1 text-md font-semibold text-blue-700">
                Project Management
            </span>
          <h2 className="text-2xl font-bold text-stone-900">
            Add Project
          </h2>
          <p className="mt-2 mb-8 text-stone-500">
            Fill in the details below to add a new project. Keep the details clear and concise.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-stone-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project title"
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-stone-700">
                Description
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project..."
                className="w-full resize-none rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-stone-700">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              >
                <option value="">Select category</option>
                <option value="Web Design">Category 1-Web Design</option>
                <option value="Robotics">Category 2-Robotics</option>
                <option value="AI">Category 3-AI</option>
                <option value="Repair">Category 4-Repair</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-stone-700">Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl mt-10 bg-blue-400 py-3 text-lg font-semibold text-white transition hover:scale-105"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProject;
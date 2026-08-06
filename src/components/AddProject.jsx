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
    onAddProject({ title, description, image, category, id: Date.now() });
    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  return (
    <section className="bg-stone-100 flex items-center justify-center px-6 pt-4 pb-12">
      <div className="grid w-full max-w-7xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">
        <Info />
        <div className="bg-white p-10 lg:p-12">
          <h2 className="text-3xl font-bold text-stone-900">
            Add Project
          </h2>
          <p className="mt-2 mb-8 text-stone-500">
            Fill in the details below to add a new project.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block font-medium text-stone-700">
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
              <label className="mb-2 block font-medium text-stone-700">
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
              <label className="mb-2 block font-medium text-stone-700">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              >
                <option value="">Select category</option>
                <option value="Web Design">Web Design</option>
                <option value="Robotics">Robotics</option>
                <option value="AI">AI</option>
                <option value="Repair">Repair</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block font-medium text-stone-700">Image URL</label>
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
              className="w-full rounded-xl bg-blue-400 py-3 text-lg font-semibold text-white transition hover:scale-105"
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
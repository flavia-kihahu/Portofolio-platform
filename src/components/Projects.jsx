import { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import web_design from "../assets/web_design.png";
import Robotics from "../assets/Robotics.png";
import AI from "../assets/AI.png";
import AI2 from "../assets/AI2.png";
import repair from "../assets/Repair.png";
import Robotics2 from "../assets/Robotics2.png";

const defaultProjects = [
    {
        id: 1,
        title: "Web Design",
        description: "We design websites and apps",
        image: web_design,
        category: "Category 1",
    },
    {
        id: 2,
        title: "Robotics",
        description: "We design and build robots",
        image: Robotics,
        category: "Category 2",
    },
    {
        id: 3,
        title: "AI",
        description: "We design and build AI models",
        image: AI,
        category: "Category 3",
    },
    {
        id: 4,
        title: "Robotics",
        description: "We design and build robots",
        image: Robotics2,
        category: "Category 2",
    },
    {
        id: 5,
        title: "AI",
        description: "We design and build AI models",
        image: AI2,
        category: "Category 3",
    },
    {
        id: 6,
        title: "Repair",
        description: "We design websites and apps",
        image: repair,
        category: "Category 4",
    },
];

export default function Projects({ projects = defaultProjects, onDelete }) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    const handleClear = () => {
        setSearchTerm("");
    };
    const filteredProjects = projects.filter((project) =>
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section id="projects" className="min-h-screen bg-stone-100 px-8 py-20">
            <div className="mx-auto max-w-7xl">
                <div>
                    <h2 className="text-4xl font-bold text-black mb-4">Projects</h2>
                </div>
                <div className="mb-20 flex items-center gap-6">
                    <div className="w-full max-w-8xl">
                        <SearchBar
                            onSearch={handleSearch}
                            onClear={handleClear}
                        />
                    </div>
                </div>
                {filteredProjects.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDelete={onDelete}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl bg-white p-16 text-center shadow-lg">
                        <div className="mb-4 flex justify-center">
                            <Search size={48} className="text-stone-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">
                            No projects found
                        </h3>
                        <p className="mt-2 text-stone-500">
                            Try searching with a different category or title.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
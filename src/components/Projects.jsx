import ProjectCard from "./ProjectCard";
import { useState } from "react";
import web_design from "../assets/web_design.png";
import Robotics from "../assets/Robotics.png";
import AI from "../assets/AI.png";

export default function Projects() {
    const [projects, setProjects] = useState([
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
        }
    ]);

    const handleAddProject = (newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    const handleDelete = (id) => {
        setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    }
    return (
        <section id="projects" className="min-h-screen bg-stone-100 px-8 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold text-black">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </section>
    );
}
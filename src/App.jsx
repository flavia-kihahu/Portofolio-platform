import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AddProject from './components/AddProject'
import Projects from './components/Projects'
import web_design from "./assets/web_design.png";
import Robotics from "./assets/Robotics.png";
import AI from "./assets/AI.png";
import AI2 from "./assets/AI2.png";
import repair from "./assets/Repair.png";
import Robotics2 from "./assets/Robotics2.png";

function App() {
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
  ]);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };
  const handleDelete = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
  }
  return (
    <>
      <Navbar />
      <AddProject onAddProject={handleAddProject} />
      <Projects projects={projects} onDelete={handleDelete} />
    </>
  );
}

export default App
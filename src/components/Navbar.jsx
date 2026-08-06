import logo from '../assets/logo.png';

export default function Navbar() {
    const handleProjectsClick = () => {
        const projects = document.getElementById('projects');
        projects.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo-image"/>
                <h1>Maker</h1>
            </div>
            <button className="project-btn" onClick={handleProjectsClick}>See Projects</button>
        </nav>
    );
}
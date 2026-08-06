import logo from "../assets/logo.png";

export default function Navbar() {
  const handleProjectsClick = () => {
    const projects = document.getElementById("projects");
    projects?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between bg-stone-100 border-b border-stone-200">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Maker Logo" className="w-20 h-20"/>
        <h1 className="text-shadow-gray-900 text-3xl font-bold">
          Maker
        </h1>
      </div>
      <button onClick={handleProjectsClick} className="inline-flex items-center justify-center bg-linear-to-r from-violet-500 to-fuchsia-500 w-30 h-12 text-white font-bold text-base rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
        See Projects
      </button>
    </nav>
  );
}
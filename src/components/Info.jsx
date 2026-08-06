import { Globe, Bot, Code2, Lightbulb } from "lucide-react";
import maker from "../assets/maker.png";

export default function Info() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-blue-900 bg-cover bg-center p-12 text-blue-100"
      style={{ backgroundImage: `url(${maker})` }}>
        <div className="absolute inset-0 bg-blue-950/75"></div>
        <div className="relative z-10">
        <h1 className="text-5xl font-bold">
            Maker
        </h1>
        <p className="mt-6 text-lg leading-8 text-violet-100">
            Turn your ideas into real digital products. Showcase your projects in one place and let your work speak for itself.
        </p>
        <div className="mt-12 space-y-8">
            <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-3">
                <Globe size={24} />
            </div>
            <div>
                <h3 className="font-semibold">Web Development</h3>
                <p className="text-violet-100">Modern websites and web apps.</p>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-3">
                <Bot size={24} />
            </div>
            <div>
                <h3 className="font-semibold">Artificial Intelligence</h3>
                <p className="text-violet-100">Smart AI-powered solutions.</p>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-3">
                <Code2 size={24} />
            </div>
            <div>
                <h3 className="font-semibold">Software Engineering</h3>
                <p className="text-violet-100">Clean and scalable systems.</p>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-3">
                <Lightbulb size={24} />
            </div>
            <div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-violet-100">Transforming ideas into products.</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  );
}
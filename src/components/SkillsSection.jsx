import { useState } from "react";
import { cn } from "@/lib/utils";

// Import lucide icons
import { 
  Code, 
  FileCode2, 
  Database, 
  Boxes, 
  GitBranch, 
  Terminal, 
  Globe 
} from "lucide-react";

// Custom SVG logos (since lucide doesn't have logos)
const Logos = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  atom: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
};

// Add a logo field to each skill
const skills = [
  // Frontend
  { name: "HTML", category: "frontend", logo: Logos.html },
  { name: "CSS", category: "frontend", logo: Logos.css },
  { name: "JavaScript", category: "frontend", logo: Logos.js },
  { name: "React", category: "frontend", logo: Logos.react },

  // Backend
  { name: "Node.js", category: "backend", logo: Logos.node },
  { name: "Express", category: "backend", logo: Logos.express },
  { name: "PostgreSQL", category: "backend", logo: Logos.postgres },
  { name: "SQL", category: "backend", logo: Logos.sql },
  { name: "C/C++", category: "backend", logo: Logos.cpp },
  { name: "PHP", category: "backend", logo: Logos.php },

  // Tools
  { name: "Git", category: "tools", logo: Logos.git },
  { name: "GitHub", category: "tools", logo: Logos.github },
  { name: "Atom", category: "tools", logo: Logos.atom },
  { name: "VS Code", category: "tools", logo: Logos.vscode },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-foreground hover:bg-secondary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* SKILL GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
          <div
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover text-center flex flex-col items-center gap-4 hover:shadow-md transition"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

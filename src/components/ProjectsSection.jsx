import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OpenBook – Personal Library Manager",
    description:
      "A full-stack book library manager to store books, reviews, ratings, and direct Open Library links. Built with Node.js, Express, EJS, and PostgreSQL.",
    image: "/projects/OpenBook_BookTracker.png",
    tags: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kartikshetty9403/OpenBook",
  },
  {
    id: 2,
    title: "Permalist – Modern To-Do List App",
    description:
      "A clean and fast database-driven To-Do list app built using Node.js, Express, and PostgreSQL. Users can add, edit, and delete tasks with a smooth and minimal interface.",
    image: "/projects/Permalist_TodoList.png",
    tags: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kartikshetty9403/Permalist",
  },
  {
    id: 3,
    title: "Family Travel Tracker",
    description:
      "A full-stack app that lets families track visited countries, manage member profiles, and visualize their journeys on a world map.",
    image: "/projects/Family_Travel_Tracker.png",
    tags: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kartikshetty9403/Family-Travel-Tracker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content section becomes flex + grow */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Icons pushed to bottom using mt-auto */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kartikshetty9403"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

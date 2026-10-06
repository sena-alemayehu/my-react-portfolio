import { useState } from "react";

type Category =
  | "Web"
  | "Mobile App"
  | "Systems"
  | "UI/UX Design";

type Project = {
  title: string;
  description: string;
  category: Category;
  technologies: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern responsive personal portfolio website for showcasing skills, projects and services.",
    category: "Web",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
  {
    title: "E-commerce Website",
    description:
      "A modern e-commerce website for browsing products, managing a shopping cart and creating a smooth online shopping experience.",
    category: "Web",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
  {
    title: "Movie Watchlist App",
    description:
      "A mobile movie watchlist application for discovering, organizing and managing favorite movies.",
    category: "Mobile App",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
  {
    title: "Trading Journal App",
    description:
      "A trading journal application for recording trades, tracking performance and analyzing trading results.",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "PostgreSQL"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
  {
    title: "Mini System",
    description:
      "A software system designed to manage data, users and everyday business operations efficiently.",
    category: "Systems",
    technologies: ["Java", "PostgreSQL", "JDBC"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
{
  title: "TeleSystem",
  description:
    "A telecommunications management system for managing customers, services, accounts and telecom-related operations.",
  category: "Systems",
  technologies: ["Java", "PostgreSQL", "JDBC"],
  github: "https://github.com/",
  demo: "http://localhost:5173/",
},
  {
    title: "Web UI/UX Design",
    description:
      "A modern web interface design focused on usability, accessibility and a clean user experience.",
    category: "UI/UX Design",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "A clean mobile application interface designed with a strong focus on usability and user experience.",
    category: "UI/UX Design",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    github: "https://github.com/",
    demo: "http://localhost:5173/",
  },
];

function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories: ("All" | Category)[] = [
    "All",
    "Web",
    "Mobile App",
    "Systems",
    "UI/UX Design",
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <p>
          Here are some of the projects I have built while learning and
          developing my skills.
        </p>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <span>{project.category}</span>
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a href={project.demo}>Live Demo ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
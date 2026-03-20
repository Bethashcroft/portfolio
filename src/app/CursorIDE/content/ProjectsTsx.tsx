"use client";

interface Project {
  name: string;
  description: string;
  tech: string[];
  linkToProject?: string;
  linkToGithub: string;
  starred?: boolean;
}

const projects: Project[] = [
  {
    name: "Doggo Pals",
    description: "A detailed doggy day care business website",
    tech: ["HTML", "CSS", "JavaScript"],
    linkToProject: "https://bethashcroft.github.io/WebsiteProjectCN/",
    linkToGithub: "https://github.com/Bethashcroft/WebsiteProjectCN",
  },
  {
    name: "Hangman",
    description: "The classic game built using jQuery and a dictionary API",
    tech: ["jQuery", "API", "JavaScript"],
    linkToProject: "https://bethshangman.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/hangman",
    starred: true,
  },
  {
    name: "Chat Bot",
    description: "A chat bot powered by Gemini 2.5 Flash Lite",
    tech: ["React", "TypeScript", "Gemini API", "Vite"],
    linkToProject: "https://bethsaichatbot.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/chat-bot",
    starred: true,
  },
  {
    name: "Joke Generator",
    description: "A joke generator app using a free API",
    tech: ["React", "TypeScript", "API", "Vite"],
    linkToProject: "https://bethsjokegenerator.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/joke-generator",
    starred: true,
  },
  {
    name: "Absence Calculator",
    description:
      "A calculator that allows companies to work out the costs of absences",
    tech: ["JavaScript", "CSS", "HTML"],
    linkToProject: "https://absencecalc.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/absencecalc",
  },
  {
    name: "Random Number Generator",
    description: "A generator that picks a random number from any range",
    tech: ["JavaScript", "CSS", "HTML"],
    linkToProject: "https://bethsrandomnumbergenerator.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/randomnumbergenerator",
  },
  {
    name: "Picnic Hamper",
    description: "A website designed for a new startup based in Bolton",
    tech: ["HTML", "CSS", "JavaScript"],
    linkToProject: "https://picnichamper.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/picnichamper",
  },
  {
    name: "50th Calendar",
    description:
      "Designed as a 50th birthday present, gives you clues to what your year entails!",
    tech: ["JavaScript", "CSS", "HTML"],
    linkToProject: "https://50thbdaycalendar.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/50thbday",
  },
];

const ProjectsTsx = () => {
  const starProjects = projects.filter((p) => p.starred);
  const olderProjects = projects.filter((p) => !p.starred);
  return (
    <div className="max-w-3xl mx-auto font-mono">
      <div className="flex items-center gap-2 text-cursor-text-muted text-xs mb-6">
        <span className="text-cyan-400">⚛</span>
        <span>projects.tsx</span>
        <span className="text-cursor-text-muted/50">
          - {projects.length} projects
        </span>
      </div>

      <h1 className="text-2xl font-bold text-cursor-text mb-2">
        Featured projects
      </h1>
      <p className="text-cursor-text-muted text-sm mb-6">
        A collection of things I&apos;ve built while learning and growing as a
        developer.
      </p>

      <h2 className="text-lg font-semibold text-cursor-text mb-3 flex items-center gap-2">
        <span className="text-yellow-400">★</span>Star Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {starProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <h2 className="text-lg font-semibold text-cursor-text mb-3 flex items-center gap-2">
        <span className="text-cursor-text-muted">📁</span> Older Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {olderProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-cursor-border rounded-lg bg-cursor-sidebar p-4 flex flex-col justify-between gap-3 hover:border-cursor-purple/50 transition-colors">
      <div>
        <h3 className="text-cursor-text font-semibold text-sm mb-1">
          {project.name}
        </h3>
        <p className="text-cursor-text-muted text-xs leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded-full bg-cursor-purple/10 text-cursor-purple border border-cursor-purple/20"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.linkToProject && (
          <a
            href={project.linkToProject}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cursor-purple hover:text-cursor-text transition-colors"
          >
            Live Demo →
          </a>
        )}
        <a
          href={project.linkToGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-cursor-text-muted hover:text-cursor-text transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectsTsx;

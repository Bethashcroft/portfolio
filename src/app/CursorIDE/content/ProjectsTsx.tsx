"use client";

interface Project {
  name: string;
  description: string;
  tech: string[];
  linkToProject?: string;
  linkToGithub: string;
  starred?: boolean;
  comingSoon?: boolean;
}

const comingSoonProjects: Project[] = [
  {
    name: "Readers Realm",
    description:
      "A Goodreads-style book app—track what you read, discover titles, and manage your library, built to feel faster and more personal.",
    tech: ["React", "TypeScript", "Vite", "C#"],
    linkToGithub: "https://github.com/Bethashcroft/readers-realm",
    comingSoon: true,
  },
  {
    name: "SkinRoutine",
    description:
      "A skincare diary: log AM/PM routines, track products and ingredients, and get personalised recommendations for your skin type.",
    tech: ["React", "TypeScript", "Vite", "Supabase"],
    linkToGithub: "https://github.com/Bethashcroft/skinroutine-app",
    comingSoon: true,
  },
];

const projects: Project[] = [
  {
    name: "Doggo Pals",
    description: "A detailed doggy day care business website",
    tech: ["HTML", "CSS", "JavaScript"],
    linkToProject: "https://bethashcroft.github.io/WebsiteProjectCN/",
    linkToGithub: "https://github.com/Bethashcroft/WebsiteProjectCN",
  },
  {
    name: "Mental Health Check-In",
    description:
      "A daily mood tracker that helps you spot patterns and look after your wellbeing",
    tech: ["React", "TypeScript", "Recharts", "Vite"],
    linkToProject: "https://mentalhealthcheckin.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/mentalhealthcheckin",
    starred: true,
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
          - {projects.length} projects · {comingSoonProjects.length} in progress
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
        <span className="text-cyan-400">🚀</span> Coming Soon
      </h2>
      <p className="text-cursor-text-muted text-xs mb-4 -mt-1">
        What I&apos;m building next — repos are open; live demos on the way.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {comingSoonProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

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
    <div
      className={`border rounded-lg bg-cursor-sidebar p-4 flex flex-col justify-between gap-3 transition-colors ${
        project.comingSoon
          ? "border-dashed border-cyan-400/40 hover:border-cyan-400/70 shadow-[0_0_12px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          : project.starred
            ? "border-yellow-400/40 hover:border-yellow-400/70 shadow-[0_0_12px_rgba(250,204,21,0.15)] hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]"
            : "border-cursor-border hover:border-cursor-purple/50"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-cursor-text font-semibold text-sm">
            {project.starred && (
              <span className="text-yellow-400 mr-1.5">★</span>
            )}
            {project.name}
          </h3>
          {project.comingSoon && (
            <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
              Coming soon
            </span>
          )}
        </div>
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
        {project.linkToProject && !project.comingSoon && (
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
          className={`text-xs transition-colors ${
            project.comingSoon
              ? "text-cyan-400 hover:text-cyan-300"
              : "text-cursor-text-muted hover:text-cursor-text"
          }`}
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectsTsx;

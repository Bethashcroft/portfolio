"use client";
type FileName =
  | "readme.md"
  | "about.tsx"
  | "projects.tsx"
  | "skills.tsx"
  | "contact.tsx";
interface ReadmeMdProps {
  onNavigate: (file: FileName) => void;
}
const ReadmeMd = ({ onNavigate }: ReadmeMdProps) => {
  return (
    <div className="max-w-2xl mx-auto font-mono">
      <div className="flex items-center gap-2 text-cursor-text-muted text-xs mb-6">
        <span>📄</span>
        <span>readme.md</span>
        <span className="text-cursor-text-muted/50">— 1 min read</span>
      </div>
      <h1 className="text-3xl font-bold text-cursor-text mb-2">
        # Beth Ashcroft
      </h1>
      <p className="text-cursor-purple text-lg mb-6">Software Developer</p>
      <div className="w-full h-px bg-cursor-border mb-6" />
      <h2 className="text-xl font-semibold text-cursor-text mb-3">## About</h2>
      <p className="text-cursor-text-muted leading-relaxed mb-6">
        Welcome to my portfolio. I&apos;m a software developer with a background
        in C#, SQL, JavaScript, and Azure DevOps. I&apos;m currently expanding
        into TypeScript and React, building modern web applications with Next.js
        and Tailwind CSS.
      </p>
      <h2 className="text-xl font-semibold text-cursor-text mb-3">
        ## Quick Links
      </h2>
      <div className="flex flex-col gap-1 mb-6">
        <NavLink
          label="📂 about.tsx"
          description="More about me"
          onClick={() => onNavigate("about.tsx")}
        />
        <NavLink
          label="📂 projects.tsx"
          description="Things I've built"
          onClick={() => onNavigate("projects.tsx")}
        />
        <NavLink
          label="📂 skills.tsx"
          description="Tech stack & tools"
          onClick={() => onNavigate("skills.tsx")}
        />
        <NavLink
          label="📂 contact.tsx"
          description="Get in touch"
          onClick={() => onNavigate("contact.tsx")}
        />
      </div>
      <div className="w-full h-px bg-cursor-border mb-6" />
      <h2 className="text-xl font-semibold text-cursor-text mb-3">## Status</h2>
      <div className="flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-cursor-text-muted">Open to opportunities</span>
      </div>
    </div>
  );
};

interface NavLinkProps {
  label: string;
  description: string;
  onClick: () => void;
}

const NavLink = ({ label, description, onClick }: NavLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors hover:bg-cursor-active/50 group"
    >
      <span className="text-cursor-purple text-sm">{label}</span>
      <span className="text-cursor-text-muted text-xs group-hover:text-cursor-text transition-colors">
        {" "}
        - {description}
      </span>
    </button>
  );
};

export default ReadmeMd;

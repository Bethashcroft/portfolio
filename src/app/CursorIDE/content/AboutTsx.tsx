"use client";

const AboutTsx = () => {
  return (
    <div className="max-w-2xl mx-auto font-mono">
      <div className="flex items-center gap-2 text-cursor-text-muted text-xs mb-6">
        <span className="text-cyan-400">⚛</span>
        <span>about.tsx</span>
      </div>

      <div className="text-cursor-text-muted text-sm mb-6 leading-relaxed">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-yellow-300">About</span>{" "}
        <span className="text-purple-400">=</span>{" "}
        <span className="text-blue-400">() =&gt;</span>{" "}
        <span className="text-yellow-300">{"{"}</span>
      </div>

      <div className="ml-4">
        <div className="flex gap-4 items-start mb-8">
          <div className="w-24 h-24 rounded-lg bg-cursor-active border border-cursor-border flex items-center justify-center text-4xl shrink-0">
            👩‍💻
          </div>
          <div>
            <h1 className="text-2xl font-bold text-cursor-text mb-1">
              Beth Ashcroft
            </h1>
            <p className="text-cursor-purple text-sm mb-3">
              Software Developer
            </p>
            <p className="text-cursor-text-muted text-sm leading-relaxed">
              I&apos;m a software developer with a strong foundation in backend
              development using C# and SQL, now I am trying to develop my
              frontend experience using modern frontend technologies. I love
              building things that solve real problems for teams or individuals.
            </p>
          </div>
        </div>

        <Section title="Background">
          <p className="text-cursor-text-muted text-sm leading-relaxed">
            My journey started with C#, jQuery, HTML, and CSS — building
            full-stack applications with .NET. I&apos;ve worked with Azure
            DevOps, SQL Server, and xUnit for testing. Now I&apos;m diving deep
            into TypeScript, React, and Next.js to build modern, responsive web
            applications.
          </p>
        </Section>

        <Section title="What I am working on">
          <ul className="text-cursor-text-muted text-sm space-y-2">
            <ListItem>
              Learning TypeScript & React through a range of projects
            </ListItem>
            <ListItem>
              Building this portfolio (the one you are looking at right now)
            </ListItem>
            <ListItem>
              Exploring AI intergrations using Gemini & Claude
            </ListItem>
          </ul>
        </Section>

        <Section title="When I am not coding">
          <p className="text-cursor-text-muted text-sm leading-relaxed">
            I am currently spending 2026 travelling Europe! In my spare time, I
            am reading thriller books or attending Wigan Athletic matches. Up
            the Tics!
          </p>
        </Section>
      </div>

      <div className="text-cursor-text-muted text-sm mt-6">
        <span className="text-yellow-300">{"}"}</span>
        <span className="text-purple-400">;</span>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-cursor-text mb-2 flex items-center gap-2">
        <span className="text-cursor-purple text-xs">▸</span>
        {title}
      </h2>
      {children}
    </div>
  );
};

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="flex items-start gap-2">
      <span className="text-cursor-purple mt-1"></span>
      <span>{children}</span>
    </li>
  );
};

export default AboutTsx;

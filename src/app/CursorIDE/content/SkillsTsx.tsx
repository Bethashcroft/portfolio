"use client";

import { ReactNode } from "react";
import {
  SiSharp,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiJquery,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzureDevops, VscTerminal } from "react-icons/vsc";
import { TbTestPipe } from "react-icons/tb";
interface Skill {
  name: string;
  level: "learning" | "comfortable" | "confident" | "expert";
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "C#",
        level: "confident",
        icon: <SiSharp className="text-purple-400" />,
      },
      {
        name: "TypeScript",
        level: "learning",
        icon: <SiTypescript className="text-blue-400" />,
      },
      {
        name: "SQL",
        level: "confident",
        icon: <DiMsqlServer className="text-red-400" />,
      },
      {
        name: "HTML",
        level: "confident",
        icon: <SiHtml5 className="text-orange-400" />,
      },
      {
        name: "CSS",
        level: "comfortable",
        icon: <SiCss className="text-blue-500" />,
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        level: "learning",
        icon: <SiReact className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        level: "learning",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: ".NET",
        level: "confident",
        icon: <SiDotnet className="text-purple-500" />,
      },
      {
        name: "jQuery",
        level: "comfortable",
        icon: <SiJquery className="text-blue-300" />,
      },
      {
        name: "Tailwind CSS",
        level: "learning",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Azure DevOps",
        level: "confident",
        icon: <VscAzureDevops className="text-blue-500" />,
      },
      {
        name: "Git",
        level: "confident",
        icon: <SiGit className="text-blue-500" />,
      },
      {
        name: "xUnit",
        level: "comfortable",
        icon: <TbTestPipe className="text-green-400" />,
      },
      {
        name: "Cursor",
        level: "comfortable",
        icon: <VscTerminal className="text-cursor-purple" />,
      },
    ],
  },
];

const levelConfig: Record<
  string,
  { label: string; colour: string; width: string }
> = {
  learning: { label: "Learning", colour: "bg-blue-500", width: "w-1/4" },
  comfortable: {
    label: "Comfortable",
    colour: "bg-yellow-500",
    width: "w-2/4",
  },
  confident: { label: "Confident", colour: "bg-green-500", width: "w-3/4" },
  expert: { label: "Expert", colour: "bg-cursor-purple", width: "w-full" },
};

const SkillsTsx = () => {
  return (
    <div className="max-w-2xl mx-auto font-mono">
      <div className="flex items-center gap-2 text-cursor-text-muted text-xs mb-6">
        <span className="text-cyan-400">⚛</span>
        <span>skills.tsx</span>
      </div>

      <h1 className="text-2xl font-bold text-cursor-text mb-2">
        Skills & Technologies
      </h1>
      <p className="text-cursor-text-muted text-sm mb-6">
        An honest snapshot of where I am right now
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
        {Object.entries(levelConfig).map(([key, config]) => (
          <div
            key={key}
            className="flex items-center gap-2 text-xs text-cursor-text-muted"
          >
            <span
              className={`w-3 h-3 rounded-full ${config.colour} shrink-0`}
            />
            <span>{config.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <SkillGroup key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
};

interface SkillGroupProps {
  category: SkillCategory;
}

const SkillGroup = ({ category }: SkillGroupProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-cursor-text mb-3 flex items-center gap-2">
        <span className="text-cursor-purple text-xs">▸</span>
        {category.title}
      </h2>

      <div className="flex flex-col gap-2">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

interface SkillBarProps {
  skill: Skill;
}

const SkillBar = ({ skill }: SkillBarProps) => {
  const config = levelConfig[skill.level];

  return (
    <div className="flex items-center gap-3 group">
      <div className="w-32 flex items-center gap-2 text-sm shrink-0">
        <span className="text-base">{skill.icon}</span>
        <span className="text-cursor-text">{skill.name}</span>
      </div>

      <div className="flex-1 h-2 bg-cursor-active rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${config.colour} ${config.width} transition-all duration-500`}
        />
      </div>

      <span className="text-[10px] text-cursor-text-muted w-20 text-right opacity-0 group-hover:opacity-100 transition-opacity">
        {config.label}
      </span>
    </div>
  );
};

export default SkillsTsx;

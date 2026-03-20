"use client";

import { useState } from "react";

type FileName =
  | "readme.md"
  | "about.tsx"
  | "projects.tsx"
  | "skills.tsx"
  | "contact.tsx";

interface SidebarProps {
  activeFile: FileName;
  onFileSelect: (file: FileName) => void;
}

interface FileEntry {
  name: FileName;
  icon: string;
  colour: string;
}

const files: FileEntry[] = [
  { name: "readme.md", icon: "📄", colour: "text-blue-400" },
  { name: "about.tsx", icon: "⚛", colour: "text-cyan-400" },
  { name: "projects.tsx", icon: "⚛", colour: "text-cyan-400" },
  { name: "skills.tsx", icon: "⚛", colour: "text-cyan-400" },
  { name: "contact.tsx", icon: "⚛", colour: "text-cyan-400" },
];

const Sidebar = ({ activeFile, onFileSelect }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-48 bg-cursor-sidebar border-r border-cursor-border flex flex-col select-none">
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-cursor-text-muted">
        Explorer
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-cursor-text-muted hover:text-cursor-text text-left transition-colors"
      >
        <span className="ml-1">{isExpanded ? "▾" : "▸"} portfolio-website</span>
      </button>

      {isExpanded && (
        <div className="flex flex-col">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => onFileSelect(file.name)}
              className={`flex items-center gap-2 px-4 py-1 text-sm text-left transition-colors
                ${
                  activeFile === file.name
                    ? "bg-cursor-active text-cursor-text"
                    : "text-cursor-text-muted hover:bg-cursor-active/50 hover:text-cursor-text"
                }`}
            >
              <span className={file.colour}>{file.icon}</span>
              {file.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

"use client";

import { useState } from "react";

type FileName =
  | "readme.md"
  | "about.tsx"
  | "projects.tsx"
  | "skills.tsx"
  | "contact.tsx";

interface MobileNavProps {
  activeFile: FileName;
  onFileSelect: (file: FileName) => void;
}

const files: { name: FileName; icon: string }[] = [
  { name: "readme.md", icon: "📄" },
  { name: "about.tsx", icon: "⚛" },
  { name: "projects.tsx", icon: "⚛" },
  { name: "skills.tsx", icon: "⚛" },
  { name: "contact.tsx", icon: "⚛" },
];

const MobileNav = ({ activeFile, onFileSelect }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (file: FileName) => {
    onFileSelect(file);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 h-9 bg-cursor-titlebar border-b border-cursor-border text-xs text-cursor-text w-full"
      >
        {" "}
        <svg
          className="w-4 h-4 text-cursor-text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="text-cursor-purple">{activeFile}</span>
        <span className="text-cursor-text-muted ml-auto">
          {isOpen ? "▴" : "▾"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-cursor-sidebar border-b border-cursor-border z-50">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => handleSelect(file.name)}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left transition-colors
                    ${
                      activeFile === file.name
                        ? "bg-cursor-active text-cursor-text"
                        : "text-cursor-text-muted hover:bg-cursor-active/50 hover:text-cursor-text"
                    }`}
            >
              <span className="text-cyan-400">{file.icon}</span>
              {file.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;

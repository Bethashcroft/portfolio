"use client";

type FileName =
  | "readme.md"
  | "about.tsx"
  | "projects.tsx"
  | "skills.tsx"
  | "contact.tsx";

interface TabBarProps {
  activeFile: FileName;
  onTabSelect: (file: FileName) => void;
  onTabClose: (file: FileName) => void;
  openFiles: FileName[];
}

const fileIcons: Record<string, { icon: string; colour: string }> = {
  ".md": { icon: "📄", colour: "text-blue-400" },
  ".tsx": { icon: "⚛", colour: "text-cyan-400" },
};

const getExtension = (fileName: string): string => {
  const lastDot = fileName.lastIndexOf(".");
  return lastDot !== -1 ? fileName.slice(lastDot) : "";
};

const TabBar = ({
  activeFile,
  onTabSelect,
  openFiles,
  onTabClose,
}: TabBarProps) => {
  return (
    <div className="flex items-center bg-cursor-titlebar border-b border-cursor-border h-9 overflow-x-auto">
      {openFiles.map((file) => {
        const ext = getExtension(file);
        const iconData = fileIcons[ext] || {
          icon: "📄",
          colour: "text-gray-400",
        };

        return (
          <div
            key={file}
            onClick={() => onTabSelect(file)}
            className={`flex items-center gap-1.5 px-3 h-full text-xs border-r border-cursor-border whitespace-nowrap transition-colors cursor-pointer group
              ${
                activeFile === file
                  ? "bg-cursor-bg text-cursor-text border-t-2 border-t-cursor-purple"
                  : "bg-cursor-titlebar text-cursor-text-muted hover:bg-cursor-active/50"
              }`}
          >
            <span className={iconData.colour}>{iconData.icon}</span>
            <span>{file}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(file);
              }}
              className="ml-1 w-4 h-4 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-cursor-active transition-opacity text-cursor-text-muted hover:text-cursor-text"
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;

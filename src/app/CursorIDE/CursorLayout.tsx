"use client";

import { useState, useEffect } from "react";
import TitleBar from "./TitleBar";
import StatusBar from "./StatusBar";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import ReadmeMd from "./content/ReadmeMd";
import AboutTsx from "./content/AboutTsx";
import ProjectsTsx from "./content/ProjectsTsx";
import SkillsTsx from "./content/SkillsTsx";
import ContactTsx from "./content/ContactTsx";
import Starfield from "./StarField";
import MobileNav from "./MobileNav";

type FileName =
  | "readme.md"
  | "about.tsx"
  | "projects.tsx"
  | "skills.tsx"
  | "contact.tsx";

const validFiles: FileName[] = [
  "readme.md",
  "about.tsx",
  "projects.tsx",
  "skills.tsx",
  "contact.tsx",
];

const isValidFile = (file: string): file is FileName => {
  return validFiles.includes(file as FileName);
};

const CursorLayout = () => {
  const [activeFile, setActiveFile] = useState<FileName>("readme.md");
  const [openFiles, setOpenFiles] = useState<FileName[]>(["readme.md"]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedActive = localStorage.getItem("activeFile");
    const savedOpen = localStorage.getItem("openFiles");

    if (savedActive && isValidFile(savedActive)) {
      setActiveFile(savedActive);
    }

    if (savedOpen) {
      try {
        const parsed = JSON.parse(savedOpen) as string[];
        const valid = parsed.filter(isValidFile);
        if (valid.length > 0) {
          setOpenFiles(valid);
        }
      } catch {
        localStorage.removeItem("openFiles");
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("activeFile", activeFile);
    localStorage.setItem("openFiles", JSON.stringify(openFiles));
  }, [activeFile, openFiles, isLoaded]);

  const handleFileSelect = (file: FileName) => {
    setActiveFile(file);
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
  };

  const handleCloseTab = (file: FileName) => {
    const newOpenFiles = openFiles.filter((f) => f !== file);

    if (newOpenFiles.length === 0) {
      setOpenFiles(["readme.md"]);
      setActiveFile("readme.md");
      return;
    }

    if (activeFile === file) {
      const closedIndex = openFiles.indexOf(file);
      const newActive = newOpenFiles[Math.max(0, closedIndex - 1)];
      setActiveFile(newActive);
    }

    setOpenFiles(newOpenFiles);
  };

  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-transparent p-4">
        <Starfield />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-transparent p-4">
      <Starfield />
      <div className=" relative z-10 w-full h-full max-w-7xl max-h-[900px] flex flex-col rounded-lg overflow-hidden border border-cursor-border shadow-2xl shadow-purple-900/20">
        <TitleBar />

        <div className="flex flex-1 overflow-hidden">
          <div className="hidden md:flex">
            <ActivityBar onFileSelect={handleFileSelect} />
          </div>
          <div className="hidden md:flex">
            <Sidebar activeFile={activeFile} onFileSelect={handleFileSelect} />
          </div>

          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="hidden md:block">
              <TabBar
                activeFile={activeFile}
                onTabSelect={setActiveFile}
                onTabClose={handleCloseTab}
                openFiles={openFiles}
              />
            </div>
            <div className="md:hidden shrink-0">
              <MobileNav
                activeFile={activeFile}
                onFileSelect={handleFileSelect}
              />
            </div>

            <div className="flex-1 bg-cursor-bg p-4 md:p-6 overflow-y-auto">
              {activeFile === "readme.md" && (
                <ReadmeMd onNavigate={handleFileSelect} />
              )}
              {activeFile === "about.tsx" && <AboutTsx />}
              {activeFile === "projects.tsx" && <ProjectsTsx />}
              {activeFile === "skills.tsx" && <SkillsTsx />}
              {activeFile === "contact.tsx" && <ContactTsx />}
            </div>
          </div>
        </div>

        <StatusBar />
      </div>
    </div>
  );
};

export default CursorLayout;

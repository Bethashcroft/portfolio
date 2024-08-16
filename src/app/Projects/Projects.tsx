"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const allProjects: {
  name: string;
  description: string;
  linkToProject?: string;
  linkToGithub: string;
}[] = [
  {
    name: "Doggo Pals",
    description: "A detailed doggy day care business website",
    linkToProject: "https://bethashcroft.github.io/WebsiteProjectCN/",
    linkToGithub: "https://github.com/Bethashcroft/WebsiteProjectCN",
  },
  {
    name: "Hangman",
    description: "The classic game built using JQuery and a dictionary API",
    linkToProject: "https://bethshangman.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/hangman",
  },
  {
    name: "Battleships",
    description: "The classic game played in your console log",
    linkToGithub: "https://github.com/Bethashcroft/battleships-consolegame",
  },
  {
    name: "Beth's Wordle",
    description: "A wordle that changes when you refresh!",
    linkToProject: "https://bethswordle.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/bethswordle",
  },
  {
    name: "Absence Calculator",
    description:
      "A calculator that allows companies to work out the costs of absences",
    linkToProject: "https://absencecalc.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/absencecalc",
  },
  {
    name: "Random Number Generator",
    description: "A generator that picks a random number from any range",
    linkToProject: "https://bethsrandomnumbergenerator.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/randomnumbergenerator",
  },
  {
    name: "Picnic Hamper",
    description: "A website designed for a new startup based in Bolton",
    linkToProject: "https://picnichamper.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/picnichamper",
  },
  {
    name: "50th Calendar",
    description:
      "Designed as a 50th birthday present, gives you clues to what your year entails!",
    linkToProject: "https://50thbdaycalendar.netlify.app/",
    linkToGithub: "https://github.com/Bethashcroft/50thbday",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4" id="projects">
      <h2 className="text-3xl">Projects</h2>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {allProjects.map((project) => (
          <Card
            key={project.name}
            className="bg-[#4a044e20] flex flex-col justify-between w-full min-h-[20em] rounded-xl sm:w-full md:w-[49%] lg:w-[32%] mb-4"
          >
            <div className="flex flex-col h-[90%]">
              <CardHeader className="text-center text-2xl">
                {project.name}
              </CardHeader>
              <CardContent className="text-center">
                <em>{project.description}</em>
              </CardContent>
            </div>
            <CardFooter className="flex justify-evenly">
              <Button
                variant="outline"
                className="rounded"
                onClick={() => {
                  window.open(project.linkToProject, "_blank");
                }}
              >
                View Project
              </Button>
              <Button
                variant="outline"
                className="rounded"
                onClick={() => {
                  window.open(project.linkToGithub, "_blank");
                }}
              >
                View Github
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

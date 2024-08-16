"use client";
import { Toaster } from "@/components/ui/toaster";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <div className="flex flex-col gap-4 w-screen px-10">
        <Intro />
        <Projects />
        <Contact />
      </div>
      <Toaster />
    </div>
  );
};

export default Home;

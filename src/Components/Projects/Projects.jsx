import React from "react";
import ProjectsData from "./ProjectsData";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      <div className="relative pb-16">
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Here you will find some of the personal and clients projects that
              I created.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800 " />
          <ProjectsData />
        </div>
      </div>
    </div>
  );
}

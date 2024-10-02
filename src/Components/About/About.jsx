import React from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { useEffect } from "react";
import SkillsData from "./SkillsData";

import abdallah from "../../Images/Desktop - 1.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      <div className="relative pb-16 ">
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              About
            </h2>
            <p className="mt-4 text-zinc-400">
              Here you will find more information about me, what I do, and my
              current skills.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />

          <div className="max-w-2xl lg:max-w-full flex-col-reverse flex justify-between lg:gap-8 gap-8 lg:flex lg:flex-row mx-auto lg:mx-0 animate-fadeIn">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display">
                Get to know me!
              </h2>
              <div>
                <p className="text-zinc-400 leading-7 mt-4">
                  Hi, I'm{" "}
                  <span className="font-display font-bold tracking-tight  text-zinc-100">
                    Abdallah Noor
                  </span>{" "}
                  a{" "}
                  <span className=" text-zinc-100 font-display font-semibold">
                    Frontend Web Developer
                  </span>{" "}
                  based in Egypt, building the Front-end of Websites and Web
                  Applications that leads to the success of the overall product.
                  Check out some of my work in the{" "}
                  <span className=" text-zinc-100 font-display font-semibold">
                    Projects
                  </span>{" "}
                  Page.
                </p>
                <p className="text-zinc-400 leading-7 mt-4">
                  I'm open to{" "}
                  <span className=" text-zinc-100 font-display font-semibold">
                    Job
                  </span>{" "}
                  opportunities where I can contribute, learn and grow. If you
                  have a good opportunity that matches my skills and experience
                  then don't hesitate to{" "}
                  <span className=" text-zinc-100 font-display font-semibold">
                    Contact
                  </span>{" "}
                  me.
                </p>
                {/* <Link
                  to="https://drive.google.com/file/d/1KJPrdlUrI1IqeRZD4lTcZiWI9ghMMgcq/view?usp=sharing"
                  target="_blank"
                  className="duration-500 text-zinc-400 hover:text-zinc-100 text-sm border hover:border-zinc-400/95 border-zinc-600 p-4 rounded inline-flex items-center gap-2 mt-8 "
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </Link> */}
                {/* <Link
                  to="https://drive.google.com/file/d/1_NXZ2mTNvwSAdPyYoyIdGcJKHYgOVsCI/view?usp=sharing"
                  target="_blank"
                  className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-4 text-sm text-slate-400 transition-colors  gap-2 mt-8 "
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </Link> */}
              </div>
            </div>
            {/* <div className="w-1/2 lg:w-1/4 overflow-hidden relative duration-700 border rounded-xl group md:gap-8  hover:border-zinc-400/95 border-zinc-600 ">
              <img
                src={abdallah}
                alt=""
                className="w-full hover:scale-105 grayscale hover:grayscale-0	 duration-1000"
              />
            </div> */}
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0 animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-display">My Skills</h2>
            <SkillsData />
          </div>
        </div>
      </div>
    </div>
  );
}

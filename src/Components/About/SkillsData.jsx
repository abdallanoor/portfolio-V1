import React from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
// icons
import jsIcon from "../../icons/js.svg";
import reactIcon from "../../icons/react.svg";
import htmlIcon from "../../icons/html.svg";
import cssIcon from "../../icons/css.svg";
import tailwindIcon from "../../icons/tailwind.svg";
import typescriptIcon from "../../icons/typescript.svg";
import reduxIcon from "../../icons/redux.svg";
import bootstrapIcon from "../../icons/bootstrap.svg";
import gitIcon from "../../icons/git.svg";
import nextIcon from "../../icons/next.svg";
// icons

export default function SkillsData() {
  const icons = [
    {
      src: reactIcon,
      title: "React.js",
    },
    {
      src: jsIcon,
      title: "JavaScript",
    },

    {
      id: 3,
      src: htmlIcon,
      title: "HTML5",
    },
    {
      id: 5,
      src: tailwindIcon,
      title: "Tailwind",
    },
    {
      src: cssIcon,
      title: "CSS3",
    },
    {
      src: gitIcon,
      title: "Git",
    },
    {
      src: bootstrapIcon,
      title: "Bootstrap",
    },
    {
      src: reduxIcon,
      title: "Redux",
    },
    {
      src: typescriptIcon,
      title: "TypeScript",
    },

    {
      src: nextIcon,
      title: "Next.js",
    },
  ];
  return (
    <>
      <div className="flex items-center gap-10 max-sm:gap-8 flex-wrap mt-4">
        {icons.map((icon) => (
          <div
            key={icon.title}
            className="text-center flex flex-col items-center gap-2 max-sm:gap-1 w-20 max-sm:w-10"
          >
            <img
              src={icon.src}
              alt={icon.title}
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <p className="text-zinc-100 text-sm ">{icon.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

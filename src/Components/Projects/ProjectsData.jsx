import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

import cruds from "../../Images/cruds.webp";
import iwan from "../../Images/iwan.webp";
import dashboard from "../../Images/dashboard.webp";
import storeManagement from "../../Images/store management.webp";
import commerce from "../../Images/ecommercee.webp";
import zoom from "../../Images/zoomclone.webp";
import ai from "../../Images/ai.jpg";
import aiSaas from "../../Images/Ai platform.jpg";
import brainwave from "../../Images/Brain.webp";
import batient from "../../Images/batient.webp";

export default function ProjectsData() {
  const projects = [
    {
      href: "https://iwanacademy.net/",
      src: iwan,
      title: "Iwan Academy",
      description:
        "I developed all the pages using React.js, integrating APIs, configured the website to support multiple languages.",
    },
    {
      href: "https://warehouse-management-project.vercel.app/",
      src: storeManagement,
      title: "Warehouse Management",
      description:
        "I used React.js, Developed a comprehensive warehouse management system for inventory, customers, vendors, sales, purchases, and invoicing.",
    },
    {
      href: "https://pixel-store-beta.vercel.app/",
      src: commerce,
      title: "E-commerce",
      description:
        "I used React.js, integrated user authentication, built a detailed product catalog, optimized the shopping cart, and integrated Stripe payment.",
    },
    {
      href: "https://healthcare-management-project.vercel.app/",
      src: batient,
      title: "Healthcare Management",
      description:
        "I used Next.js, Developed a healthcare platform that streamlines patient registration, appointment scheduling, and medical records, and implement complex forms and SMS notifications.",
    },
    {
      href: "https://zoompixel.vercel.app/",
      src: zoom,
      title: "Zoom clone",
      description:
        "I used Next.js, Develop a professional video conferencing app.",
    },
    {
      href: "https://pixel-imaginify.vercel.app/",
      src: aiSaas,
      title: "AI SaaS Platform",
      description:
        "I used Next.js, Build a REAL Software-as-a-Service app with AI features and a payments and credits system.",
    },
    {
      href: "https://ai-image-generation-abdallanoor.vercel.app/",
      src: ai,
      title: "Ai Image Generation",
      description:
        "I used React.js, Create imaginative and visually stunning images through DALL-E AI and share them with the community.",
    },
    {
      href: "https://brainwave-abdallanoor.vercel.app/",
      src: brainwave,
      title: "Modern Landing Page",
      description:
        "I used React.js, create modern websites with sleek parallax effects and bento box layouts.",
    },
    {
      href: "https://abdallanoor.github.io/cruds/",
      src: cruds,
      title: "Cruds Project",
      description:
        "I implemented CRUDS operations with JavaScript for product management, including create, read, update, delete, search.",
    },

    {
      href: "https://abdallanoor.github.io/dashboard/",
      src: dashboard,
      title: "Dashboard",
      description:
        "I developed all pages with CSS, meticulously designing my own classes to elevate my proficiency in CSS.",
    },
    // {
    //   href: "https://abdallanoor.github.io/myworld/",
    //   src: world,
    //   title: "Landing Page",
    //   description:
    //     "I created this page using HTML and CSS, as one of the initial projects aimed at enhancing my skills in them.",
    // },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
        {projects.map((project) => (
          <Card key={project.title}>
            <Link to={project.href} target="_blank">
              <img
                src={project.src}
                alt={project.title}
                width={342}
                height={269}
                className="w-full"
              />
              <article className="p-4 md:p-7">
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
                  {project.title}
                </h2>
                <p className="z-20 mt-3 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {project.description}
                </p>
              </article>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

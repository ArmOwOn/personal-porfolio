"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "YOOM",
    description: "minimalist ZOOM clone website using NextJS & Stream & Clerk",
    image: "/images/projects/yoom.png",
    gitUrl: "https://github.com/ArmOwOn/yoom",
    previewUrl: "https://yoom-henna.vercel.app/",
  },
  {
    id: 2,
    title: "Brainwave",
    description: "Modern UI/UX website written in ReactJS and TailwindCSS",
    image: "/images/projects/modern-tailwind.png",
    gitUrl: "https://github.com/ArmOwOn/brainwave",
    previewUrl: "https://brainwave-ie5k9ixq7-armowons-projects.vercel.app/",
  },
  {
    id: 3,
    title: "GameHub",
    description: "Minimalist website written in ReactTS with fully functional Search and Sorting",
    image: "/images/projects/gamehub.png",
    gitUrl: "https://github.com/ArmOwOn/game-hub",
    previewUrl: "https://game-hub-nu-lake.vercel.app/",
  },
  {
    id: 4,
    title: "Chat App",
    description: "Minimalist Full-Stack Chat App written in JS & React",
    image: "/images/projects/chat-app.png",
    gitUrl: "https://github.com/ArmOwOn/chat-app",
    previewUrl: "https://github.com/ArmOwOn/chat-app",
  },
  {
    id: 5,
    title: "GPT-3 ArmOwOn",
    description: "Modern UI/UX website written in ReactTS with custom CSS",
    image: "/images/projects/modern-css.png",
    gitUrl: "https://github.com/ArmOwOn/gpt3-armowon",
    previewUrl: "https://gpt3-armowon.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

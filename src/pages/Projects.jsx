import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Store",
    description: "A modern e-commerce platform built with PHP and MySQL, featuring product listings, user authentication, cart management, and a secure checkout system.",
    image: "https://i.ibb.co/wZxmWjXb/ecomm.jpg", 
    github: "https://github.com/Priyanshubhamotra/Onlinesshop",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "E-Document Portal",
    description: "A document-sharing portal where users can upload, access, and manage personal documents securely. Built using React, Tailwind, and Firebase backend.",
    image: "https://image.thum.io/get/width/600/https://docportal-lac.vercel.app/",
    github: "https://github.com/Priyanshubhamotra/docportal",
    demo: "https://docportal-lac.vercel.app/",
    tech: ["React", "FireBase", "Tailwind"],
  },
  {
    title: "Stopwatch",
    description: "A simple and functional stopwatch web app with start, stop, and reset functionalities using clean JavaScript and CSS transitions.",
    image: "https://image.thum.io/get/width/600/https://prodigy-wd-02-liart.vercel.app/",
    github: "https://github.com/Priyanshubhamotra/PRODIGY_WD_02",
    demo: "https://prodigy-wd-02-liart.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Tic-Tac Toe",
    description: "A classic 2-player Tic-Tac-Toe game built using JavaScript with responsive design and turn-based logic.",
    image: "https://image.thum.io/get/width/600/https://prodigy-wd-03-rose-nine.vercel.app/",
    github: "https://github.com/Priyanshubhamotra/PRODIGY_WD_03",
    demo: "https://prodigy-wd-03-rose-nine.vercel.app/",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Restaurant Management System",
    description: "A console-based restaurant billing and table management system developed in C++, suitable for basic food order handling and bill generation.",
    image: "https://i.ibb.co/Hp2yqSvq/rest.png",
    github: "https://www.onlinegdb.com/ku0BxMRkf",
    demo: "https://www.onlinegdb.com/ku0BxMRkf",
    tech: ["C++"],
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0d1117] text-white px-6 py-12"
    >
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/10 hover:border-white/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-200 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-green-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

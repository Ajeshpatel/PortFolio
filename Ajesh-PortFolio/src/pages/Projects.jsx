import React from "react";
import { motion } from "framer-motion";

//Image imports
import job1 from "../assets/projects/job-portal1.png";
import job2 from "../assets/projects/job-portal1.1.png";
import job3 from "../assets/projects/job-portal1.2.png";
import job4 from "../assets/projects/job-portal1.3.png";
import task1 from "../assets/projects/task-m1.png";
import task2 from "../assets/projects/task-m1.1.png";
import task3 from "../assets/projects/task-m1.2.png";
import basket1 from "../assets/projects/e-basket1.png";
import basket2 from "../assets/projects/e-basket1.1.png";
import basket3 from "../assets/projects/e-basket1.2.png";
import basket4 from "../assets/projects/e-basket1.3.png";
import basket5 from "../assets/projects/e-basket1.4.png";
import auth1 from "../assets/projects/auth1.png";
import auth2 from "../assets/projects/auth1.1.png";
import auth3 from "../assets/projects/auth1.2.png";
import food1 from "../assets/projects/food1.png";
import food2 from "../assets/projects/food1.1.png";
import food3 from "../assets/projects/food1.2.png";
import food4 from "../assets/projects/food1.3.png";
import weather1 from "../assets/projects/weather1.png";
import weather2 from "../assets/projects/weather1.1.png";

const projects = [
  {
    title: "Job-Portal",
    description: "MERN stack app to manage tasks with responsive UI.",
    images: [job1, job2, job3, job4],
    liveLink: "",
    codeLink: "",
  },
  {
    title: "Task Management System",
    description: "MERN stack app to manage tasks with responsive UI.",
    images: [task1, task2, task3],
    liveLink: "https://task-management-system-frontend-c0pn.onrender.com",
    codeLink: "https://github.com/Ajeshpatel/task-management-system",
  },
  {
    title: "E-Basket Ecommerce",
    description: "React.js + Tailwind, Fully Responsive E-commerce Website",
    images: [basket1, basket2, basket3, basket4, basket5],
    liveLink: "https://e-green-basket-ecom.vercel.app",
    codeLink: "https://github.com/Ajeshpatel/E-GreenBasket",
  },
  {
    title: "Authentication",
    description: "MERN stack app to manage tasks with responsive UI.",
    images: [auth1, auth2, auth3],
    liveLink: "https://m-auth-front-end.vercel.app",
    codeLink: "https://github.com/Ajeshpatel/M-Auth-FrontEnd",
  },
  {
    title: "Food web app",
    description: "MERN stack app to manage tasks with responsive UI.",
    images: [food1, food2, food3, food4],
    liveLink: "https://react-task-chi.vercel.app",
    codeLink: "https://github.com/Ajeshpatel/React-Task",
  },
  {
    title: "Weather App",
    description: "React app using OpenWeather API for real-time weather.",
    images: [weather1, weather2],
    liveLink: "https://weather-app-ten-liart-66.vercel.app",
    codeLink: "https://github.com/Ajeshpatel/Weather-app",
  },
  // add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-4 rounded-xl shadow-md text-left"
            >
              <div className="overflow-x-auto w-full pb-2">
                <div className="flex gap-4 w-full snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full max-w-[90vw] h-48 sm:h-56 object-cover rounded-lg border snap-center flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mt-4 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

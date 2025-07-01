import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
  "RESTful API",
  "Python",
];

const Skills = () => {
  return (
    <section id="skills" className=" bg-gray-50 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-4 px-6 text-gray-800 font-medium hover:shadow-xl transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

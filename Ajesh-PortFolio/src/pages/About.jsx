import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className=" px-6 py-20 bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-7">
          Hi, I’m{" "}
          <span className="font-semibold text-blue-600">Ajesh Patel</span>, a
          passionate Full Stack Developer skilled in building modern, responsive
          web apps. With hands-on experience in <strong>MERN stack</strong>,
          REST APIs, and frontend libraries like <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>, I enjoy turning ideas into reality with
          clean, efficient code.
          <br />
          <br />
          I’m always eager to learn new technologies and collaborate on exciting
          projects that solve real-world problems. Let’s build something amazing
          together!
        </p>
      </motion.div>
    </section>
  );
};

export default About;

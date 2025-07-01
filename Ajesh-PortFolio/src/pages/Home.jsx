import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-scroll"; 
import profileImg from "../assets/Ajesh.pic-removebg-preview.png";

const Home = () => {
  return (
    // Section with ID for scroll linking
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-12 bg-gradient-to-br from-blue-50 to-purple-100"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left max-w-xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I’m <span className="text-blue-600">Ajesh Patel</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Full Stack Developer | MERN | React | Node.js | Express | MongoDB
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Ajesh_resume.pdf" 
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Download Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition font-medium cursor-pointer"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center md:justify-end"
      >
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-white bg-white">
          <img
            src={profileImg}
            alt="Ajesh Patel"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

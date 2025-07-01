import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <span className="font-semibold">Ajesh Patel</span>. All rights
            reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ajeshpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ajesh-patel-38240028a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="tel:+917987040027"
            className="text-sm hover:text-gray-300 transition"
          >
            📞 +91 79870 40027
          </a>

          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-200 transition"
          >
            <FaArrowUp className="text-xl animate-bounce-slow" />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";

import { Link } from "react-scroll";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Ajesh Patel</h1>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-70}
              className="capitalize font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
              activeClass="text-blue-600 font-semibold underline underline-offset-4"
              spy={true}
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="transition-transform"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-white/80 backdrop-blur-md rounded-b-xl px-6 pb-4 shadow-md"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {links.map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium capitalize cursor-pointer transition-colors"
                    activeClass="text-blue-600 font-semibold"
                    spy={true}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

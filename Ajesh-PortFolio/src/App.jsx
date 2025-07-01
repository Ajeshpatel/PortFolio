import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ToastContainer position="top-right" autoClose={3000} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

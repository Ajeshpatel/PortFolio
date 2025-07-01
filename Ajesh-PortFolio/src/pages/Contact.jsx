import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; 
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fkk9haf", // EmailJS service ID
        "template_toex5lf", // template ID
        formRef.current,
        "qdy5hOQUalAT4RMGX" // public key from EmailJS
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! ✅");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
          Contact Me
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 text-left"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <p className="text-sm text-gray-600 mb-2">Or find me here:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ajeshpatel"
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ajesh-patel-38240028a/"
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              LinkedIn
            </a>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

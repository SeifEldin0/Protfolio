"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      message: formData.get("Message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("✅ Form submitted successfully!");
        event.target.reset();
      } else {
        setResult("❌ Error: " + resultData.message);
      }
    } catch (error) {
      console.error("Client Error:", error);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20 bg-white">
      <Reveal>
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500">Contact Us</h4>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-center text-5xl font-Ovo mb-10">Get in Touch</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-center max-w-xl mx-auto text-gray-600 mb-10">
          Feel free to reach out if you have any questions or would like to
          collaborate on a project.
        </p>
      </Reveal>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-4 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            whileFocus={{ scale: 1.01 }}
            name="Name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white"
          />
          <motion.input
            whileFocus={{ scale: 1.01 }}
            name="Email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white"
          />
        </div>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          name="Message"
          placeholder="Enter your message"
          rows="6"
          required
          className="w-full p-3 border border-gray-300 rounded-md bg-white"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded transition"
        >
          Send Message
        </motion.button>
      </motion.form>
      <p className="mt-4 text-center text-sm text-gray-600">{result}</p>
    </div>
  );
};

export default Contact;

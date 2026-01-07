"use client";
import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-white">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500">
        What I Do
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {serviceData.map(({ icon, title, description, link, image }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
            {/* صورة المشروع */}
            <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={image || icon}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>

            {/* عنوان المشروع */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>

            {/* الوصف */}
            <p className="text-sm text-gray-600 leading-5 mb-3">
              {description}
            </p>

            {/* زر العرض */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 font-medium hover:underline text-sm">
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

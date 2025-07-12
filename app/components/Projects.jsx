import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500">
        What I Do
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index} className="p-4 py-8 hover:shadow-gray-700 cursor-pointer  bg-gray-100 rounded-xl shadow-md">
            <div className="mb-4 w-12 h-12 relative">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

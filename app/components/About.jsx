"use client";
import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 bg-white">
      {/* العنوان */}
      <Reveal>
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500">
          Introduction
        </h4>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-center text-5xl font-Ovo mb-16">About Me</h2>
      </Reveal>

      {/* المحتوى */}
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* صورة شخصية */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80">
          <Image
            alt="user image"
            src={assets.user_image}
            width={300}
            height={300}
            className="rounded-3xl shadow-lg w-full"
            placeholder="blur"
          />
        </motion.div>

        {/* النص والكروت */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 w-full">
          {/* وصف بسيط */}
          <Reveal>
          <p className="mb-10 font-Ovo text-gray-700 text-lg leading-relaxed max-w-2xl">
            I'm <strong>Seif El-Din</strong>, a Full-Stack Web Developer with
            practical experience building scalable web applications using
            <strong> React.js</strong>, <strong>Next.js</strong>, and
            <strong> Laravel (PHP)</strong>. I work with REST APIs and MySQL,
            and apply clean backend architecture using Repository & Service
            Layer patterns, API Resources, Form Requests, Policies, Enums, and
            <strong> Spatie</strong> packages. I’m passionate about performance,
            code quality, and delivering smooth, user-focused experiences.
          </p>
          </Reveal>

          {/* كروت المعلومات */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white/80 backdrop-blur">
                <Image src={icon} alt={title} className="w-6 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

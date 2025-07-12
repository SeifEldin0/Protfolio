import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 bg-white">
      {/* العنوان */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">About Me</h2>

      {/* المحتوى */}
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* صورة شخصية */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80"
        >
          <Image
            alt="user image"
            src={assets.user_image}
            width={300}
            height={300}
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div>

        {/* النص والكروت */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          {/* وصف بسيط */}
          <p className="mb-10 font-Ovo text-gray-700 text-lg leading-relaxed max-w-2xl">
            I'm <strong>Seif El-Din</strong>, a creative front-end developer with strong skills in React.js, Next.js, and modern UI frameworks like Tailwind and MUI. I’m passionate about clean interfaces, performance, and learning full-stack tools like PHP & SQL.
          </p>

          {/* كروت المعلومات */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <Image src={icon} alt={title} className="w-6 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

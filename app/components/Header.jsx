"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const Header = () => {
  return (
<header className="text-center w-11/12 max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center gap-4 pt-24">

      {/* صورة شخصية */}
      <div className="flex justify-center sm:justify-start mb-6">
        <Image
          src={assets.profile_img}
          alt="My profile picture"
          className="rounded-full w-32 shadow-lg"
        />
      </div>

      {/* الاسم + الأيقونة */}
      <h1 className="flex justify-center sm:justify-start items-center gap-2 text-xl md:text-2xl font-Ovo mb-2">
        Hi, I'm Seif El-Din
        <DeveloperModeIcon className="text-amber-500" />
      </h1>

      {/* العنوان الأساسي */}
      <h2 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo mb-4 leading-tight">
        Front-End Developer with a creative eye for clean design and smooth user
        experience.
      </h2>

      {/* نبذة تعريفية */}
      <p className="max-w-2xl mx-auto sm:mx-0 text-gray-700 font-Ovo text-base sm:text-lg">
        Front-End Developer skilled in building responsive web apps using
        <strong> React.js </strong> and <strong> Next.js</strong>. Strong
        background in HTML, CSS, JavaScript, and UI frameworks like{" "}
        <strong>MUI</strong> and <strong>Tailwind</strong>. Currently learning{" "}
        <strong>PHP</strong> and <strong>SQL</strong> to expand full-stack
        capabilities. Passionate about clean code, UI/UX, and performance.
      </p>

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-amber-50 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>

       <a
  href="/Seif_Aldin_Frontend-react,next_CV.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-amber-50 transition"
>
  My CV
  <Image src={assets.download_icon} alt="Download" className="w-4" />
</a>

      </div>
    </header>
  );
};

export default Header;

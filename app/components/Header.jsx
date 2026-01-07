"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const Header = () => {
  return (
    <header className="relative text-center w-11/12 max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center gap-4 pt-24">
      {/* Decorative gradient blob with gentle float */}
      <div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 float-slow"
        style={{ background: "radial-gradient(circle at 30% 30%, #ffedd5 0%, transparent 60%)" }}
      />

      {/* Profile image */}
      <div className="flex justify-center sm:justify-start mb-6">
        <Image
          src={assets.profile_img}
          alt="My profile picture"
          className="rounded-full w-32 shadow-lg"
          placeholder="blur"
          priority
          sizes="(max-width: 640px) 8rem, 8rem"
        />
      </div>

      {/* Name + icon */}
      <h1 className="flex justify-center sm:justify-start items-center gap-2 text-xl md:text-2xl font-Ovo mb-2">
        Hi, I'm Seif El-Din
        <DeveloperModeIcon className="text-amber-500" />
      </h1>

      {/* Headline */}
      <h2 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo mb-4 leading-tight">
        Full-Stack Web Developer specializing in scalable backend architecture
        and modern frontend experiences.
      </h2>

      <p className="max-w-2xl mx-auto sm:mx-0 text-gray-700 font-Ovo text-base sm:text-lg">
        Full-Stack Developer with hands-on experience building production-ready
        web applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Laravel</strong>.
        Strong background in REST APIs, MySQL, Repository & Service Layer patterns, API Resources, Form Requests,
        Policies, and <strong>Spatie</strong> packages. Passionate about clean architecture, performance optimization,
        and delivering smooth, user-centric experiences.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-amber-50 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>

        <a
          href="/public/Seif_Al_Din_Full-Stack-php_Cv3.pdf"
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

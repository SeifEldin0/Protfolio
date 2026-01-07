import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur py-6 border-t">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Image
            src={assets.logo}
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mb-2">
          <Image
            src={assets.mail_icon}
            alt="Email"
            width={16}
            height={16}
            className="object-contain"
          />
          <a
            href="mailto:elamaers@gmail.com"
            className="hover:underline"
          >
            elamaers@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <ul className="flex justify-center gap-4 mb-2 flex-wrap text-sm">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/saif-eldin-mostafa-654585316"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/SeifEldin0"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/saif_mostafa_/"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2024 <span className="font-medium">Seif El-Din</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

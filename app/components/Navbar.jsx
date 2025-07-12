"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* خلفية الهيدر */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%] py-24">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* النافبار */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white shadow-sm bg-opacity-50 backdrop-blur-md z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-12 cursor-pointer mr-14"
          />
        </a>

        {/* زر  */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          <div className="w-6 h-[2px] bg-gray-800 mb-1 rounded"></div>
          <div className="w-6 h-[2px] bg-gray-800 mb-1 rounded"></div>
          <div className="w-6 h-[2px] bg-gray-800 rounded"></div>
        </div>

        {/* روابط  */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo border-2 border-gray-200 bg-white bg-opacity-30 backdrop-blur-md">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-800 transition-all duration-300 hover:text-amber-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-amber-400 hover:before:w-full before:transition-all before:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* منيو موبايل من وسط الشاشة */}
      {isOpen && (
        <>
          <div
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm z-40"
          ></div>
          <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-10 py-8 shadow-xl w-[80%] max-w-xs animate-fade-in">
            <ul className="flex flex-col items-center gap-6 text-lg font-Ovo">
              {["Home", "About", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={toggleMenu}
                      className="text-gray-800 hover:text-amber-500 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={toggleMenu}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* أنميشن Tailwind مخصصة */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInScale 0.3s ease-out forwards;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;

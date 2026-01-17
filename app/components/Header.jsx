"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([".hero-badge", ".hero-title-line", ".hero-desc", ".hero-buttons > *", ".hero-stats > *"], {
        opacity: 0,
        y: 30
      });
      gsap.set(imageContainerRef.current, { scale: 0.9, opacity: 0 });

      // Main timeline - faster, smoother
      const tl = gsap.timeline({ 
        defaults: { ease: "power2.out" },
        delay: 0.3
      });

      // Content reveal
      tl.to(imageContainerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6
      })
      .to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, "-=0.3")
      .to(".hero-title-line", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08
      }, "-=0.3")
      .to(".hero-desc", {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, "-=0.2")
      .to(".hero-buttons > *", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08
      }, "-=0.2")
      .to(".hero-stats > *", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08
      }, "-=0.2");

    }, headerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "2+", label: "Years Exp." },
    { value: "20+", label: "Projects" },
    { value: "100%", label: "Satisfaction" }
  ];

  return (
    <header 
      ref={headerRef} 
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0f0f11] to-[#0a0a0b]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] orb orb-teal" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] orb orb-gold" />

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 section-container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image */}
          <div ref={imageContainerRef} className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Simple glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#708f96] to-[#aa895f] rounded-full opacity-60 blur-sm" />
              
              {/* Image container */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 bg-[#0f0f11]">
                <Image
                  src={assets.profile_img}
                  alt="Seif Aldin"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-[#141416] border border-white/10 rounded-full whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-white/70">Available</span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="hero-badge mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#708f96]" />
              <span className="text-white/60">Full-Stack Developer</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6">
            <span className="hero-title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Building
            </span>
            <span className="hero-title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gradient">Digital</span>
            </span>
            <span className="hero-title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 leading-[1.1] tracking-tight">
              Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc max-w-xl mx-auto text-base md:text-lg text-white/50 mb-10 leading-relaxed px-4">
            Crafting high-performance web apps with 
            <span className="text-[#708f96]"> React</span>, 
            <span className="text-[#aa895f]"> Next.js</span> & 
            <span className="text-[#8a9a7e]"> Laravel</span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-wrap justify-center gap-3 mb-12">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/Seif_Al_Din_Full-Stack-php_Cv3.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex justify-center gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Header;

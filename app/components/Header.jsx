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
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".hero-badge",
          ".hero-title-line",
          ".hero-desc",
          ".hero-buttons > *",
          ".hero-stats > *",
        ],
        { opacity: 1, y: 0 }
      );
      gsap.set(imageContainerRef.current, { scale: 1, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          ".hero-badge",
          ".hero-title-line",
          ".hero-desc",
          ".hero-buttons > *",
          ".hero-stats > *",
        ],
        {
          opacity: 0,
          y: 25,
        }
      );
      gsap.set(imageContainerRef.current, { scale: 0.9, opacity: 0 });

      // Main timeline - fast & smooth
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.2,
      });

      // Content reveal
      tl.to(imageContainerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      })
        .to(
          ".hero-badge",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.25"
        )
        .to(
          ".hero-title-line",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.25"
        )
        .to(
          ".hero-desc",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.2"
        )
        .to(
          ".hero-buttons > *",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
          },
          "-=0.2"
        )
        .to(
          ".hero-stats > *",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
          },
          "-=0.2"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0f0f11] to-[#0a0a0b]" />
      <div className="absolute top-0 left-1/4 w-[220px] h-[220px] md:w-[400px] md:h-[400px] orb orb-teal" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] md:w-[300px] md:h-[300px] orb orb-gold" />

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 section-container py-8 sm:py-12 md:py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div
            ref={imageContainerRef}
            className="mb-5 sm:mb-6 md:mb-8 flex justify-center"
          >
            <div className="relative group">
              {/* Subtle glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#708f96] to-[#aa895f] rounded-full opacity-60 blur-sm" />

              {/* Image container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 bg-[#0f0f11]">
                <Image
                  src={assets.profile_img}
                  alt="Seif Aldin - Full-Stack Web & Mobile Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-[#141416] border border-white/15 rounded-full whitespace-nowrap shadow-md">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-xs text-white/90 font-medium">
                  Available for Work
                </span>
              </div>
            </div>
          </div>

          {/* Positioning Badge */}
          <div className="hero-badge mb-3 sm:mb-4 md:mb-5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#708f96]" />
              <span className="text-white/90 font-medium">
                Full-Stack Software Developer (Web & Mobile)
              </span>
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 sm:mb-5 md:mb-6">
            <span className="hero-title-line block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Building Scalable Web
            </span>
            <span className="hero-title-line block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-gradient">& Mobile Applications</span>
            </span>
            <span className="hero-title-line block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 leading-[1.1] tracking-tight">
              & Business APIs
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            Building scalable web and mobile applications, REST APIs, and business
            systems with
            <span className="text-[#708f96] font-semibold"> Laravel</span>,
            <span className="text-[#aa895f] font-semibold"> PHP</span>,
            <span className="text-white font-semibold"> React.js</span> &
            <span className="text-[#8a9a7e] font-semibold"> Next.js</span> —
            from architecture and testing to SEO, GEO, and AEO optimization.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
            <a href="#projects" className="btn-primary min-h-[46px]">
              <span>View Featured Systems</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-outline min-h-[46px]">
              <span>Discuss a Project</span>
            </a>
            <a
              href="/Seif_Al_Din_Full-Stack-php_Cv3.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-[46px]"
              title="Download Software Developer CV"
            >
              <span>Download CV</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-0.5">
                2+
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-0.5">
                12+
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium">
                Systems & Applications
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-0.5">
                100%
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium">
                Full-Lifecycle Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 opacity-70 pointer-events-none">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
          Scroll
        </span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("featured"); // "featured" | "all"

  const displayedProjects =
    activeTab === "featured"
      ? projectsData.filter((p) => p.featured)
      : projectsData;

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([".projects-header > *", ".project-item"], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".projects-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Project cards stagger animation
      gsap.fromTo(
        ".project-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section relative overflow-hidden"
    >
      {/* Background ambient lights */}
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] orb orb-gold translate-x-1/2 opacity-30" />
      <div className="absolute bottom-1/4 left-0 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] orb orb-teal -translate-x-1/2 opacity-30" />

      <div className="section-container">
        {/* Header */}
        <div className="projects-header text-center mb-10 sm:mb-12">
          <span className="section-label">Full-Stack Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Systems</span>
          </h2>
          <p className="section-description mx-auto text-sm md:text-base text-white/70">
            Real enterprise business applications, scalable REST APIs, and full-stack architectures built with Laravel, React, and Next.js.
          </p>

          {/* Filter Tabs: Featured vs All */}
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] mt-6 sm:mt-8">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 min-h-[40px] ${
                activeTab === "featured"
                  ? "bg-white/[0.1] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Featured Systems ({projectsData.filter((p) => p.featured).length})
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 min-h-[40px] ${
                activeTab === "all"
                  ? "bg-white/[0.1] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="project-item group flex flex-col rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                boxShadow:
                  hoveredIndex === index
                    ? `0 16px 36px -12px ${project.color || "#708f96"}25`
                    : "none",
              }}
            >
              {/* Image Preview Container */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-black/30 block"
                aria-label={`View ${project.title} case study`}
              >
                <Image
                  src={project.coverImage || project.image}
                  alt={`${project.title} - ${project.category} user interface`}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, transparent 40%, ${project.color || "#0a0a0b"}15 70%, #141416 100%)`,
                  }}
                />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md border shadow-sm"
                    style={{
                      backgroundColor: `${project.color || "#708f96"}30`,
                      borderColor: `${project.color || "#708f96"}50`,
                      color: "#fafafa",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(project.tags || []).slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded text-[10px] font-medium text-white/80 bg-white/[0.04] border border-white/[0.07]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white group-hover:text-[#708f96] transition-colors min-h-[36px]"
                  >
                    <span>Architecture & Case Study</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-white/60 hover:text-white transition-colors min-h-[36px]"
                      title="Open Live Application"
                    >
                      <span>Live</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub footer */}
        <div className="text-center mt-12 sm:mt-14">
          <a
            href="https://github.com/SeifEldin0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#708f96]/50 transition-all duration-200 min-h-[48px]"
          >
            <svg
              className="w-5 h-5 text-white/80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-white/80 text-sm font-medium">
              Explore All Repositories on GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

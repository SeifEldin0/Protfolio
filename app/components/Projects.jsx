"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "Modern online store with cart, payments & inventory.",
      image: "/E-commerce.png",
      tags: ["React", "Vite", "Tailwind"],
      link: "https://e-commerce-project-hq65-git-main-seifeldin0s-projects.vercel.app",
      color: "#a78bfa"
    },
    {
      title: "AI Chat Integration",
      category: "AI/ML",
      description: "Intelligent chatbot powered by Gemini AI.",
      image: "/integration%20Api.png",
      tags: ["React", "Gemini AI", "API"],
      link: "https://ai-liard-kappa.vercel.app/",
      color: "#60a5fa"
    },
    {
      title: "Prayer Time App",
      category: "Utility",
      description: "Real-time prayer times with location-based data.",
      image: "/prayrtime_icon.png",
      tags: ["React", "Vite", "API"],
      link: "https://prayer-time-tau.vercel.app/",
      color: "#34d399"
    },
    {
      title: "Weather App",
      category: "API Integration",
      description: "Live weather updates with city search.",
      image: "/Weatherapp_icon.png",
      tags: ["Next.js", "API", "Tailwind"],
      link: "https://weather-app-six-weld-42.vercel.app/",
      color: "#fb923c"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".projects-header > *",
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
            toggleActions: "play none none reverse"
          }
        }
      );

      // Project cards stagger animation
      gsap.fromTo(".project-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] orb orb-gold translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] orb orb-teal -translate-x-1/2" />
      
      <div className="section-container">
        {/* Header */}
        <div className="projects-header text-center mb-12">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-description mx-auto text-sm md:text-base">
            A showcase of my recent work building modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid sm:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="relative h-[280px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.05] transition-all duration-200"
                style={{
                  boxShadow: hoveredIndex === index 
                    ? `0 16px 32px -12px ${project.color}25` 
                    : 'none'
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 30%, ${project.color}10 60%, #0a0a0b 95%)`
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/90 backdrop-blur-sm"
                      style={{ backgroundColor: `${project.color}30`, border: `1px solid ${project.color}30` }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white/60 bg-white/5 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Link indicator */}
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span 
                        className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
                        style={{ 
                          backgroundColor: hoveredIndex === index ? project.color : 'rgba(255,255,255,0.1)',
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <span className={`transition-opacity duration-200 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        View Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/SeifEldin0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-[#708f96]/40 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-white/70 text-sm font-medium">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { assets } from "@/assets/assets";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal - faster and smoother
      gsap.fromTo(".about-content > *", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills reveal
      gsap.fromTo(".skill-item",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards
      gsap.fromTo(".service-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "React.js", "Next.js", "Laravel", "TypeScript",
    "Vue.js", "MySQL", "Tailwind", "REST APIs",
    "Git/GitHub", "Docker", "CI/CD", "Jest",
    "Vercel", "AWS", "Linux", "Agile/Scrum"
  ];

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Frontend",
      description: "Building responsive, interactive UIs with React & Next.js",
      color: "from-[#708f96] to-[#aa895f]"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Backend",
      description: "Scalable server solutions with Laravel & RESTful APIs",
      color: "from-[#aa895f] to-[#8a9a7e]"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Full-Stack",
      description: "End-to-end apps with clean architecture",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Testing & QA",
      description: "Unit, integration & E2E testing with Jest & Cypress",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Deployment",
      description: "CI/CD pipelines, Docker & cloud deployment on AWS/Vercel",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance",
      description: "Optimization, SEO & accessibility best practices",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] orb orb-teal -translate-y-1/2" />
      
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting <span className="text-gradient">Digital</span> Excellence
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Image Column */}
          <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none">
            <div className="relative">
              {/* Simple gradient frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#708f96]/20 to-[#aa895f]/20 rounded-2xl blur-sm" />
              
              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#141416]">
                <Image
                  src={assets.user_image}
                  alt="Seif Aldin"
                  fill
                  className="object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 md:-right-6">
                <div className="card-light px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#708f96] to-[#aa895f] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">2+</p>
                    <p className="text-xs text-white/50">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div ref={contentRef} className="about-content">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-gradient">Seif Al Din Mostafa</span>
            </h3>
            
            <p className="text-base text-white/60 leading-relaxed mb-4">
              Full-Stack Web Developer with proven experience delivering scalable, 
              high-performance, and user-centric web applications using React.js, 
              Next.js, Vue.js, Nuxt.js, Laravel, and PHP.
            </p>
            
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              At Webly Tech, I improved page load speed by 30% through performance 
              optimization and caching, reduced API response time by 25% via Laravel 
              query optimization, and built reusable UI components that cut duplicate 
              code by 40%.
            </p>

            <p className="text-sm text-white/50 leading-relaxed mb-4">
              I've contributed to enterprise platforms including e-commerce marketplaces, 
              event ticketing systems with seat reservations, and ERP solutions for 
              inventory and operations management.
            </p>

            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Experienced in agile workflows using Git, GitHub, Trello, Jira, and 
              collaborative tools. Passionate about system architecture, database 
              modeling, and delivering measurable impact on speed and maintainability.
            </p>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-item px-3 py-1.5 rounded-full text-xs font-medium text-white/70 bg-white/[0.04] border border-white/[0.06] hover:border-[#708f96]/40 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group card-light p-5 md:p-6"
            >
              {/* Icon */}
              <div className={`inline-flex w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} items-center justify-center text-white mb-4`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-base font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

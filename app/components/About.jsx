"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { assets } from "@/assets/assets";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [activePhase, setActivePhase] = useState("all");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([".about-content > *", ".skill-item", ".service-card", ".faq-item"], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        ".about-content > *",
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills reveal
      gsap.fromTo(
        ".skill-item",
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service cards
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      name: "Backend & APIs",
      skills: [
        "PHP",
        "Laravel",
        "REST APIs",
        "Repository Pattern",
        "Spatie RBAC",
        "API Resources",
        "Form Requests",
      ],
    },
    {
      name: "Frontend & Mobile",
      skills: [
        "React.js",
        "Next.js",
        "Mobile Application Development",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Vue.js",
      ],
    },
    {
      name: "Database & Admin",
      skills: ["MySQL", "PostgreSQL", "Filament v3", "Database Modeling"],
    },
    {
      name: "AI & Microservices",
      skills: [
        "FastAPI",
        "Python",
        "Socket.IO",
        "AI Integration",
        "Real-Time Systems",
      ],
    },
    {
      name: "Quality & Search",
      skills: [
        "Application Testing & QA",
        "Bug Fixing",
        "Performance Optimization",
        "Technical SEO",
        "Local SEO",
        "GEO & AEO",
      ],
    },
  ];

  const lifecyclePhases = [
    {
      id: "all",
      number: "ALL",
      title: "All Lifecycle",
      badge: "12 Services",
      tagline: "Complete End-to-End Pipeline",
    },
    {
      id: "architecture",
      number: "01",
      title: "Architecture & Build",
      badge: "6 Services",
      tagline: "Web, Mobile, APIs & Dashboards",
      accent: "#708f96",
    },
    {
      id: "quality",
      number: "02",
      title: "Quality & Testing",
      badge: "3 Services",
      tagline: "Automated QA, Debugging & Speed",
      accent: "#aa895f",
    },
    {
      id: "search",
      number: "03",
      title: "Search & AI Visibility",
      badge: "3 Services",
      tagline: "Technical SEO, Schema & AEO Engines",
      accent: "#8a9a7e",
    },
  ];

  const serviceCategories = [
    {
      category: "Software Development",
      phase: "01",
      phaseId: "architecture",
      phaseTitle: "Architecture & Build",
      services: [
        {
          id: "web-dev",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · Full-Stack",
          title: "Full-Stack Web Development",
          description:
            "End-to-end web applications combining robust Laravel backends with modern Next.js/React user interfaces.",
          deliverables: ["Laravel 11 & React/Next.js", "SPA & SSR Architecture", "Role-Based Workflows"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
        },
        {
          id: "mobile-dev",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · Mobile",
          title: "Mobile Application Development",
          description:
            "Responsive, mobile-first applications and interfaces designed for seamless performance across smartphones and tablets.",
          deliverables: ["Mobile-First UX", "Cross-Platform Responsive", "Touch Optimization"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          id: "backend-api",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · Backend & APIs",
          title: "Laravel Backend & REST APIs",
          description:
            "Scalable API architectures utilizing Repository & Service patterns, strict FormRequest validation, and Spatie RBAC.",
          deliverables: ["Repository Pattern", "FormRequest Validation", "Spatie RBAC & Sanctum"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          ),
        },
        {
          id: "ecommerce",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · E-Commerce",
          title: "E-Commerce & Multi-Vendor",
          description:
            "Custom online storefronts and multi-vendor marketplaces with catalogs, shopping carts, and order checkout flows.",
          deliverables: ["Cart & Checkout Flows", "Multi-Vendor Architecture", "Order Management"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          ),
        },
        {
          id: "erp",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · Business ERP",
          title: "ERP & Business Systems",
          description:
            "Custom operational software for inventory tracking, supplier procurement, employee management, and dashboards.",
          deliverables: ["Inventory Workflows", "Procurement Logic", "Role-Based Dashboards"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
        {
          id: "lms-dashboards",
          phase: "01",
          phaseId: "architecture",
          phaseBadge: "Phase 01 · LMS & Admin",
          title: "LMS & Admin Dashboards",
          description:
            "EdTech platforms and rapid back-office administration systems using Filament v3 with data filtering and reporting.",
          deliverables: ["Filament v3 Panels", "Custom Data Tables", "Analytics & Reporting"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Quality, Testing & Optimization",
      phase: "02",
      phaseId: "quality",
      phaseTitle: "Quality & Testing",
      services: [
        {
          id: "testing-qa",
          phase: "02",
          phaseId: "quality",
          phaseBadge: "Phase 02 · Testing & QA",
          title: "Application Testing & QA",
          description:
            "Functional, API validation, regression, and cross-browser testing to guarantee application stability and eliminate bugs.",
          deliverables: ["PHPUnit Feature Tests", "API Contract Validation", "Regression & Device QA"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
        },
        {
          id: "bug-fixing",
          phase: "02",
          phaseId: "quality",
          phaseBadge: "Phase 02 · Maintenance",
          title: "Bug Fixing & Code Maintenance",
          description:
            "Systematic diagnosis, debugging, and refactoring of legacy or malfunctioning web applications and backend logic.",
          deliverables: ["Root Cause Debugging", "Legacy Refactoring", "N+1 Query Elimination"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
        {
          id: "performance",
          phase: "02",
          phaseId: "quality",
          phaseBadge: "Phase 02 · Performance",
          title: "Performance Optimization",
          description:
            "SQL query optimization, caching strategies, and asset compression to accelerate page loading and API response times.",
          deliverables: ["Database Indexing", "Redis Cache Strategies", "Core Web Vitals Tuning"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Search & Discoverability (SEO / GEO / AEO)",
      phase: "03",
      phaseId: "search",
      phaseTitle: "Search & AI Visibility",
      services: [
        {
          id: "technical-seo",
          phase: "03",
          phaseId: "search",
          phaseBadge: "Phase 03 · Technical SEO",
          title: "Technical SEO & Semantic Web",
          description:
            "Semantic HTML5 architecture, canonical tags, automated XML sitemaps, and robots configuration for high indexability.",
          deliverables: ["HTML5 Semantic Tree", "Dynamic XML Sitemaps", "Robots & Canonical URLs"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
        },
        {
          id: "local-seo",
          phase: "03",
          phaseId: "search",
          phaseBadge: "Phase 03 · Structured Data",
          title: "Local SEO & Structured Data",
          description:
            "Schema.org microdata (Person, Organization, LocalBusiness) to maximize local visibility and rich search card eligibility.",
          deliverables: ["Schema.org JSON-LD", "Rich Results Eligibility", "Local & Entity Graphs"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
        {
          id: "geo-aeo",
          phase: "03",
          phaseId: "search",
          phaseBadge: "Phase 03 · AI Engines",
          title: "GEO & AEO Optimization",
          description:
            "Structuring website content to be accurately understood, indexed, and surfaced by AI engines and voice/search assistants.",
          deliverables: ["Perplexity & SearchGPT", "Structured Q&A Entities", "Direct AI Citations"],
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
        },
      ],
    },
  ];

  const allServices = serviceCategories.flatMap((cat) => cat.services);
  const activeServices =
    activePhase === "all"
      ? allServices
      : allServices.filter((s) => s.phaseId === activePhase);

  const homepageFaqs = [
    {
      question: "What core technologies do you use for full-stack software development?",
      answer:
        "My primary production stack is Laravel (PHP) for robust backend business logic and REST APIs, paired with React.js and Next.js for high-performance frontend interfaces. I also utilize PostgreSQL/MySQL for relational databases, Redis for caching/locking, and Python/FastAPI for AI microservices.",
    },
    {
      question: "Do you build both frontend user interfaces and backend architectures?",
      answer:
        "Yes. I architect and implement the complete stack: relational database schemas, secure authentication/authorization, RESTful API endpoints, and modern, responsive frontend views optimized for both mobile and desktop screens.",
    },
    {
      question: "Can you develop custom REST APIs and business systems with Laravel?",
      answer:
        "Yes. I build modular Laravel architectures utilizing Repository and Service patterns, dedicated FormRequest validation classes, Eloquent API Resources, and Spatie Role-Based Access Control (RBAC).",
    },
    {
      question: "Do you build custom e-commerce and ERP systems?",
      answer:
        "Yes. I have engineered custom e-commerce systems with atomic inventory checkout, multi-vendor support, and payment webhooks, as well as operational ERP platforms (like Farm Flex ERP) managing multi-entity workflows, schedules, and inventory.",
    },
    {
      question: "Do you provide application testing, QA, and bug fixing for existing systems?",
      answer:
        "Yes. Software reliability is a core deliverable. I write automated PHPUnit feature tests, execute API contract testing with Postman, conduct cross-device mobile QA, and systematically debug and resolve N+1 queries, race conditions, and legacy application bugs.",
    },
    {
      question: "What is your approach to Technical SEO, GEO, and Answer Engine Optimization (AEO)?",
      answer:
        "I build search discoverability into the code architecture: valid HTML5 semantics, comprehensive Schema.org JSON-LD microdata, automated sitemaps, fast Core Web Vitals, and structured question-answer entities that generative AI systems (Perplexity, SearchGPT, Gemini) can cite directly.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="section relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 -left-32 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] orb orb-teal -translate-y-1/2 opacity-40 sm:opacity-100" />

      <div className="section-container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-label">About Me</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Crafting <span className="text-gradient">Digital</span> Excellence
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start mb-12 sm:mb-16">
          {/* Image Column */}
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
            <div className="relative">
              {/* Subtle gradient frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#708f96]/20 to-[#aa895f]/20 rounded-2xl blur-sm" />

              {/* Image container */}
              <div className="relative w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-auto lg:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#141416]">
                <Image
                  src={assets.user_image}
                  alt="Seif Aldin - Full-Stack Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-top"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/40 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-right-6">
                <div className="card-light px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#708f96] to-[#aa895f] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">2+</p>
                    <p className="text-xs text-white/60 font-medium">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div ref={contentRef} className="about-content space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gradient">
              Hi, I'm <span className="text-gradient">Seif Al Din Mostafa</span>
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Full-Stack Software Developer who builds scalable web and mobile applications, backend systems, REST APIs, and business platforms with Laravel, React.js, and Next.js.
            </p>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              My engineering practice spans the complete software lifecycle — from architectural planning and database modeling to API integration, thorough functional & regression testing, performance optimization, and search discoverability (Technical SEO, Local SEO, GEO & AEO).
            </p>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Having contributed to enterprise platforms including multi-vendor e-commerce marketplaces, event ticketing systems with seat reservations, and ERP solutions, I focus on clean code separation using Repository & Service patterns, strict FormRequest validation, and reliable production delivery.
            </p>

            {/* Skills Grid */}
            <div className="skills-grid mt-4 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-white/50 mb-1 font-semibold">
                Technical Stack & Capabilities
              </h4>
              <div className="space-y-2.5">
                {skillCategories.map((cat, catIdx) => (
                  <div key={catIdx} className="space-y-1">
                    <span className="text-[11px] font-semibold text-[#708f96] uppercase tracking-wide block">
                      {cat.name}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-item px-2.5 py-1 rounded-md text-[11px] font-medium text-white/90 bg-white/[0.04] border border-white/[0.07] hover:border-[#708f96]/50 transition-colors duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Full Lifecycle Services Section */}
        <div className="space-y-8 pt-4">
          <div className="text-center">
            <span className="section-label">Full Lifecycle Services</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              End-to-End <span className="text-gradient">Software Engineering</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto mt-2.5">
              From initial architecture and development to testing, optimization, and search engine discoverability.
            </p>
          </div>

          {/* Interactive Lifecycle Pipeline Stepper */}
          <div className="relative max-w-4xl mx-auto pt-2 pb-1">
            <div className="hidden sm:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[1px] bg-gradient-to-r from-[#708f96]/30 via-[#aa895f]/30 to-[#8a9a7e]/30 z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
              {lifecyclePhases.slice(1).map((phase) => {
                const isSelected = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(activePhase === phase.id ? "all" : phase.id)}
                    type="button"
                    className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 relative group flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#18181b] border-[#708f96] shadow-[0_0_20px_rgba(112,143,150,0.15)] ring-1 ring-[#708f96]/50"
                        : "bg-[#141416]/90 border-white/[0.07] hover:border-white/[0.2] hover:bg-[#18181b]/80"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#708f96] text-black font-extrabold"
                          : "bg-white/[0.05] text-white/70 group-hover:text-white group-hover:bg-white/[0.08]"
                      }`}
                    >
                      {phase.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                          {phase.title}
                        </h4>
                        <span className="text-[10px] text-white/40 font-mono">
                          {phase.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/55 truncate mt-0.5">
                        {phase.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lifecycle Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-1" role="tablist" aria-label="Lifecycle Filter">
            {lifecyclePhases.map((phase) => {
              const isActive = activePhase === phase.id;
              return (
                <button
                  key={phase.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePhase(phase.id)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white border-[#708f96] shadow-[0_0_12px_rgba(112,143,150,0.25)]"
                      : "bg-[#141416] text-white/60 border-white/[0.06] hover:text-white hover:border-white/[0.15]"
                  }`}
                >
                  <span>{phase.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-[#708f96] text-black font-semibold" : "bg-white/[0.06] text-white/50"
                  }`}>
                    {phase.badge.replace(" Services", "")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 services-grid">
            {activeServices.map((service) => (
              <div
                key={service.id}
                className="service-card group relative p-5 sm:p-6 rounded-2xl bg-[#141416]/95 border border-white/[0.07] hover:border-[#708f96]/50 hover:bg-[#18181b] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta: Icon + Phase Badge */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#708f96] group-hover:text-[#aa895f] group-hover:border-[#708f96]/40 group-hover:bg-[#708f96]/10 transition-all duration-300 shrink-0">
                      {service.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide text-white/50 bg-white/[0.03] border border-white/[0.06] group-hover:border-[#708f96]/30 group-hover:text-white/80 transition-colors">
                      {service.phaseBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#708f96] transition-colors duration-200">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables & Micro CTA */}
                <div className="pt-4 mt-4 border-t border-white/[0.05] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] text-white/70 border border-white/[0.06] group-hover:border-[#708f96]/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="font-medium text-emerald-400/90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production Standard
                    </span>
                    <a
                      href="#contact"
                      className="text-white/50 group-hover:text-white font-medium flex items-center gap-1 transition-colors"
                    >
                      Consultation <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Lifecycle Integration Guarantee & Action Callout */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#141416] via-[#18181b] to-[#141416] p-6 sm:p-8 mt-6">
            <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-[#708f96]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full bg-[#aa895f]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#708f96]/10 border border-[#708f96]/20 text-[#708f96] text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#708f96]" />
                  Full Lifecycle Integration Standard
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Need an end-to-end partner or a targeted engineering phase?
                </h4>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  Whether you are architecting a new application from scratch with Laravel and Next.js, conducting automated QA testing & bug fixing on a legacy system, or optimizing web performance for AI engines and Google Search, I provide dependable software engineering with strict architectural discipline.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <a
                  href="#contact"
                  className="btn-primary text-center text-xs sm:text-sm py-2.5 px-5 rounded-xl font-semibold shadow-lg shadow-[#708f96]/20 hover:scale-[1.02] transition-transform"
                >
                  Discuss Your Project
                </a>
                <a
                  href="#projects"
                  className="text-center text-xs sm:text-sm py-2.5 px-5 rounded-xl font-medium text-white/80 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
                >
                  Explore Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Engine Optimization (AEO) FAQs Section (PART 7 & PART 22) */}
        <div className="space-y-6 pt-12 border-t border-white/[0.06] mt-12">
          <div className="text-center">
            <span className="section-label">Frequently Asked Questions</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Technical <span className="text-gradient">Q&A</span> & Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto mt-2">
              Direct, factual answers to common questions about my development stack, workflow, and engineering standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {homepageFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="faq-item group p-4 sm:p-5 rounded-xl bg-[#141416] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-150"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-sm sm:text-base font-semibold text-white group-open:text-gradient">
                  <span className="pr-4">{faq.question}</span>
                  <span className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center shrink-0 text-white/60 group-open:rotate-180 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="pt-3 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/[0.04] mt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

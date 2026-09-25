import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";

const siteUrl = "https://seif-aldin-dev.vercel.app";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Seif Aldin",
    };
  }

  const title =
    project.seoTitle || `${project.title} - Full-Stack Case Study | Seif Aldin`;
  const description =
    project.seoDescription ||
    project.shortDescription ||
    project.description;
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;
  const ogImageUrl = project.coverImage
    ? `${siteUrl}${project.coverImage}`
    : `${siteUrl}/profile-img.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "Seif Aldin Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} - Architecture & Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Parse architecture string into visual flow steps if it contains arrows or delimiters
  const architectureSteps = project.architecture
    ? project.architecture
        .split(/[→↔]/)
        .map((step) => step.trim())
        .filter(Boolean)
    : [];

  // Related projects resolution
  const relatedProjectsList = (project.relatedProjects || [])
    .map((relSlug) => projects.find((p) => p.slug === relSlug))
    .filter(Boolean);

  // Schema.org Structured Data
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/projects/${project.slug}#software`,
        name: project.title,
        description:
          project.seoDescription ||
          project.shortDescription ||
          project.description,
        applicationCategory: project.category,
        operatingSystem: "Web, Mobile",
        author: {
          "@type": "Person",
          name: "Seif Aldin",
          url: siteUrl,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/projects/${project.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}/projects/${project.slug}`,
          },
        ],
      },
      ...(project.faq && project.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${siteUrl}/projects/${project.slug}#faq`,
              mainEntity: project.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const contextualCta = project.contextualCta || {
    heading: "Ready to build a reliable web or mobile application?",
    description:
      "From architecture planning and API integration to testing, optimization, and search discoverability, I engineer full-lifecycle software solutions.",
    buttonText: "Discuss Your Project",
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#fafafa] relative overflow-hidden">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      {/* Background ambient orbs */}
      <div
        className="fixed top-0 right-0 w-[550px] h-[550px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: project.color || "#708f96" }}
      />
      <div className="fixed bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#aa895f]/10 blur-3xl pointer-events-none opacity-25" />

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors group min-h-[44px]"
          >
            <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-[#708f96]/50 transition-colors">
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span>Back to All Systems</span>
          </Link>

          <Link
            href="/#contact"
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[#708f96] to-[#aa895f] rounded-lg hover:opacity-90 transition-opacity min-h-[40px] flex items-center"
          >
            Discuss a Project
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-14">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-white/60 font-medium"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/30">/</span>
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/90 truncate">{project.title}</span>
        </nav>

        {/* 1. PROJECT HERO */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-sm"
              style={{
                backgroundColor: `${project.color}15`,
                borderColor: `${project.color}40`,
                color: project.color || "#708f96",
              }}
            >
              {project.category}
            </span>
            <span className="text-xs text-white/40">•</span>
            <span className="text-xs text-white/70 font-medium">
              Full-Stack Architecture
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {project.shortDescription || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary min-h-[44px]"
              >
                <span>Live Application</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline min-h-[44px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View Repository</span>
              </a>
            )}

            <Link href="/#contact" className="btn-outline min-h-[44px]">
              <span>Request Similar System</span>
            </Link>
          </div>

          {/* Hero Cover Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141416] mt-8 shadow-2xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.coverImage || project.image}
                alt={`${project.title} - Full-Stack Architecture & User Interface Preview`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>

        {/* QUICK FACTS PANEL (PART 15) */}
        {project.quickFacts && (
          <section
            aria-labelledby="quick-facts-heading"
            className="p-6 sm:p-7 rounded-2xl bg-[#141416] border border-white/[0.08] shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#708f96]" />
              <h2
                id="quick-facts-heading"
                className="text-lg sm:text-xl font-bold text-white tracking-wide"
              >
                Quick Facts & System Specifications
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-white/50 block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Role
                </span>
                <span className="text-white font-medium">
                  {project.quickFacts.role || "Full-Stack Developer"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-white/50 block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  System Type
                </span>
                <span className="text-white font-medium">
                  {project.quickFacts.systemType || project.category}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[#708f96] block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Backend
                </span>
                <span className="text-white/90 font-medium">
                  {project.quickFacts.backend || "REST APIs"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[#aa895f] block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Frontend
                </span>
                <span className="text-white/90 font-medium">
                  {project.quickFacts.frontend || "Next.js / React"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-emerald-400 block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Database
                </span>
                <span className="text-white/90 font-medium">
                  {project.quickFacts.database || "PostgreSQL / MySQL"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-sky-400 block font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Specialized / AI
                </span>
                <span className="text-white/90 font-medium">
                  {project.quickFacts.specialized || "Microservices / APIs"}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Section Jump Bar */}
        <nav
          aria-label="Case Study Section Navigation"
          className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/[0.06] pb-4"
        >
          <span className="text-xs text-white/50 font-semibold mr-1">
            Jump to:
          </span>
          <a
            href="#overview"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Overview
          </a>
          <a
            href="#problem-solution"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Challenge & Solution
          </a>
          <a
            href="#architecture"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Architecture
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Features
          </a>
          <a
            href="#tech-stack"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Tech Stack
          </a>
          <a
            href="#qa-security"
            className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            QA & Security
          </a>
          {project.faq && project.faq.length > 0 && (
            <a
              href="#technical-faq"
              className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              Technical Q&A
            </a>
          )}
          {project.screenshots && project.screenshots.length > 1 && (
            <a
              href="#gallery"
              className="px-3 py-1.5 rounded-lg text-xs bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              Screenshots
            </a>
          )}
        </nav>

        {/* 2. PROJECT OVERVIEW & 4. MY ROLE */}
        <section id="overview" className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#708f96]" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Project Overview
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {project.description}
            </p>
            {project.overview && (
              <div className="grid sm:grid-cols-2 gap-4 pt-3 border-t border-white/[0.06] text-xs">
                <div>
                  <span className="text-white/50 uppercase tracking-wider block font-semibold mb-1">
                    Target Audience
                  </span>
                  <p className="text-white/90">
                    {project.overview.targetAudience}
                  </p>
                </div>
                <div>
                  <span className="text-white/50 uppercase tracking-wider block font-semibold mb-1">
                    Problem Solved
                  </span>
                  <p className="text-white/90">
                    {project.overview.problemSolved}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#aa895f]" />
              <h2 className="text-xl font-bold text-white">
                My Role & Responsibilities
              </h2>
            </div>
            <p className="text-sm text-white/90 leading-relaxed font-medium">
              {project.role}
            </p>
            <div className="pt-3 border-t border-white/[0.06]">
              <span className="text-[10px] text-white/50 uppercase tracking-wider block mb-2 font-semibold">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(project.tags || []).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-[11px] bg-white/[0.05] text-white/90 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE PROBLEM / REQUIREMENTS & 5. SOLUTION (COMPARATIVE 2-COLUMN) */}
        <section id="problem-solution" className="grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-amber-500/20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>The Problem & Requirements</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Domain Challenges & Constraints
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {project.problem}
            </p>
            {project.requirements && project.requirements.length > 0 && (
              <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                {project.requirements.map((req, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-white/80"
                  >
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-emerald-500/20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Engineering Solution</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              System Resolution & Strategy
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {project.solution}
            </p>
            {project.overview && project.overview.purpose && (
              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-xs text-emerald-300">
                <span className="font-semibold block mb-0.5">
                  Core Engineering Objective:
                </span>
                {project.overview.purpose}
              </div>
            )}
          </div>
        </section>

        {/* 6. KEY FEATURES */}
        {project.features && project.features.length > 0 && (
          <section id="features" className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#aa895f] font-semibold">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Key Features & Business Logic
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-[#141416] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. SYSTEM ARCHITECTURE */}
        {project.architecture && (
          <section
            id="architecture"
            className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.08] space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#708f96] font-semibold">
                System Blueprint
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                System Architecture & Data Flow
              </h2>
            </div>

            {architectureSteps.length > 1 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                {architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#aa895f] px-1.5 py-0.5 rounded bg-[#aa895f]/10">
                        Step 0{idx + 1}
                      </span>
                      {idx < architectureSteps.length - 1 && (
                        <span className="text-white/20 hidden lg:inline">→</span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-white/90 leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] font-mono text-xs sm:text-sm text-white/90">
                {project.architecture}
              </div>
            )}
          </section>
        )}

        {/* 8. TECHNOLOGIES (LOGICALLY GROUPED) */}
        <section
          id="tech-stack"
          className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.08] space-y-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-[#708f96] font-semibold">
              Technical Stack
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Technologies & Tooling
            </h2>
          </div>

          {project.techGrouped ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {project.techGrouped.backend && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#708f96] uppercase tracking-wider block">
                    Backend & APIs
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techGrouped.backend.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-xs text-white/90 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techGrouped.frontend && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#aa895f] uppercase tracking-wider block">
                    Frontend & UI
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techGrouped.frontend.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-xs text-white/90 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techGrouped.database && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                    Database & Storage
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techGrouped.database.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-xs text-white/90 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {(project.techGrouped.aiServices ||
                project.techGrouped.toolsDevOps) && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                    AI, Services & Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      ...(project.techGrouped.aiServices || []),
                      ...(project.techGrouped.toolsDevOps || []),
                    ].map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-xs text-white/90 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {(project.technologies || project.tags || []).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white/90 bg-white/[0.04] border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* 9. TECHNICAL CHALLENGES & 10. IMPLEMENTATION DETAILS */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              Technical Challenges
            </h2>
            {project.technicalChallenges &&
            project.technicalChallenges.length > 0 ? (
              <ul className="space-y-3">
                {project.technicalChallenges.map((ch, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-violet-400 font-bold shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                {project.problem}
              </p>
            )}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Implementation & Details
            </h2>
            {project.implementationDetails &&
            project.implementationDetails.length > 0 ? (
              <ul className="space-y-3">
                {project.implementationDetails.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-sky-400 font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                {project.solution}
              </p>
            )}
          </div>
        </section>

        {/* 11. TESTING & 14. SECURITY */}
        <section id="qa-security" className="grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Testing & Quality Assurance
            </h2>
            {project.testingQuality && project.testingQuality.length > 0 ? (
              <ul className="space-y-2.5">
                {project.testingQuality.map((t, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                Functional, API validation, and cross-browser testing.
              </p>
            )}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Security Architecture
            </h2>
            {project.security && project.security.length > 0 ? (
              <ul className="space-y-2.5">
                {project.security.map((sec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-red-400 font-bold">•</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                Token-based authentication, FormRequest validation, and input
                sanitization.
              </p>
            )}
          </div>
        </section>

        {/* 12. SEO / GEO / AEO & 13. PERFORMANCE */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#aa895f]" />
              SEO, GEO & AEO Strategy
            </h2>
            {project.seoGeoAeo && project.seoGeoAeo.length > 0 ? (
              <ul className="space-y-2.5">
                {project.seoGeoAeo.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-[#aa895f] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                Semantic HTML structuring, Open Graph metadata, and search
                engine optimization.
              </p>
            )}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Performance & Optimization
            </h2>
            {project.performance && project.performance.length > 0 ? (
              <ul className="space-y-2.5">
                {project.performance.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-white/80"
                  >
                    <span className="text-teal-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs sm:text-sm text-white/70">
                Optimized asset delivery, SQL query tuning, and lightweight
                clientside code execution.
              </p>
            )}
          </div>
        </section>

        {/* TECHNICAL Q&A / AEO SECTION (PART 7 & PART 22) */}
        {project.faq && project.faq.length > 0 && (
          <section id="technical-faq" className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#708f96] font-semibold">
                Answer Engine Optimization (AEO)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Technical Questions & Architectural Answers
              </h2>
            </div>

            <div className="space-y-4">
              {project.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#141416] border border-white/[0.06] space-y-2.5"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-white flex items-start gap-2.5">
                    <span className="text-[#aa895f] font-bold">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed pl-5">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 15. SCREENSHOTS GALLERY */}
        {project.screenshots && project.screenshots.length > 1 && (
          <section id="gallery" className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#708f96] font-semibold">
                Visual Evidence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Application Screenshots & Workflows
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-[#141416] border border-white/[0.06] group"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <Image
                      src={shot.url}
                      alt={`${project.title} - ${shot.title || "Interface View " + (idx + 1)}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 bg-[#141416] border-t border-white/[0.04]">
                    <p className="text-xs font-medium text-white/90">
                      {shot.title || `Workflow View 0${idx + 1}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* RELATED PROJECTS / INTERNAL LINKING (PART 9) */}
        {relatedProjectsList.length > 0 && (
          <section className="space-y-6 pt-4 border-t border-white/[0.06]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#aa895f] font-semibold">
                Explore More Architectures
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Related Systems & Case Studies
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {relatedProjectsList.map((relProj) => (
                <Link
                  key={relProj.slug}
                  href={`/projects/${relProj.slug}`}
                  className="group p-5 rounded-2xl bg-[#141416] border border-white/[0.06] hover:border-[#708f96]/40 transition-all duration-200 flex flex-col justify-between gap-3"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#708f96] uppercase tracking-wider block mb-1">
                      {relProj.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-gradient transition-colors">
                      {relProj.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2 mt-1">
                      {relProj.shortDescription || relProj.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#708f96] font-medium pt-2 border-t border-white/[0.04]">
                    <span>View Architecture</span>
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
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CONTEXTUAL FREELANCE CTA (PART 20) */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#141416] via-[#18181b] to-[#141416] border border-white/[0.08] text-center space-y-5 shadow-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Available for Freelance & Contract Development
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {contextualCta.heading}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            {contextualCta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/#contact"
              className="btn-primary min-h-[46px] px-6 text-sm"
            >
              <span>{contextualCta.buttonText}</span>
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
            </Link>
            <Link
              href="/#projects"
              className="btn-outline min-h-[46px] px-6 text-sm"
            >
              <span>Browse All Systems</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

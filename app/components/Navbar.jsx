"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Quick entrance animation
    gsap.fromTo([logoRef.current, ...linksRef.current], 
      { y: -15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
    );

    // Scroll handler with throttle
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          
          // Update active section
          const sections = navLinks.map(link => link.href.slice(1));
          for (const section of sections.reverse()) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 120) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? "py-3 bg-[#0a0a0b]/90 backdrop-blur-lg border-b border-white/[0.04]" 
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            ref={logoRef}
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#708f96] to-[#aa895f] flex items-center justify-center">
              <span className="text-sm font-bold text-white font-logo">S</span>
            </div>
            <span className="hidden sm:block text-base font-medium font-logo">
              <span className="text-white">Seif</span>
              <span className="text-white/40">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                ref={(el) => (linksRef.current[index] = el)}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-white/[0.06]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#708f96] to-[#aa895f] rounded-lg hover:opacity-90 transition-opacity duration-150"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 origin-left ${isOpen ? "rotate-45 w-5" : ""}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 origin-left ${isOpen ? "-rotate-45 w-5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-lg md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`mobile-link text-2xl font-semibold tracking-tight transition-all duration-200 ${
                activeSection === link.href.slice(1) 
                  ? "text-gradient scale-105" 
                  : "text-white/60 active:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mobile-link mt-6 btn-primary text-base"
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

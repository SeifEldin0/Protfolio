"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Add hover effect on interactive elements
    const onLinkHoverIn = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.5)",
        duration: 0.3,
      });
    };

    const onLinkHoverOut = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.3)",
        duration: 0.3,
      });
    };

    // Event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onLinkHoverIn);
      el.addEventListener("mouseleave", onLinkHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onLinkHoverIn);
        el.removeEventListener("mouseleave", onLinkHoverOut);
      });
    };
  }, [isVisible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-300 hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;

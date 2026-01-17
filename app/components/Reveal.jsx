"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, delay = 0, y = 30, className = "" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

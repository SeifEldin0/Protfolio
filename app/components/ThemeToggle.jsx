"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const next = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
      applyTheme(next);
    } catch {
      applyTheme("light");
    }
    // Listen to system changes
    const media = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const stored = localStorage.getItem("theme");
      if (!stored) applyTheme(e.matches ? "dark" : "light");
    };
    media?.addEventListener?.("change", onChange);
    return () => media?.removeEventListener?.("change", onChange);
  }, []);

  function applyTheme(next) {
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
    }
  }

  function toggle() {
    applyTheme(theme === "dark" ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button aria-label="Toggle theme" className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/10">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition">
      {theme === "dark" ? (
        <Image src={assets.sun_icon} alt="Light mode" width={20} height={20} />
      ) : (
        <Image src={assets.moon_icon} alt="Dark mode" width={20} height={20} />
      )}
    </button>
  );
}

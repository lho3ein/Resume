"use client";

import { useEffect, useState } from "react";
import { icons } from "./icons";

export default function ThemeButton() {
  /* ─────────────────────────────────────────
       Theme
    ───────────────────────────────────────── */

  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("resume-theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    document.documentElement.style.setProperty("color-scheme", theme);

    localStorage.setItem("resume-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="icon-btn cursor-pointer"
      aria-label="تغییر تم"
      onClick={toggleTheme}
    >
      <span className="block dark:hidden">{icons.moon}</span>
      <span className="hidden dark:block">{icons.sun}</span>
    </button>
  );
}

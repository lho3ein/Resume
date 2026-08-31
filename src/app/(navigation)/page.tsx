"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { icons } from "@/app/feature/icons";
import {
  profile,
  navItems,
  skillTags,
  skillBars,
  experiences,
  projects,
} from "@/app/feature/content";
import ThemeButton from "../feature/theme-button";

export default function Home() {
  const year = new Date().getFullYear();

  /* ─────────────────────────────────────────
     Mobile Menu
  ───────────────────────────────────────── */

  const [menuOpen, setMenuOpen] = useState(false);

  /* ─────────────────────────────────────────
     Sticky Header
  ───────────────────────────────────────── */

  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ─────────────────────────────────────────
     Active Navigation
  ───────────────────────────────────────── */

  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(
      Boolean,
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ─────────────────────────────────────────
     Smooth Scroll
  ───────────────────────────────────────── */

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();

    const targetId = href.slice(1);

    const target = sectionRefs.current[targetId];

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    history.pushState(null, "", `#${targetId}`);

    setMenuOpen(false);
  };

  /* ─────────────────────────────────────────
     Scroll Reveal
  ───────────────────────────────────────── */

  const [revealedElements, setRevealedElements] = useState<Set<string>>(
    new Set(),
  );

  const revealRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const elements = Object.values(revealRefs.current).filter(
      Boolean,
    ) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const key = element.dataset.revealId;

          if (!key) return;
          setRevealedElements((current) => {
            const next = new Set(current);
            next.add(key);
            return next;
          });

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const isRevealed = (id: string) => revealedElements.has(id);

  /* ─────────────────────────────────────────
     Progress Bars
  ───────────────────────────────────────── */

  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());

  const progressRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const bars = Object.values(progressRefs.current).filter(
      Boolean,
    ) as HTMLElement[];

    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bar = entry.target as HTMLElement;
          const key = bar.dataset.progressId;

          if (!key) return;

          setAnimatedBars((current) => {
            const next = new Set(current);
            next.add(key);
            return next;
          });

          observer.unobserve(bar);
        });
      },
      {
        threshold: 0.5,
      },
    );

    bars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ─────────────────────────────────────────
     Typewriter
  ───────────────────────────────────────── */

  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    const texts = profile.typewriterTexts;

    if (!texts || texts.length === 0) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        charIndex++;

        setTypewriterText(currentText.substring(0, charIndex));

        if (charIndex === currentText.length) {
          isDeleting = true;

          timeoutId = setTimeout(typeWriter, 2000);

          return;
        }

        timeoutId = setTimeout(typeWriter, 80);
      } else {
        charIndex--;

        setTypewriterText(currentText.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;

          textIndex = (textIndex + 1) % texts.length;

          timeoutId = setTimeout(typeWriter, 500);

          return;
        }

        timeoutId = setTimeout(typeWriter, 40);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  /* ─────────────────────────────────────────
     Render
  ───────────────────────────────────────── */

  return (
    <div
      id="body"
      className="min-h-screen font-sans transition-all duration-300 text-slate-800 dark:text-slate-100"
    >
      <div className="bg-mesh" aria-hidden="true" />

      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ═══════════════════════════════════════
          Header
      ═══════════════════════════════════════ */}

      <header
        id="header"
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 overflow-x-clip ${
          headerScrolled ? "header-scrolled" : ""
        }`}
      >
        <nav
          className="flex items-center justify-between max-w-5xl gap-4 mx-auto nav-bar"
          aria-label="ناوبری اصلی"
        >
          <a
            href="#hero"
            className="nav-logo shrink-0"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <span id="nav-logo" className="block dark:hidden">
              {icons.logoNh}
            </span>

            <span id="nav-logo-dark" className="hidden dark:block">
              {icons.logoNhDrk}
            </span>
          </a>

          {/* Desktop Navigation */}

          <ul id="nav-links" className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.id}
                  className={`nav-link ${
                    activeSection === item.id.slice(1) ? "nav-link-active" : ""
                  }`}
                  data-section={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Button */}

            <ThemeButton />

            {/* Mobile Menu Button */}

            <button
              id="mobile-menu-btn"
              type="button"
              className="icon-btn lg:hidden"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? icons.close : icons.menu}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}

        <div
          id="mobile-menu"
          className={`max-w-5xl mx-auto mt-2 mobile-menu lg:hidden ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <ul id="mobile-nav-links" className="flex flex-col p-2">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.id}
                  className={`block nav-link ${
                    activeSection === item.id.slice(1) ? "nav-link-active" : ""
                  }`}
                  data-section={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          Main
      ═══════════════════════════════════════ */}

      <main className="relative max-w-5xl px-4 pb-20 mx-auto sm:px-6 pt-28 overflow-x-clip">
        {/* ─────────────────────────────────────
            Hero
        ───────────────────────────────────── */}
        <section
          id="hero"
          ref={(el) => {
            sectionRefs.current.hero = el;
          }}
          className="min-h-[88vh] flex items-center mb-32 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center w-full min-w-0">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="hero-item hero-delay-1 section-badge">
                <span className="status-dot" />
                آماده همکاری
              </div>

              <p className="mb-2 text-sm hero-item hero-delay-1 text-slate-500 dark:text-slate-400">
                سلام، من
              </p>

              <h1 className="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white mb-3">
                {profile.name}
              </h1>

              <p className="hero-item hero-delay-3 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-10 wrap-break-word">
                <span
                  id="typewriter"
                  className="typewriter-cursor gradient-text"
                >
                  {typewriterText}
                </span>
              </p>

              <p className="hero-item hero-delay-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-[1.55] mb-8 max-w-lg">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-3 mb-10 hero-item hero-delay-4">
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-primary"
                  id="download-resume"
                >
                  {icons.download}
                  دریافت رزومه
                </a>

                <a
                  href="#projects"
                  className="btn-outline"
                  onClick={(e) => handleNavClick(e, "#projects")}
                >
                  {icons.layers}
                  دیدن نمونه‌کارها
                </a>
              </div>

              <div className="grid max-w-md min-w-0 grid-cols-3 gap-2 mb-8 hero-item hero-delay-5 sm:gap-3">
                <div className="stat-card">
                  <div className="stat-value">+۵</div>
                  <div className="stat-label">سال سابقه</div>
                </div>

                <div className="stat-card">
                  <div className="stat-value">+۸</div>
                  <div className="stat-label">پروژه انجام‌شده</div>
                </div>

                <div className="stat-card">
                  <div className="stat-value">+۶</div>
                  <div className="stat-label">کارفرمای راضی</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm hero-item hero-delay-5 text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  {icons.location}
                  {profile.location}
                </span>

                <span className="flex items-center gap-2">
                  {icons.mail}
                  {profile.email}
                </span>

                <span className="flex items-center gap-2">
                  {icons.phone}
                  09364804902
                </span>
              </div>
            </div>

            {/* Profile */}

            <div className="flex justify-center order-1 w-full min-w-0 hero-item hero-delay-3 lg:order-2 lg:justify-end">
              <div className="profile-wrap">
                <div className="profile-ring" />
                <div className="relative glass-card p-6 w-full max-w-65 sm:max-w-70 mx-auto">
                  <div className="status-badge">
                    <span className="status-dot" />
                    آنلاین
                  </div>

                  <div className="flex items-center justify-center w-full shadow-lg aspect-square rounded-2xl bg-linear-to-br from-primary-500 via-primary-600 to-accent-500 shadow-primary-500/30">
                    <Image
                      src="/photo_H2.webp"
                      alt="Profile"
                      width={260}
                      height={260}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {profile.name}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {profile.title}
                    </p>
                  </div>

                  <div className="flex justify-center gap-2 pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/50">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn p-2!"
                      aria-label="گیت‌هاب"
                    >
                      {icons.github}
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn p-2!"
                      aria-label="لینکدین"
                    >
                      {icons.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            Skills
        ═══════════════════════════════════════ */}

        <section
          id="skills"
          ref={(el) => {
            sectionRefs.current.skills = el;
          }}
          className="mb-32 scroll-mt-28"
        >
          <div
            ref={(el) => {
              revealRefs.current.skillsTitle = el;
            }}
            data-reveal-id="skillsTitle"
            className={`mb-12 reveal ${
              isRevealed("skillsTitle") ? "visible" : ""
            }`}
          >
            <div className="section-badge">
              {icons.code}
              مهارت‌ها
            </div>

            <h2 className="section-title">ابزارها و مهارت‌های من</h2>

            <p className="section-subtitle">
              زبان‌ها، فریم‌ورک‌ها و ابزارهایی که هر روز باهاشون کار می‌کنم.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tags */}

            <div
              ref={(el) => {
                revealRefs.current.skillTags = el;
              }}
              data-reveal-id="skillTags"
              className={`p-6 glass-card sm:p-8 reveal ${
                isRevealed("skillTags") ? "visible" : ""
              }`}
            >
              <h3 className="mb-5 text-sm font-bold text-slate-900 dark:text-white">
                فناوری‌های اصلی
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skillTags.map((tag, i) => {
                  const id = `skill-tag-${i}`;

                  return (
                    <span
                      key={i}
                      ref={(el) => {
                        revealRefs.current[id] = el;
                      }}
                      data-reveal-id={id}
                      className={`skill-tag reveal ${
                        isRevealed(id) ? "visible" : ""
                      }`}
                      style={{
                        transitionDelay: `${i * 40}ms`,
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Skill Bars */}

            <div
              ref={(el) => {
                revealRefs.current.skillBars = el;
              }}
              data-reveal-id="skillBars"
              className={`p-6 glass-card sm:p-8 reveal ${
                isRevealed("skillBars") ? "visible" : ""
              }`}
            >
              <h3 className="mb-6 text-sm font-bold text-slate-900 dark:text-white">
                سطح تسلط
              </h3>

              <div className="space-y-5">
                {skillBars.map((skill, i) => {
                  const revealId = `skill-bar-${i}`;
                  const progressId = `progress-${i}`;

                  return (
                    <div
                      key={i}
                      ref={(el) => {
                        revealRefs.current[revealId] = el;
                      }}
                      data-reveal-id={revealId}
                      className={`reveal ${
                        isRevealed(revealId) ? "visible" : ""
                      }`}
                      style={{
                        transitionDelay: `${i * 70}ms`,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>

                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                          {skill.level}٪
                        </span>
                      </div>

                      <div className="progress-bar">
                        <div
                          ref={(el) => {
                            progressRefs.current[progressId] = el;
                          }}
                          data-progress-id={progressId}
                          className={`progress-fill ${
                            animatedBars.has(progressId) ? "animate" : ""
                          }`}
                          style={
                            {
                              "--progress": `${skill.level}%`,
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            Experience
        ═══════════════════════════════════════ */}

        <section
          id="experience"
          ref={(el) => {
            sectionRefs.current.experience = el;
          }}
          className="mb-32 scroll-mt-28"
        >
          <div
            ref={(el) => {
              revealRefs.current.experienceTitle = el;
            }}
            data-reveal-id="experienceTitle"
            className={`mb-12 reveal ${
              isRevealed("experienceTitle") ? "visible" : ""
            }`}
          >
            <div className="section-badge">
              {icons.briefcase}
              سوابق
            </div>
            <h2 className="section-title">مسیر حرفه‌ای من</h2>

            <p className="section-subtitle">
              نگاهی به مسیر شغلی‌ام؛ از اولین پروژه‌ها تا کارهای اخیر.
            </p>
          </div>

          <div className="relative mr-1">
            {experiences.map((exp, i) => {
              const revealId = `experience-${i}`;

              return (
                <div
                  key={i}
                  ref={(el) => {
                    revealRefs.current[revealId] = el;
                  }}
                  data-reveal-id={revealId}
                  className={`relative pb-10 pr-10 last:pb-0 reveal ${
                    isRevealed(revealId) ? "visible" : ""
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="timeline-dot" />

                  <div className="p-6 glass-card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-bold rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400">
                        {exp.period}
                      </span>

                      <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        {icons.briefcase}
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="timeline-line" aria-hidden="true" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            Projects
        ═══════════════════════════════════════ */}

        <section
          id="projects"
          ref={(el) => {
            sectionRefs.current.projects = el;
          }}
          className="mb-32 scroll-mt-28"
        >
          <div
            ref={(el) => {
              revealRefs.current.projectsTitle = el;
            }}
            data-reveal-id="projectsTitle"
            className={`mb-12 reveal ${
              isRevealed("projectsTitle") ? "visible" : ""
            }`}
          >
            <div className="section-badge">
              {icons.layers}
              پروژه‌ها
            </div>

            <h2 className="section-title">نمونه‌کارهای منتخب</h2>

            <p className="section-subtitle">
              چند نمونه از پروژه‌هایی که طراحی و توسعه‌شون رو بر عهده داشتم.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => {
              const revealId = `project-${i}`;

              return (
                <article
                  key={i}
                  ref={(el) => {
                    revealRefs.current[revealId] = el;
                  }}
                  data-reveal-id={revealId}
                  className={`project-card group reveal ${
                    isRevealed(revealId) ? "visible" : ""
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="project-image-wrap">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="project-image"
                    />

                    <div className="project-overlay">
                      <h3 className="mb-1 text-lg font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mb-3 text-sm leading-relaxed text-slate-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/15 text-white/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
                        target={project.blank ? "_blank" : "_self"}
                        rel={project.blank ? "noopener noreferrer" : undefined}
                      >
                        مشاهده
                        {icons.externalLink}
                      </a>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="mb-1 font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            Contact
        ═══════════════════════════════════════ */}

        <section
          id="contact"
          ref={(el) => {
            sectionRefs.current.contact = el;
          }}
          className="scroll-mt-28"
        >
          <div
            ref={(el) => {
              revealRefs.current.contact = el;
            }}
            data-reveal-id="contact"
            className={`relative p-10 overflow-hidden text-center glass-card sm:p-14 reveal ${
              isRevealed("contact") ? "visible" : ""
            }`}
          >
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary-500/5 to-accent-500/5" />

            <div className="relative">
              <div className="mx-auto section-badge">تماس</div>

              <h2 className="mb-3 section-title">همکاری کنیم؟</h2>
              <p className="section-subtitle mb-8! mx-auto">
                اگر پروژه‌ای دارید یا به دنبال نیروی فرانت‌اند هستید، خوشحال
                می‌شوم باهاتون همکاری کنم.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:09364804902" className="btn-primary">
                  {icons.phone}
                  تماس با من
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {icons.linkedin}
                  لینکدین
                </a>
              </div>

              <p className="section-subtitle mt-8! mx-auto my-auto">
                آیدی تلگرام :{" "}
                <a
                  href="https://t.me/lho3ein1"
                  className="w-full hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lho3ein1
                </a>
              </p>

              <p className="section-subtitle mt-4! mx-auto my-auto">
                یا ارسال ایمیل به{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════
          Footer
      ═══════════════════════════════════════ */}

      <footer id="footer">
        <div className="border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="flex flex-col items-center justify-between max-w-5xl gap-3 px-4 py-8 mx-auto text-sm sm:px-6 sm:flex-row text-slate-500 dark:text-slate-400">
            <p>
              © {year} {profile.name}
            </p>

            <p className="flex items-center gap-1.5">
              طراحی و توسعه با {icons.code}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

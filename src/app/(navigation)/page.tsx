import { icons } from "@/app/feature/icons";
import {
  profile,
  navItems,
  skillTags,
  skillBars,
  experiences,
  projects,
} from "@/app/feature/content";
import React from "react";
import Script from "next/script";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div
      id="body"
      className="min-h-screen font-sans transition-all duration-300 text-slate-800 dark:text-slate-100"
    >
      <div className="bg-mesh" aria-hidden="true"></div>
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <header
        id="header"
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 overflow-x-clip"
      >
        <nav
          className="flex items-center justify-between max-w-5xl gap-4 mx-auto nav-bar"
          aria-label="ناوبری اصلی"
        >
          <a href="#hero" className="nav-logo shrink-0">
            <span id="nav-logo" className="block dark:hidden">
              {icons.logoNh}
            </span>
            <span id="nav-logo-dark" className="hidden dark:block">
              {icons.logoNhDrk}
            </span>
          </a>
          <ul id="nav-links" className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.id} className="nav-link" data-section={item.id}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="theme-toggle"
              type="button"
              className="icon-btn"
              aria-label="تغییر تم"
            ></button>
            <button
              id="mobile-menu-btn"
              type="button"
              className="icon-btn lg:hidden"
              aria-label="باز کردن منو"
              aria-expanded="false"
            ></button>
          </div>
        </nav>
        <div
          id="mobile-menu"
          className="hidden max-w-5xl mx-auto mt-2 mobile-menu lg:hidden"
        >
          <ul id="mobile-nav-links" className="flex flex-col p-2">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.id}
                  className="block nav-link"
                  data-section={item.id}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="relative max-w-5xl px-4 pb-20 mx-auto sm:px-6 pt-28 overflow-x-clip">
        {/* hero */}
        <section
          id="hero"
          className="min-h-[88vh] flex items-center mb-32 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center w-full min-w-0">
            <div className="order-2 min-w-0 lg:order-1">
              <div className="hero-item hero-delay-1 section-badge">
                <span className="status-dot"></span>
                آماده همکاری
              </div>

              <p className="mb-3 text-sm hero-item hero-delay-1 text-slate-500 dark:text-slate-400">
                سلام، من
              </p>

              <h1 className="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white mb-4">
                {profile.name}
              </h1>

              <p className="hero-item hero-delay-3 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-[2.5rem] break-words">
                <span
                  id="typewriter"
                  className="typewriter-cursor gradient-text"
                ></span>
              </p>

              <p className="hero-item hero-delay-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-[1.9] mb-8 max-w-lg">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-3 mb-10 hero-item hero-delay-4">
                <a
                  href={`${profile.resumeUrl}`}
                  download
                  className="btn-primary"
                  id="download-resume"
                >
                  {icons.download}
                  دریافت رزومه
                </a>
                <a href="#projects" className="btn-outline">
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
                  <div className="stat-value">+۴</div>
                  <div className="stat-label">کارفرمای راضی</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm hero-item hero-delay-5 text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  {icons.location} {profile.location}
                </span>
                <span className="flex items-center gap-2">
                  {icons.mail} {profile.email}
                </span>
                <span className="flex items-center gap-2">
                  {icons.phone} 09364804902
                </span>
              </div>
            </div>

            <div className="flex justify-center order-1 w-full min-w-0 hero-item hero-delay-3 lg:order-2 lg:justify-end">
              <div className="profile-wrap">
                <div className="profile-ring"></div>
                <div className="relative glass-card p-6 w-full max-w-[260px] sm:max-w-[280px] mx-auto shadow-card">
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    آنلاین
                  </div>
                  <div className="flex items-center justify-center w-full shadow-lg aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 shadow-primary-500/30">
                    <img
                      src="/photo_H2.webp"
                      alt="Profile"
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {profile.title}
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/50">
                    <a
                      href={`${profile.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn !p-2"
                      aria-label="گیت‌هاب"
                    >
                      {icons.github}
                    </a>
                    <a
                      href={`${profile.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn !p-2"
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

        {/* skills */}
        <section id="skills" className="mb-32 scroll-mt-28">
          <div className="mb-12 reveal">
            <div className="section-badge">{icons.code} مهارت‌ها</div>
            <h2 className="section-title">ابزارها و مهارت‌های من</h2>
            <p className="section-subtitle">
              زبان‌ها، فریم‌ورک‌ها و ابزارهایی که هر روز باهاشون کار می‌کنم.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="p-6 glass-card sm:p-8 reveal">
              <h3 className="mb-5 text-sm font-bold text-slate-900 dark:text-white">
                فناوری‌های اصلی
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillTags.map((tag, i) => (
                  <span
                    key={i}
                    className="skill-tag reveal"
                    style={
                      {
                        transitionDelay: `${i * 40}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 glass-card sm:p-8 reveal">
              <h3 className="mb-6 text-sm font-bold text-slate-900 dark:text-white">
                سطح تسلط
              </h3>
              <div className="space-y-5">
                {skillBars.map((skill, i) => (
                  <div
                    key={i}
                    className="reveal"
                    style={
                      {
                        transitionDelay: `${i * 70}ms`,
                      } as React.CSSProperties
                    }
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
                        className="progress-fill"
                        style={
                          {
                            "--progress": `${skill.level}%`,
                          } as React.CSSProperties
                        }
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="mb-32 scroll-mt-28">
          <div className="mb-12 reveal">
            <div className="section-badge">{icons.briefcase} سوابق</div>
            <h2 className="section-title">مسیر حرفه‌ای من</h2>
            <p className="section-subtitle">
              نگاهی به مسیر شغلی‌ام؛ از اولین پروژه‌ها تا کارهای اخیر.
            </p>
          </div>
          <div className="relative mr-1">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pb-10 pr-10 last:pb-0 reveal"
                style={
                  {
                    transitionDelay: `${i * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="timeline-dot"></div>
                <div className="p-6 glass-card-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-bold rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400">
                      {exp.period}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      {icons.briefcase} {exp.company}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="timeline-line" aria-hidden="true"></div>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="mb-32 scroll-mt-28">
          <div className="mb-12 reveal">
            <div className="section-badge">{icons.layers} پروژه‌ها</div>
            <h2 className="section-title">نمونه‌کارهای منتخب</h2>
            <p className="section-subtitle">
              چند نمونه از پروژه‌هایی که طراحی و توسعه‌شون رو بر عهده داشتم.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <article
                key={i}
                className="project-card group reveal"
                style={
                  { transitionDelay: `${i * 80}ms` } as React.CSSProperties
                }
              >
                <div className="project-image-wrap">
                  <img
                    src={`${project.image}`}
                    alt={`${project.title}`}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-md bg-white/15 text-white/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`${project.link}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
                      target={`${project.blank ? "_blank" : "_self"}`}
                      rel="noopener noreferrer"
                    >
                      مشاهده {icons.externalLink}
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
            ))}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="scroll-mt-28">
          <div className="relative p-10 overflow-hidden text-center glass-card sm:p-14 reveal">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-500/5 to-accent-500/5"></div>
            <div className="relative">
              <div className="mx-auto section-badge">تماس</div>
              <h2 className="mb-3 section-title">همکاری کنیم؟</h2>
              <p className="section-subtitle !mb-8 mx-auto">
                اگر پروژه‌ای دارید یا به دنبال نیروی فرانت‌اند هستید، خوشحال
                می‌شوم باهاتون همکاری کنم.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:09364804902" className="btn-primary">
                  {icons.phone} تماس با من
                </a>
                <a
                  href={`${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {icons.linkedin} لینکدین
                </a>
              </div>
              <p className="section-subtitle !mt-8 mx-auto my-auto">
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
              <p className="section-subtitle !mt-4 mx-auto my-auto">
                یا ارسال ایمیل به{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="w-full hover:underline"
                >
                  lho3ein81@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
      <Script type="module" src="/main.js" strategy="afterInteractive" />
    </div>
  );
}

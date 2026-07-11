(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}})();const n={logo:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 inline-block ml-1"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',download:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',externalLink:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',phone:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',location:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',briefcase:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',layers:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'},r={name:"حسین خلیلی",title:"توسعه‌دهنده فرانت‌اند",location:"تهران، ایران",email:"lho3ein81@gmail.com",github:"https://github.com/lho3ein",linkedin:"https://www.linkedin.com/in/lho3ein",resumeUrl:"/resume-HosseinKhalili.pdf",typewriterTexts:["توسعه‌دهنده فرانت‌اند","طراح رابط کاربری مدرن","برنامه نویس React"],bio:"من یک Front-End Developer هستم که علاقه زیادی به ساخت رابط‌های کاربری زیبا، سریع و کاربردی دارم. در مسیر یادگیری و توسعه مهارت‌هایم چندین پروژه عملی انجام داده‌ام و تجربه همکاری در چند محیط کاری را داشته‌ام."},B=[{id:"hero",label:"خانه"},{id:"skills",label:"مهارت‌ها"},{id:"experience",label:"سوابق"},{id:"projects",label:"پروژه‌ها"},{id:"contact",label:"تماس"}],I=["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Vite","Git","Figma","REST API"],j=[{name:"توسعه فرانت‌اند",level:92},{name:"جاوااسکریپت و تایپ‌اسکریپت",level:98},{name:"ری اکت و نکست جی اس",level:92},{name:"بهینه‌سازی عملکرد",level:85},{name:"دسترسی‌پذیری وب",level:80},{name:"کار تیمی و چابک",level:90}],M=[{period:"۱۴۰۴ — ۱۴۰۵",role:"توسعه‌دهنده فرانت‌اند",company:"تیم الگوریتا",description:"ساخت داشبورد مدیریتی،اتصال به APIهای بک‌اند، پیاده‌سازی و همکاری نزدیک با تیم طراحی برای بهبود تجربه کاربری.",tags:["React","Next","TypeScript","Tailwind"]},{period:"۱۴۰۱ — ۱۴۰۲",role:"شرکت Emrc",company:"ورود اطلاعات",description:"همکاری نزدیک با تیم فنی برای بهبود کیفیت فنی برنامه",tags:["Form Security"]}],T="Vazirmatn, Tahoma, sans-serif";function p(e,t,s){return"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${t}"/><stop offset="100%" style="stop-color:${s}"/></linearGradient></defs><rect fill="url(#g)" width="400" height="240"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="${T}" font-size="20">${e}</text></svg>`)}const S=[{title:"سامانه مدیریت وظایف",description:"ابزاری برای مدیریت پروژه با قابلیت کشیدن و رها کردن کارت‌ها، همگام‌سازی لحظه‌ای و کار آفلاین.",image:p("مدیریت وظایف","#444ce7","#0ea5e9"),tags:["React","TypeScript","IndexedDB"],link:"#"},{title:"فروشگاه اینترنتی",description:"فروشگاه آنلاین با سبد خرید، درگاه پرداخت و پنل مدیریت کامل برای فروشندگان.",image:p("فروشگاه آنلاین","#7c3aed","#db2777"),tags:["Next.js","Stripe","Prisma"],link:"#"},{title:"داشبورد گزارش‌گیری",description:"نمایش آمار و نمودارهای زنده با فیلترهای پیشرفته برای تحلیل داده‌های کسب‌وکار.",image:p("داشبورد تحلیلی","#0284c7","#059669"),tags:["Vue 3","D3.js","WebSocket"],link:"#"},{title:"رزومه آنلاین",description:"پورتفولیوی شخصی تعاملی با انیمیشن‌های روان، تم تاریک و روشن و طراحی واکنش‌گرا.",image:p("رزومه آنلاین","#d97706","#dc2626"),tags:["Vite","Tailwind","Vanilla JS"],link:"#"}];function H(){const e=document.getElementById("nav-logo");e.innerHTML=`${n.logo}<span>حسین.dev</span>`;const t=document.getElementById("nav-links"),s=document.getElementById("mobile-nav-links");B.forEach(i=>{t.innerHTML+=`<li><a href="#${i.id}" class="nav-link" data-section="${i.id}">${i.label}</a></li>`,s.innerHTML+=`<li><a href="#${i.id}" class="nav-link block" data-section="${i.id}">${i.label}</a></li>`})}function C(){const e=document.getElementById("hero");e.innerHTML=`
    <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center w-full min-w-0">
      <div class="order-2 lg:order-1 min-w-0">
        <div class="hero-item hero-delay-1 section-badge">
          <span class="status-dot"></span>
          آماده همکاری
        </div>

        <p class="hero-item hero-delay-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
          سلام، من
        </p>

        <h1 class="hero-item hero-delay-2 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white mb-4">
          ${r.name}
        </h1>

        <p class="hero-item hero-delay-3 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-[2.5rem] break-words">
          <span id="typewriter" class="typewriter-cursor gradient-text"></span>
        </p>

        <p class="hero-item hero-delay-3 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-[1.9] mb-8 max-w-lg">
          ${r.bio}
        </p>

        <div class="hero-item hero-delay-4 flex flex-wrap gap-3 mb-10">
          <a href="${r.resumeUrl}" download class="btn-primary" id="download-resume">
            ${n.download}
            دریافت رزومه
          </a>
          <a href="#projects" class="btn-outline">
            ${n.layers}
            دیدن نمونه‌کارها
          </a>
        </div>

        <div class="hero-item hero-delay-5 grid grid-cols-3 gap-2 sm:gap-3 max-w-md mb-8 min-w-0">
          <div class="stat-card">
            <div class="stat-value">+۲</div>
            <div class="stat-label">سال سابقه</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">+۸</div>
            <div class="stat-label">پروژه انجام‌شده</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">+۴</div>
            <div class="stat-label">کارفرمای راضی</div>
          </div>
        </div>

        <div class="hero-item hero-delay-5 flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-2">${n.location} ${r.location}</span>
          <span class="flex items-center gap-2">${n.mail} ${r.email}</span>
          <span class="flex items-center gap-2">${n.phone} 09364804902</span>
        </div>
      </div>

      <div class="hero-item hero-delay-3 order-1 lg:order-2 flex justify-center lg:justify-end min-w-0 w-full">
        <div class="profile-wrap">
          <div class="profile-ring"></div>
          <div class="relative glass-card p-6 w-full max-w-[260px] sm:max-w-[280px] mx-auto shadow-card">
            <div class="status-badge">
              <span class="status-dot"></span>
              آنلاین
            </div>
            <div class="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <span class="text-white text-7xl font-black select-none">${r.name.charAt(0)}</span>
            </div>
            <div class="mt-5 text-center">
              <p class="font-bold text-lg text-slate-900 dark:text-white">${r.name}</p>
              <p class="text-primary-600 dark:text-primary-400 text-sm mt-1 font-medium">${r.title}</p>
            </div>
            <div class="flex justify-center gap-2 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/50">
              <a href="${r.github}" target="_blank" rel="noopener noreferrer" class="icon-btn !p-2" aria-label="گیت‌هاب">${n.github}</a>
              <a href="${r.linkedin}" target="_blank" rel="noopener noreferrer" class="icon-btn !p-2" aria-label="لینکدین">${n.linkedin}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function A(){const e=document.getElementById("skills"),t=I.map((i,l)=>`<span class="skill-tag reveal" style="transition-delay:${l*40}ms">${i}</span>`).join(""),s=j.map((i,l)=>`
      <div class="reveal" style="transition-delay:${l*70}ms">
        <div class="flex justify-between mb-2">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">${i.name}</span>
          <span class="text-sm font-bold text-primary-600 dark:text-primary-400">${i.level}٪</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress:${i.level}%"></div>
        </div>
      </div>`).join("");e.innerHTML=`
    <div class="reveal mb-12">
      <div class="section-badge">${n.code} مهارت‌ها</div>
      <h2 class="section-title">ابزارها و مهارت‌های من</h2>
      <p class="section-subtitle">زبان‌ها، فریم‌ورک‌ها و ابزارهایی که هر روز باهاشون کار می‌کنم.</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-6">
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-5">فناوری‌های اصلی</h3>
        <div class="flex flex-wrap gap-2.5">${t}</div>
      </div>
      <div class="glass-card p-6 sm:p-8 reveal">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-6">سطح تسلط</h3>
        <div class="space-y-5">${s}</div>
      </div>
    </div>
  `}function O(){const e=document.getElementById("experience"),t=M.map((s,i)=>`
      <div class="relative pr-10 pb-10 last:pb-0 reveal" style="transition-delay:${i*100}ms">
        <div class="timeline-dot"></div>
        <div class="glass-card-hover p-6">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="text-xs font-bold px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400">${s.period}</span>
            <span class="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">${n.briefcase} ${s.company}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${s.role}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">${s.description}</p>
          <div class="flex flex-wrap gap-2">
            ${s.tags.map(l=>`<span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">${l}</span>`).join("")}
          </div>
        </div>
      </div>`).join("");e.innerHTML=`
    <div class="reveal mb-12">
      <div class="section-badge">${n.briefcase} سوابق</div>
      <h2 class="section-title">مسیر حرفه‌ای من</h2>
      <p class="section-subtitle">نگاهی به مسیر شغلی‌ام؛ از اولین پروژه‌ها تا کارهای اخیر.</p>
    </div>
    <div class="relative mr-1">${t}<div class="timeline-line" aria-hidden="true"></div></div>
  `}function z(){const e=document.getElementById("projects"),t=S.map((s,i)=>`
      <article class="project-card group reveal" style="transition-delay:${i*80}ms">
        <div class="project-image-wrap">
          <img src="${s.image}" alt="${s.title}" class="project-image" loading="lazy" />
          <div class="project-overlay">
            <h3 class="text-white font-bold text-lg mb-1">${s.title}</h3>
            <p class="text-slate-300 text-sm mb-3 leading-relaxed">${s.description}</p>
            <div class="flex flex-wrap gap-1.5 mb-3">
              ${s.tags.map(l=>`<span class="text-xs px-2 py-0.5 rounded-md bg-white/15 text-white/90">${l}</span>`).join("")}
            </div>
            <a href="${s.link}" class="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300">
              مشاهده ${n.externalLink}
            </a>
          </div>
        </div>
        <div class="p-5">
          <h3 class="font-bold text-slate-900 dark:text-white mb-1">${s.title}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${s.description}</p>
        </div>
      </article>`).join("");e.innerHTML=`
    <div class="reveal mb-12">
      <div class="section-badge">${n.layers} پروژه‌ها</div>
      <h2 class="section-title">نمونه‌کارهای منتخب</h2>
      <p class="section-subtitle">چند نمونه از پروژه‌هایی که طراحی و توسعه‌شون رو بر عهده داشتم.</p>
    </div>
    <div class="grid sm:grid-cols-2 gap-5">${t}</div>
  `}function P(){const e=document.getElementById("contact");e.innerHTML=`
    <div class="glass-card p-10 sm:p-14 text-center reveal relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 pointer-events-none"></div>
      <div class="relative">
        <div class="section-badge mx-auto">تماس</div>
        <h2 class="section-title mb-3">همکاری کنیم؟</h2>
        <p class="section-subtitle !mb-8 mx-auto">اگر پروژه‌ای دارید یا به دنبال نیروی فرانت‌اند هستید، خوشحال می‌شوم باهاتون صحبت کنم.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="mailto:${r.email}" class="btn-primary">${n.mail} ارسال ایمیل</a>
          <a href="${r.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-outline">${n.linkedin} لینکدین</a>
        </div>
        <p class="section-subtitle !mt-8 mx-auto">یا تماس با شماره 09364804902</p>
      </div>
    </div>
  `}function F(){const e=document.getElementById("footer"),t=new Date().getFullYear();e.innerHTML=`
    <div class="border-t border-slate-200/60 dark:border-slate-800/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p>© ${t} ${r.name}</p>
        <p class="flex items-center gap-1.5">طراحی و توسعه با ${n.code}</p>
      </div>
    </div>
  `}function N(){H(),C(),A(),O(),z(),P(),F()}N();const w="resume-theme",x=document.documentElement,f=document.getElementById("theme-toggle");function V(){const e=localStorage.getItem(w);return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function y(e){x.classList.toggle("dark",e==="dark"),f.innerHTML=e==="dark"?n.sun:n.moon,localStorage.setItem(w,e)}y(V());f.addEventListener("click",()=>{const e=x.classList.contains("dark")?"light":"dark";x.style.setProperty("color-scheme",e),y(e)});const d=document.getElementById("mobile-menu-btn"),q=document.getElementById("mobile-menu");let b=!1;function k(e){b=e,q.classList.toggle("hidden",!e),d.innerHTML=e?n.close:n.menu,d.setAttribute("aria-expanded",String(e)),d.setAttribute("aria-label",e?"بستن منو":"باز کردن منو")}d.innerHTML=n.menu;d.addEventListener("click",()=>k(!b));document.getElementById("mobile-nav-links").addEventListener("click",e=>{e.target.closest("a")&&k(!1)});const R=document.getElementById("header");window.addEventListener("scroll",()=>{R.classList.toggle("header-scrolled",window.scrollY>20)},{passive:!0});const D=document.querySelectorAll("section[id]"),_=document.querySelectorAll(".nav-link");function G(e){_.forEach(t=>{t.classList.toggle("nav-link-active",t.dataset.section===e)})}const K=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&G(t.target.id)})},{rootMargin:"-35% 0px -45% 0px",threshold:0});D.forEach(e=>K.observe(e));document.addEventListener("click",e=>{const t=e.target.closest('a[href^="#"]');if(!t)return;const s=t.getAttribute("href").slice(1),i=document.getElementById(s);i&&(e.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",`#${s}`))});const $=new IntersectionObserver(e=>{e.forEach(t=>{if(!t.isIntersecting)return;t.target.classList.add("visible");const s=t.target.querySelector(".progress-fill");s&&requestAnimationFrame(()=>s.classList.add("animate")),$.unobserve(t.target)})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});function U(){document.querySelectorAll(".reveal").forEach(e=>$.observe(e))}U();const h=document.getElementById("typewriter"),u=r.typewriterTexts;let v=0,o=0,g=!1,c=80;function E(){const e=u[v];g?(h.textContent=e.substring(0,o-1),o--,o===0?(g=!1,v=(v+1)%u.length,c=500):c=40):(h.textContent=e.substring(0,o+1),o++,o===e.length?(g=!0,c=2e3):c=80),setTimeout(E,c)}setTimeout(E,1e3);const L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),L.unobserve(t.target))})},{threshold:.5});document.querySelectorAll(".progress-fill").forEach(e=>L.observe(e));

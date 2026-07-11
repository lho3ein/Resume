export const profile = {
   name: "حسین خلیلی",
   title: "توسعه‌دهنده فرانت‌اند",
   location: "تهران، ایران",
   email: "lho3ein81@gmail.com",
   github: "https://github.com/lho3ein",
   linkedin: "https://www.linkedin.com/in/lho3ein",
   resumeUrl: "/public/resume-HosseinKhalili.pdf",
   avatar: null,
   typewriterTexts: ["توسعه‌دهنده فرانت‌اند", "طراح رابط کاربری مدرن", "برنامه نویس React"],
   //  bio: "سلام! من حسین خلیلی هستم، توسعه‌دهنده فرانت‌اند با تخصص در React و Next.js. علاقه‌مند به ایجاد رابط‌های کاربری مدرن و تجربه‌های وب تعاملی هستم. هدف من ارائه راه‌حل‌های خلاقانه و بهینه برای کاربران است.",
   bio: "من یک Front-End Developer هستم که علاقه زیادی به ساخت رابط‌های کاربری زیبا، سریع و کاربردی دارم. در مسیر یادگیری و توسعه مهارت‌هایم چندین پروژه عملی انجام داده‌ام و تجربه همکاری در چند محیط کاری را داشته‌ام.",
};

export const navItems = [
   { id: "hero", label: "خانه" },
   { id: "skills", label: "مهارت‌ها" },
   { id: "experience", label: "سوابق" },
   { id: "projects", label: "پروژه‌ها" },
   { id: "contact", label: "تماس" },
];

export const skillTags = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite", "Git", "Figma", "REST API"];

export const skillBars = [
   { name: "توسعه فرانت‌اند", level: 92 },
   { name: "جاوااسکریپت و تایپ‌اسکریپت", level: 98 },
   { name: "ری اکت و نکست جی اس", level: 92 },
   { name: "بهینه‌سازی عملکرد", level: 85 },
   { name: "دسترسی‌پذیری وب", level: 80 },
   { name: "کار تیمی و چابک", level: 90 },
];

export const experiences = [
   {
      period: "۱۴۰۴ — ۱۴۰۵",
      role: "توسعه‌دهنده فرانت‌اند",
      company: "تیم الگوریتا",
      // description: "طراحی سیستم طراحی یکپارچه و کاهش چهل درصد زمان بارگذاری صفحات با استفاده از nextjs.",
      description: "ساخت داشبورد مدیریتی،اتصال به APIهای بک‌اند، پیاده‌سازی و همکاری نزدیک با تیم طراحی برای بهبود تجربه کاربری.",
      tags: ["React", "Next", "TypeScript", "Tailwind"],
   },
   {
      period: "۱۴۰۱ — ۱۴۰۲",
      role: "شرکت Emrc",
      company: "ورود اطلاعات",
      description: "همکاری نزدیک با تیم فنی برای بهبود کیفیت فنی برنامه",
      tags: ["Form Security"],
   },
];

const svgFont = "Vazirmatn, Tahoma, sans-serif";

function projectImage(title, color1, color2) {
   return (
      "data:image/svg+xml," +
      encodeURIComponent(
         `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color1}"/><stop offset="100%" style="stop-color:${color2}"/></linearGradient></defs><rect fill="url(#g)" width="400" height="240"/><text x="200" y="125" text-anchor="middle" fill="white" font-family="${svgFont}" font-size="20">${title}</text></svg>`,
      )
   );
}

export const projects = [
   {
      title: "سامانه مدیریت وظایف",
      description: "ابزاری برای مدیریت پروژه با قابلیت کشیدن و رها کردن کارت‌ها، همگام‌سازی لحظه‌ای و کار آفلاین.",
      image: projectImage("مدیریت وظایف", "#444ce7", "#0ea5e9"),
      tags: ["React", "TypeScript", "IndexedDB"],
      link: "#",
   },
   {
      title: "فروشگاه اینترنتی",
      description: "فروشگاه آنلاین با سبد خرید، درگاه پرداخت و پنل مدیریت کامل برای فروشندگان.",
      image: projectImage("فروشگاه آنلاین", "#7c3aed", "#db2777"),
      tags: ["Next.js", "Stripe", "Prisma"],
      link: "#",
   },
   {
      title: "داشبورد گزارش‌گیری",
      description: "نمایش آمار و نمودارهای زنده با فیلترهای پیشرفته برای تحلیل داده‌های کسب‌وکار.",
      image: projectImage("داشبورد تحلیلی", "#0284c7", "#059669"),
      tags: ["Vue 3", "D3.js", "WebSocket"],
      link: "#",
   },
   {
      title: "رزومه آنلاین",
      description: "پورتفولیوی شخصی تعاملی با انیمیشن‌های روان، تم تاریک و روشن و طراحی واکنش‌گرا.",
      image: projectImage("رزومه آنلاین", "#d97706", "#dc2626"),
      tags: ["Vite", "Tailwind", "Vanilla JS"],
      link: "#",
   },
];

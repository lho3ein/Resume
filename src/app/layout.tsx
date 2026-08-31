import type { Metadata } from "next";
// import "./globals.css";
import "./style.css";
// import "./fonts.css";
export const metadata: Metadata = {
  title: "حسین خلیلی توسعه‌دهنده فرانت‌اند",
  description: "حسین خلیلی توسعه‌دهنده فرانت‌اند",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`h-full antialiased`}>
      <body className="flex flex-col min-h-full">{children}</body>
    </html>
  );
}

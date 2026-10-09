import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Онлайн-обучение по психологии | Vlada Remizova",
  description: "Освойте профессию психолога или разберитесь в себе с ведущими экспертами. Бесплатный доступ на 7 дней.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-[#bef264] selection:text-black">
        {children}
      </body>
    </html>
  );
}

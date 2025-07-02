import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import { kottaOne, karla, stangith } from "@/lib/fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const metadata: Metadata = {
  title: "Biella | Portfolio",
  description: "A consolidated portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${kottaOne.variable} ${stangith.variable}`}>
      <body className={karla.className}>
        <div className="h-full flex flex-col">
          <Header />
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}

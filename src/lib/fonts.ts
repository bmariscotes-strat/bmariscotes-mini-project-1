import { Kotta_One, Karla } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
export const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const kottaOne = Kotta_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kotta-one",
});

// Local Fonts
export const stangith = localFont({
  src: "../../public/fonts/stangith.ttf",
  display: "swap",
  variable: "--font-stangith",
  fallback: ["serif"],
});

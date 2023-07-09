import { ClassValue } from "clsx";
import { Crimson_Text, Inconsolata, Inter } from "next/font/google";
import localFont from "next/font/local";

export const cal = localFont({
  src: "./CalSans-SemiBold.otf",
  variable: "--font-display",
});

export const crimsonBold = Crimson_Text({
  weight: "700",
  variable: "--font-display",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-default",
  subsets: ["latin"],
});

export const inconsolataBold = Inconsolata({
  weight: "700",
  variable: "--font-display",
  subsets: ["latin"],
});

export const crimson = Crimson_Text({
  weight: "400",
  variable: "--font-default",
  subsets: ["latin"],
});

export const inconsolata = Inconsolata({
  variable: "--font-default",
  subsets: ["latin"],
});

export const displayFontMapper: { [key: string]: ClassValue } = {
  Default: cal.variable,
  Serif: crimsonBold.variable,
  Mono: inconsolataBold.variable,
};

export const defaultFontMapper: { [key: string]: ClassValue } = {
  Default: inter.variable,
  Serif: crimson.variable,
  Mono: inconsolata.variable,
};

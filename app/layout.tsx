import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notepad",
  description: "An AI powered notepad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-slate-900 dark:bg-black dark:text-slate-100"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

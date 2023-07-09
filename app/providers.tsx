"use client";
import { Analytics } from "@vercel/analytics/react";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";
import { displayFontMapper, defaultFontMapper } from "@/styles/fonts";
import useLocalStorage from "@/lib/hooks/use-local-storage";

export const AppContext = createContext<{
  font: string;
  setFont: Dispatch<SetStateAction<string>>;
}>({
  font: "Default",
  setFont: () => {},
});

export default function Providers({ children }: { children: ReactNode }) {
  const [font, setFont] = useLocalStorage<string>("notepad__font", "Default");

  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: "light-theme",
        dark: "dark-theme",
      }}
    >
      <AppContext.Provider
        value={{
          font,
          setFont: setFont as Dispatch<SetStateAction<string>>,
        }}
      >
        <Toaster className="dark:hidden" />
        <Toaster theme="dark" className="hidden dark:block" />
        <div className={cn(displayFontMapper[font], defaultFontMapper[font])}>
          {children}
        </div>
        <Analytics />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

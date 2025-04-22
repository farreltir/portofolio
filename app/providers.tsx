"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, ReactNode } from "react";

type CursorContextType = {
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
};

const CursorContext = createContext<CursorContextType>({
  cursorVariant: "default",
  setCursorVariant: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function Providers({ children }: { children: ReactNode }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
        {children}
      </CursorContext.Provider>
    </ThemeProvider>
  );
}
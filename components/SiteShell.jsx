"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";
import MotionProvider from "./MotionProvider";

export default function SiteShell({ children }) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const openCmd = useCallback(() => setCmdOpen(true), []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
    };
    const onOpen = () => setCmdOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("linea:open-command", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("linea:open-command", onOpen);
    };
  }, []);

  return (
    <MotionProvider>
      <a
        href="#top"
        className="skip-link sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header onOpenCommand={openCmd} />
      {children}
      <Footer />
      <CommandPalette open={cmdOpen} onClose={closeCmd} />
    </MotionProvider>
  );
}

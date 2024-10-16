"use client";
import { useState, useEffect } from "react";

export function Intro() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const currentMode = document.documentElement.getAttribute("data-mode") || "light";
    setMode(currentMode);

    const observer = new MutationObserver(() => {
      const updatedMode = document.documentElement.getAttribute("data-mode") || "light";
      setMode(updatedMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-mode"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center">
        <img id="light" src={mode === "dark" ? "/favicon/mainLogoDark.svg" : "/favicon/mainLogo.svg"} alt="Beep Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Beep</h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Stay Safe, Stay Connected with Beep</h4>
    </section>
  );
}

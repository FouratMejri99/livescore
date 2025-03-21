"use client";

import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create and append the script element
    const script = document.createElement("script");
    script.src = "https://ls.soccersapi.com/widget/res/w_default/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-24">
        <header className="text-center"></header>

        <main className="flex flex-col items-center justify-center w-full">
          <section className="w-full max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Live Scores
            </h2>
            <div
              id="ls-widget"
              data-w="w_default"
              className="livescore-widget mx-auto"
            ></div>
          </section>
        </main>

        <footer className="flex gap-6 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 My App</p>
          <span>•</span>
          <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">
            About
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">
            Contact
          </a>
        </footer>
      </div>
    </div>
  );
}

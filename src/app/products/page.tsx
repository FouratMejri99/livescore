"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Products() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-24">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Products
          </h1>
        </header>

        <main className="flex flex-col items-center justify-center w-full">
          {/* Video Section */}
          <section className="w-full max-w-4xl mx-auto mb-12">
            <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Email Form Section */}
          <section className="w-full max-w-md mx-auto mb-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subscribe to our newsletter
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 font-medium"
              >
                Send
              </button>
            </form>
          </section>

          {/* Products Grid */}
        </main>

        <footer className="flex gap-6 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 LiveScore</p>
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

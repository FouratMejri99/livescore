"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export default function News() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=football&from=2025-02-21&sortBy=publishedAt&apiKey=b23aaaefb9f143cc985a87dea09f8586"
        );
        const data: NewsResponse = await response.json();

        if (data.status === "ok") {
          setNews(data.articles.slice(0, 6)); // Get only 6 articles
        } else {
          setError("Failed to fetch news");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] pt-24">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest Football News
          </h1>
        </header>

        <main className="flex flex-col items-center justify-center w-full">
          {loading ? (
            <div className="text-center text-gray-600 dark:text-gray-400">
              Loading news...
            </div>
          ) : error ? (
            <div className="text-center text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : (
            <section className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((article, index) => (
                  <article
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {article.urlToImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.urlToImage}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(article.publishedAt)}
                        </span>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>

        <footer className="flex gap-6 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 LiveScore</p>
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

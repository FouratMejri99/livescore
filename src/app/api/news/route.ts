import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Log the API key (first few characters only) to verify it's being loaded
    console.log("API Key available:", !!process.env.NEWS_API_KEY);

    if (!process.env.NEWS_API_KEY) {
      console.error("NEWS_API_KEY is not defined");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const url = `https://newsapi.org/v2/everything?q=football&from=2025-02-21&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;
    console.log("Fetching from URL:", url);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("NewsAPI error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch news", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news from NewsAPI:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch news",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=football&from=2025-02-21&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news from NewsAPI:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

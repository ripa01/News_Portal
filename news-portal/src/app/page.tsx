"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";

// Define a TypeScript interface for the article structure
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

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=541907eefc1c46d2868b432fc9ee7d4d";

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch news");

        const data = await response.json();
        console.log(data);
        setNews(data?.articles || []);
      } catch (error) {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>

        {loading ? (
          <p>Loading news...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description || "No description available."}
                imageUrl={article.urlToImage || "https://via.placeholder.com/300"}
                link={article.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

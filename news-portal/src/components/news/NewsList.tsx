"use client"
import React, { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard"; 
import { fetchNews } from "@/lib/fetchNews";

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

const NewsList = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("business");

  // Categories to display as buttons
  const categories = ["business", "entertainment", "general", "health", "science","sports", "technology"];

  useEffect(() => {
    const getNews = async () => {
      const fetchedNews = await fetchNews(selectedCategory === "business" ? "" : selectedCategory);
      setNews(fetchedNews); // Update state with the fetched news
    };
    
    getNews(); // Fetch news whenever selectedCategory changes
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Latest News</h1>

      {/* Display Categories as Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-3 border uppercase border-gray-300 rounded-lg  ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article) => (
          <NewsCard
            key={article.url}
            title={article.title || "No Title Available"} // Provide a default value
            description={article.description || "No description available."} // Provide a default value
            imageUrl={article.urlToImage || "/default.jpg"} // Default image if no image is available
            link={article.url || "#"} // Fallback link if URL is missing
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;

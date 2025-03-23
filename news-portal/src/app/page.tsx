// "use client";
// import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import { Article } from "./globals/types";
import { getNews } from "./utils/get-news";

// Define a TypeScript interface for the article structure
// interface Article {
//   source: {
//     id: string | null;
//     name: string;
//   };
//   author: string | null;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string | null;
//   publishedAt: string;
//   content: string;
// }

export default async function Home() {
  const news: Article[] = await getNews();

  // const [news, setNews] = useState<Article[]>([]);
 

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const url =
  //    "https://newsapi.org/v2/top-headlines?country=us&apiKey=541907eefc1c46d2868b432fc9ee7d4d";

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) throw new Error("Failed to fetch news");

  //       const data = await response.json();
  //       setNews(data?.articles || []);
  //     } catch {
  //       console.log("Error fetching news");
  //     } 
  //   };

  //   fetchNews();
  // }, []);

  return (
    <div className="py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Top Headlines</h2>

      
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

      </div>
    </div>
  );
}

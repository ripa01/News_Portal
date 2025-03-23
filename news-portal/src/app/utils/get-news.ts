import { Article } from "../globals/types";

export async function getNews(): Promise<Article[]> {
    const url = `${process.env.API_URL}`;
  
    try {
      const response = await fetch(url, {
        cache: "no-store", // prevent caching for SSR
      });
  
      if (!response.ok) throw new Error("Failed to fetch news");
  
      const data = await response.json();
      console.log(data);
      return data?.articles || [];
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  }
  
export const fetchNews = async (category: string = "business") => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=541907eefc1c46d2868b432fc9ee7d4d`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json();
    return data.articles || []; // Return articles or an empty array in case of failure
  } catch (error) {
    console.error("Error fetching news", error);
    return [];
  }
};

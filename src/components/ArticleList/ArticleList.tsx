import React, { useState, useEffect } from "react";

import { Article } from "../../types/Article";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  const handleGetArticles = async () => {
    const response = await fetch("http://localhost:3000/api/articles");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    handleGetArticles();
  }, []);

  return (
    <main className="flex w-screen flex-col gap-4">
      {articles?.map((article: Article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </main>
  );
};

export default ArticleList;

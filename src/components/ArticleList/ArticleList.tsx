import React from "react";

import { dummyPosts } from "../../constants/constants";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = () => {
  return (
    <main className="flex w-screen flex-col gap-4">
      {dummyPosts?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </main>
  );
};

export default ArticleList;

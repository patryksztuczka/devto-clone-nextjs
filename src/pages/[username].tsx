import { User } from "@prisma/client";
import React from "react";

import ArticleCard from "../components/ArticleCard/ArticleCard";
import { Article } from "../types/Article";

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();

  const paths = users.map((user: User) => ({
    params: { username: user.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: User }) {
  const response = await fetch(
    `http://localhost:3000/api/user/${params.username}`
  );
  const user: User = await response.json();
  const articles = await fetch(
    `http://localhost:3000/api/articlesByAuthor/${user.id}`
  );

  return {
    props: {
      user,
      articles: await articles.json(),
    },
  };
}

const ProfilePage = ({ user, articles }: any) => {
  return (
    <div className=" flex min-h-[calc(100vh-56px)] w-screen flex-col items-center bg-gray-100">
      <div className="relative flex h-10 w-screen bg-black" />
      <div className="flex w-full max-w-5xl flex-col gap-4">
        <header className="flex w-screen flex-col bg-white">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
            <img
              src={user.image}
              alt="user profile photo"
              className="h-[50px] rounded-full"
            />
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">{user.name}</span>
          </div>
        </header>
        <div className="flex flex-col">
          {articles.map((article: Article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

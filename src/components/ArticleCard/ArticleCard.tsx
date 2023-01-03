import React from "react";
import { Tag } from "@prisma/client";

import ShapedCommentIcon from "../../assets/icons/ShapedCommentIcon/ShapedCommentIcon";
import ShapedHeartIcon from "../../assets/icons/ShapedHeartIcon/ShapedHeartIcon";
import { IArticleCardProps } from "./ArticleCard.types";

const ArticleCard = ({ article }: IArticleCardProps) => {
  const { author, title, createdAt, comments, tags } = article;
  return (
    <article className="flex max-w-[650px] flex-col gap-4 bg-white px-4 pt-4 pb-3 shadow-card md:rounded-md">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10">
          <img
            src={author?.image}
            alt="profile photo"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{author.name}</span>
          <span className="text-xs">{createdAt.toISOString()}</span>
        </div>
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex gap-2">
        {tags?.map((tag: Tag) => (
          <span className="text-sm">{`#${tag.name}`}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div>
            <ShapedHeartIcon />
          </div>
          {/* <span>{`${reactions} Reactions`}</span> */}
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ShapedCommentIcon />
          </div>
          <span>
            {comments.length === 1
              ? `${comments.length} Comment`
              : `${comments.length} Comments`}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

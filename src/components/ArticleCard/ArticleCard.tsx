import React from "react";
import ShapedCommentIcon from "../../assets/icons/ShapedCommentIcon/ShapedCommentIcon";
import ShapedHeartIcon from "../../assets/icons/ShapedHeartIcon/ShapedHeartIcon";
import { IArticleCardProps } from "./ArticleCard.types";

const ArticleCard = ({ article }: IArticleCardProps) => {
  const { author, comments, reactions, tags, timestamp, title } = article;
  return (
    <article className="flex max-w-[650px] flex-col gap-4 bg-white px-4 pt-4 pb-3 shadow-card md:rounded-md">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-grey"></div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{author}</span>
          <span className="text-xs">{timestamp}</span>
        </div>
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <span className="text-sm">{`#${tag}`}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div>
            <ShapedHeartIcon />
          </div>
          <span>{`${reactions} Reactions`}</span>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <ShapedCommentIcon />
          </div>
          <span>{`${comments} Comments`}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

import { Prisma } from "@prisma/client";

export type Article = Prisma.ArticleGetPayload<{
  include: {
    author: true;
    comments: true;
    tags: true;
  };
}>;

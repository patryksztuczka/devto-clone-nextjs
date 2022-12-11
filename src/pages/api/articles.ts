import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const articles = async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await prisma.article.findMany({
    include: {
      author: true,
      comments: true,
      tags: true,
    },
  });
  res.status(200).json(articles);
};

export default articles;

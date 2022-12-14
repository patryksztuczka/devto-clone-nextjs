import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const username = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.user.findFirst({
    where: {
      username: req.query.username as string,
    },
  });
  res.status(200).json(user);
};

export default username;

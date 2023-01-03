import type { User as PrismaUser } from "@prisma/client";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User extends PrismaUser {}

  interface AdapterUser extends PrismaUser {}
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      username: string | null;
    } & DefaultSession["user"];
  }
}

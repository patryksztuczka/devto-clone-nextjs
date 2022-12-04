import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import ArticleList from "../components/ArticleList/ArticleList";

import DesktopSideMenu from "../components/DesktopSideMenu/DesktopSideMenu";
import {
  loggedUserMenuOptions,
  unloggedUserMenuOptions,
} from "../constants/constants";
import useIsMobile from "../hooks/useIsMobile";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>dev.to</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-[calc(100vh-56px)] justify-center bg-grey">
        <div className="flex w-full max-w-7xl gap-4 py-4 md:px-2">
          {!isMobile && (
            <DesktopSideMenu
              options={
                session ? loggedUserMenuOptions : unloggedUserMenuOptions
              }
            />
          )}
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Home;

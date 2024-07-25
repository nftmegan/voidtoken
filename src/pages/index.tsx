import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>VOID</title>
        <meta
          name="description"
          content="VOID INTO NOTHING"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { ClaimView } from "../views";

const Claim: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>VOID</title>
        <meta
          name="description"
          content="VOID INTO NOTHING"
        />
      </Head>
      <ClaimView />
    </div>
  );
};

export default Claim;

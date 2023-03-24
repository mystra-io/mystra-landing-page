import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer } from "../global/Footer/footer";
import { Navbar } from "../global/Navbar/navbar";
import { CenterContainer } from "../shared/containers/centerContainer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Mystra</title>
        <meta
          name="description"
          content="Mystra-community platform; Dex, Swap, Bridge, DAO & more. It provides chat to communicate between web3 wallets. Built on Casper, Ethereum, Polygon & BSC"
        />
      </Head>
      <Flex overflowX="hidden"  flexDir="column" bgImage="/assets/elements/background.png" bgSize="650px" alignItems="center" zIndex="1">
        <CenterContainer>
          <Navbar />
        </CenterContainer>
        {children}
        <Footer />
      </Flex>
    </>
  );
};

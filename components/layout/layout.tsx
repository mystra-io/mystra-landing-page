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
        <meta property="og:title" content="CasperArmy" key="title" />
        <meta
          name="description"
          content="Casper Network community project that unites. DAO platform for creators and investors with a project incubation HUB, Decentralized Autonomous Launchpad and Venture Capital."
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

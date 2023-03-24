import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { ElementAssets } from "../config";
import { NFT } from "../components/shared/NFT/nft";
import { Footer } from "../components/global/Footer/footer";
import { StepsCreator } from "../components/shared/Steps/stepsCreator";
import { PageHeader } from "../components/shared/PageHeader";

import {
  CreatorHeadingAddon,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Features } from "../components/pages/index/Features/features";
import { CreatorFeatures } from "../components/pages/index/Features/creatorFeatures";
import { Layout } from "../components/layout/layout";
import { Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";


const float = keyframes`
0%  { transform:scale(1); opacity: 0.6; }
50%  { transform:  scale(1.4); opacity: 1;}
100% { transform:  scale(1); opacity: 0.6; }
`;


const Home: NextPage = () => {

  const prefersReducedMotion = usePrefersReducedMotion();

  const animationCards = prefersReducedMotion
    ? undefined
    : `${float} infinite 6s ease-out`;

  return (
    <Flex  flexDir="column" alignItems="center">
      <CenterContainer>
        <Box pos="relative">
          <Box
            bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
            zIndex="-20"
            pos="absolute"
            right="-35%"
            boxSize={{ base: "200px", md: "400px" }}
            top="0px"
            transform="translate(70%, 30%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
            animation={animationCards}
          />
        </Box>
      
      </CenterContainer>
      <CenterContainer>
        <PageHeader
          addon={<CreatorHeadingAddon />}
          description={
            <>Casper Network community project that unites.<br/> DAO platform for creators and investors with a project incubation HUB, Decentralized Autonomous Launchpad and Venture Capital.</>
          }
          label={"Welcome to #CasperArmy"}
          heading="First DAO with DAL on the Casper Network"
        />

        <Box pos="relative" zIndex="-20">
          <Box
            bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
            zIndex="-20"
            pos="absolute"
            left="-25%"
            boxSize={{ base: "200px", md: "400px" }}
            bottom="0px"
            transform="translate(-40%, -0%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
            animation={animationCards}

          />
        </Box>
      </CenterContainer>
      <CreatorFeatures />
      <CenterContainer>
        <StepsCreator
          stepList={[
            {
              content:
                "Secure lifetime access to the platform at a lower price and earn extra points that increase your chance of winning the CasperArmyNFT airdrop.",
              heading: "Purchase a NFT Ticket",
              index: 1,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "Purchase now",
              image: ElementAssets.tickets,
              soon: false,
              reversed: false,
              href: "/tickets",
              background: <Image filter={"blur(35px)"} src={ElementAssets.tickets} transform="rotate(-10deg)"/>
            },
            {
              content:
                "Be transparent. Verify your company/personal data and gain credibility, support from CasperArmy and trust from investors.",
              heading: "Get Access",
              index: 2,
              label: "CREATOR VERIFICATION",
              buttonText: "SOON",
              image: ElementAssets.AmlKyc,
              soon: true,
              reversed: true,
              href: "",
              background: <Box>
                
                <Box bg="#FF0202 " boxSize="170px" transform="translate(-200px, 50px)" filter="blur(180px)"></Box>
                <Box bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%)" boxSize="170px" transform="translate(-200px, 200px)" filter="blur(180px)"></Box>
                <Box bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%)" boxSize="170px" transform="translate(200px, -200px)" filter="blur(180px)"></Box>
              </Box>
            },
            {
              content:
                "Introduce your project for incubation, pitch it to the investor community, let the community vote, get marketing and developer support, create a contract and token, launch a seed round sale and get funded.",
              heading: "Launch App",
              index: 3,
              label: "CREATORS PLATFORM",
              buttonText: "TESTNET PLATFORM",
              image: ElementAssets.incubationHub,
              soon: true,
              reversed: false,
              href: "https://testnet.mystra.app/",
              background: <></>
            },
          ]}
        />
      </CenterContainer>
      <NFT />
     
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page : any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home;

import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { Image } from "@chakra-ui/image";
import { Partners } from "../components/pages/index/Partners/partners";
import { Countdown } from "../components/pages/index/Countdown/countdown";
import { EffectAssets, ElementAssets } from "../config";
import { NFT } from "../components/shared/NFT/nft";
import { Features } from "../components/pages/index/Features/features";
import { Footer } from "../components/global/Footer/footer";
import { Steps } from "../components/shared/Steps/steps";
import { PageHeader } from "../components/shared/PageHeader";

import {
  IndexHeading,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Layout } from "../components/layout/layout";
import { keyframes } from "@emotion/react";
import { usePrefersReducedMotion } from "@chakra-ui/react";

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
    <Flex flexDir="column" alignItems="center" zIndex="1" position="relative">
      <CenterContainer>
        <Box pos="relative" zIndex="-20">
          <Box
            bg="linear-gradient(90.57deg, #1AC9E6 41.85%, #8D5DF7 49.85%, #3C91FF 57.06%)"
            zIndex="-20"
            pos="absolute"
            right="-25%"
            boxSize={{ base: "200px", md: "400px" }}
            top="20vh"
            transform="translate( 50%, 50%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
            animation={animationCards}
          />
        </Box>
        <PageHeader
          addon={<IndexHeadingAddon />}
          description={
            <>
              Casper Network community project that unites.
              <br /> DAO platform for creators and investors with a project
              incubation HUB, Decentralized Autonomous Launchpad and Venture
              Capital.
            </>
          }
          label={"Welcome to #CasperArmy"}
          heading={<IndexHeading />}
        />
        <Box pos="relative" zIndex="-40">
          <Image
            src={EffectAssets.elipse}
            pos="absolute"
            w="700px"
            left="-25%"
            top="-400px"
            transform="rotate(20deg), translateY(-50%)"
            zIndex="0"
            filter="blur(180px)"
            animation={animationCards}
          />
        </Box>
      </CenterContainer>
      <Partners />
      

      <Features />
      <CenterContainer>
        <Steps
          stepList={[
            {
              content:
                "By purchasing a ticket, you secure lifetime access to the platform at a lower price and earn extra points that increase your chance of winning the CasperArmyNFT airdrop.",
              heading: "Purchase a NFT Ticket",
              index: 1,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "BUY YOUR OWN TICKET",
              image: ElementAssets.tickets,
              soon: false,
              reversed: false,
              href: "/tickets",
              background: (
                <Image
                  filter={"blur(35px)"}
                  src={ElementAssets.tickets}
                  transform="rotate(-10deg)"
                />
              ),
            },
            {
              content:
                "Stake your CSPR on CasperArmy's validator to unlock all the platform's tools while increasing your points in the rating system.",
              heading: "Stake CSPR",
              index: 2,
              label: "INVESTOR VERIFICATION BY STAKING",
              buttonText: "STAKE NOW",
              image: ElementAssets.validator,
              soon: false,
              reversed: true,
              href: "https://cspr.live/validator/020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed",
              background: (
                <Box>
                  <Box
                    bg="#FF0202 "
                    boxSize="170px"
                    transform="translate(-200px, 50px)"
                    filter="blur(180px)"
                  ></Box>
                  <Box
                    bg="#2FB88E "
                    boxSize="170px"
                    transform="translate(-200px, 200px)"
                    filter="blur(180px)"
                  ></Box>
                  <Box
                    bg="#2FB88E "
                    boxSize="170px"
                    transform="translate(200px, -200px)"
                    filter="blur(180px)"
                  ></Box>
                </Box>
              ),
            },
            {
              content:
                "CasperArmy community member evaluation system is based on the analysis of many factors, which include, activity and commitment. Artificial intelligence algorithms will objectively evaluate the user's participation in the CasperArmy.",
              heading: "Launch App",
              index: 3,
              label: "USER RATING BY AI",
              buttonText: "SOON",
              image: ElementAssets.launchAppHomepage,
              soon: true,
              reversed: false,
              href: "https://casper.army",
              background: <></>,
            },
          ]}
        />
      </CenterContainer>
      <NFT />
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;

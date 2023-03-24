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

import {
  IndexHeading,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Layout } from "../components/layout/layout";
import { keyframes } from "@emotion/react";
import { usePrefersReducedMotion } from "@chakra-ui/react";
import { PageHeader } from "../components/pages/index/PageHeader/pageHeader";
import { FAQ } from "../components/pages/index/FAQ/faq";
import { Team } from "../components/pages/index/Team/team";
import { Store } from "../components/pages/tickets/Store/store";
import { TicketDescription } from "../components/pages/index/TicketDescription/ticketDescription";
import { AppBanner } from "../components/pages/index/AppBanner/appBanner";
import { Staking } from "../components/pages/index/staking/staking";
import { AboutPlatform } from "../components/pages/index/AboutPlatform/aboutPlatform";

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
    <Flex flexDir="column" zIndex="1" position="relative">
      <PageHeader />

      <Partners />
      <TicketDescription />
      <Store />
      <AboutPlatform />
      <Staking />
      <Team />

      {/* 
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
                "Stake your CSPR on Mystra's validator to unlock all the platform's tools while increasing your points in the rating system.",
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
                "Mystra community member evaluation system is based on the analysis of many factors, which include, activity and commitment. Artificial intelligence algorithms will objectively evaluate the user's participation in the Mystra.",
              heading: "Launch App",
              index: 3,
              label: "USER RATING BY AI",
              buttonText: "TESTNET PLATFORM",
              image: ElementAssets.launchAppHomepage,
              soon: true,
              reversed: false,
              href: "https://testnet.mystra.app/",
              background: <></>,
            },
          ]}
        />
      </CenterContainer>
      <NFT /> */}
      <FAQ
        questions={[
          {
            question: "How long will ticket sales last?",
            answer:
              "Ticket sale time is not limited. Tickets will be on sale until the ticket pool is exhausted. You will be able to track the number of available tickets on the ticket purchasing platform.",
          },
          {
            question: "Why is a Mystra ticket required?",
            answer:
              "The ticket is the basic key to access the resources of the Mystra platform. Only ticket holders will have unlocked platform functionalities, i.e. the ability to participate in Venture Capital investments of incubated projects, or will be able to participate in airdrop and purchase CasperArmyNFT and many others.",
          },

          {
            question:
              "I have a ticket from round one. Is it different from a ticket from another round?",
            answer:
              "Each ticket is the same and is assigned the same number of points. The only difference is the price - the earlier the round of ticket purchase the lower the price.",
          },
          {
            question:
              "How many tickets can I purchase? Can I resell my ticket?",
            answer:
              "Each user can purchase a maximum of 100 tickets. Tickets are transferable, i.e., you can resell them to another user.",
          },
          {
            question: "What if not all tickets are sold?",
            answer:
              "The quantity of tickets sold does not affect the timing of the launch of the platform.",
          },
          {
            question: "Why is a round six ticket so expensive?",
            answer:
              "The first five rounds of ticket sales are priced below the regular price. The quantity of tickets in round six is unlimited.",
          },

          {
            question: "What are points and how do they relate to tickets?",
            answer:
              "Points are an indicator of your commitment to the Mystra community. You can earn points in many different areas, one of which is having a ticket to which permanent points are assigned. You can find more information in our docs under ”points”.",
          },
        ]}
      />
      <AppBanner />
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;

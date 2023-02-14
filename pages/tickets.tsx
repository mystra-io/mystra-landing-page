import type { NextPage } from "next";
import { Flex } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { Footer } from "../components/global/Footer/footer";
import { Box, Image } from "@chakra-ui/react";
import { Countdown } from "../components/pages/index/Countdown/countdown";
import { EffectAssets } from "../config";
import { PageHeader } from "../components/shared/PageHeader";
import { Benefits } from "../components/pages/tickets/Benefits/benefits";
import { TicketShowcase } from "../components/pages/tickets/TicketShowcase/ticketShowcase";
import { Store } from "../components/pages/tickets/Store/store";
import { FAQ } from "../components/shared/FAQ/faq";
import { Layout } from "../components/layout/layout";
import { StoreIntro } from "../components/pages/tickets/StoreIntro/storeIntro";

const Tickets: NextPage = () => {
  return (
    <Flex  flexDir="column" alignItems="center">
      <Box pos="absolute" h="0px" bg="red" w="100vw">
          <Image
            src={EffectAssets.curtain}
            zIndex="-0.5"
            pos="absolute"
            w="100vw"
            left="0"
            top="-18vw"
          />
        </Box>
      <CenterContainer>
        <PageHeader
          addon={<></>}
          description={
            "With a ticket you earn more points, be able to buy CasperArmyNFT and have access to the CasperArmy DAO / VC platform."
          }
          label={"Time to shop"}
          heading={"Buy a call-up ticket to the CasperArmy"}
        />
      </CenterContainer>
      <TicketShowcase />
      <CenterContainer>

      </CenterContainer>

      {<Store/>}

      <Benefits />
      <FAQ
        questions={[
          {
            question: "How long will ticket sales last?",
            answer:
              "Ticket sale time is not limited. Tickets will be on sale until the ticket pool is exhausted. You will be able to track the number of available tickets on the ticket purchasing platform.",
          },
          {
            question: "Why is a CasperArmy ticket required?",
            answer:
              "The ticket is the basic key to access the resources of the CasperArmy platform. Only ticket holders will have unlocked platform functionalities, i.e. the ability to participate in Venture Capital investments of incubated projects, or will be able to participate in airdrop and purchase CasperArmyNFT and many others.",
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
              "The quantity of tickets sold does not affect the timing of the launch of the platform and the sale of CasperArmyNFT.",
          },
          {
            question: "Why is a round six ticket so expensive?",
            answer:
              "The first five rounds of ticket sales are priced below the regular price. The quantity of tickets in round six is unlimited.",
          },

          {
            question: "What are points and how do they relate to tickets?",
            answer:
              "Points are an indicator of your commitment to the CasperArmy community. You can earn points in many different areas, one of which is having a ticket to which permanent points are assigned. You can find more information in our docs under ”points”.",
          },
          {
            question:
              "What is the difference between a call-up NFT ticket and a CasperArmyNFT?",
            answer:
              "Call-up tickets as well as CasperArmyNFT are in the form of Non Fungible Token. A call-up ticket has a different function than CasperArmyNFT. The ticket entitles you to use the resources of the platform. CasperArmyNFT is a product with more benefits. You can buy CasperAmyNFT only after buying the ticket first.",
          },
        ]}
      />
    </Flex>
  );
};

(Tickets as any).getLayout = function getLayout(page : any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Tickets;

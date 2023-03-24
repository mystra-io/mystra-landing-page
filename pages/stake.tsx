import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { PageHeader } from "../components/shared/PageHeader";
import {
  IndexHeadingAddon,
  StakeHeadingAddon,
} from "../components/pages/index/header";
import { FAQ } from "../components/shared/FAQ/faq";
import { BackgroundDark } from "../components/shared/containers/backgroundDark";
import { TopIcons } from "../components/pages/stake/TopIcons/topIcons";
import { Grid } from "@chakra-ui/react";
import { Requirements } from "../components/pages/stake/sections/Requirements/requirements";
import { HardwareSpecs } from "../components/pages/stake/sections/HardwareSpecs/hardwareSpecs";
import { PassiveIncome } from "../components/pages/stake/sections/PassiveIncome/passiveIncome";
import { StartStaking } from "../components/pages/stake/sections/StartStaking/startStaking";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Flex  flexDir="column" alignItems="center">
      <CenterContainer>
        <Box pos="relative">
          <Box
            bg="linear-gradient(89.5deg, #85EEF6 2.83%, #2FB88E 95.63%);"
            zIndex="-20"
            pos="absolute"
            right="0%"
            boxSize={{ base: "200px", md: "400px" }}
            top="0px"
            transform="translate( 70%, 30%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
          />
        </Box>

        <PageHeader
          addon={<StakeHeadingAddon />}
          description={
            "By staking with us and meeting additional criteria, you can count on additional benefits."
          }
          label={"Stake your CSPR"}
          heading="Gain much more by staking CSPR with CasperArmy"
        />
        <Box pos="relative">
          <Box
            bg="linear-gradient(89.5deg, #85EEF6 2.83%, #2FB88E 95.63%);"
            zIndex="-20"
            pos="absolute"
            left="0%"
            boxSize={{ base: "200px", md: "400px" }}
            bottom="0px"
            transform="translate(-50%, -0%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
          />
        </Box>
        <TopIcons />
        <Grid
          m={{ base: "54px 0px", md: "170px 0px" }}
          gridGap={{ base: "50px", md: "120px" }}
        >
          <PassiveIncome />
          <Requirements />
          <StartStaking />
          <HardwareSpecs />
        </Grid>
      </CenterContainer>
      <BackgroundDark>
        <FAQ
          questions={[
            {
              question:
                "How long after I start staking will I receive my first rewards?",
              answer:
                "After delegating your cspr to the validator, the first rewards will be paid after about 4-6 hours.",
            },
            {
              question: "How long does unstaking take?",
              answer: "CSPR undelegating takes 7-8 ERAs which is 14-16 hours.",
            },

            {
              question: "How often do I get rewards?",
              answer: "Rewards are paid every 2 hours.",
            },
            {
              question: "Can I delegate CSPR to more than one validator?",
              answer:
                "Yes. You can make multiple delegations of your funds to more than one validator, or you can delegate all your funds to one.",
            },
            {
              question: "What would happen if the validator failed?",
              answer:
                "If the validator was inactive or failed, your funds are still under your control and it is possible to undelegate your CSPR.",
            },

            {
              question: "Where is the CasperArmy validator server located?",
              answer:
                "The validator server is located in Germany. You can read more about it on the validator website which you can find a link to above.",
            },
            {
              question:
                "What percentage of fees does the CasperArmy validator charge?",
              answer:
                "For example, if you stake 10,000 CSPR at an APY of 10%, you receive 1,000 CSPR per annum of which the indicated fee of 4% is 40 CSPR, meaning that your remuneration is 960 CSPR per annum.",
            },
            {
              question: "Could the current fee change in the future?",
              answer:
                "There are no plans to change the fee at this time. If such a need should arise, this issue will be voted on by the CasperArmy community within the DAO in the future.",
            },
          ]}
        />
      </BackgroundDark>
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;

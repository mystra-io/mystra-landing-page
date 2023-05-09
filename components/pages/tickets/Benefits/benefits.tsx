import { Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { ElementAssets } from "../../../../config";
import { BackgroundDark } from "../../../shared/containers/backgroundDark";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { SectionHeading } from "../../../shared/sectionHeading";
import { BenefitItem } from "./benefitItem";

export interface Benefit {
  title: string;
  description: string;
}

const benefitList: Benefit[] = [
  {
    title: "Access & Membership",
    description:
      "Gain access to a creative platform. In combination with staking, you’re entitled to use all the tools of the CasperArmy platform.",
  },
  {
    title: "Allocation",
    description:
      "It is the first step in obtaining allocations in future incubated projects on the platform.",
  },
  {
    title: "More points",
    description:
      "Each ticket is assigned a fixed amount of points. Increase your points by minting more tickets.",
  },
  {
    title: "CasperArmy NFT",
    description:
      "Members wil have the chance to win CasperArmy NFTs. Ticket holders will have access to our NFT sale.",
  },
  {
    title: "DAO Governance",
    description:
      "Your ticket gives you a vote in decisions regarding the development of the platform and projects we incubate.",
  },
];

export const Benefits = () => {
  return (
    <BackgroundDark>
      <CenterContainer>
        <SectionHeading
          centered
          content={"Benefits of owning a ticket"}
          label="why it’s worth it?"
        />
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gridGap="24px"
          mb={{ base: "54px", md: "150px" }}
        >
          <Flex
            pos="relative"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            align="flex-start"
          >
            <Image w="80%" src={ElementAssets.ticketFront} />
          </Flex>
          <Flex flexDir="column" gridGap="50px">
            {benefitList.map((benefit, index) => {
              return (
                <BenefitItem
                  value={benefit}
                  index={"0" + (index + 1).toString()}
                  key={benefit.title}
                />
              );
            })}
          </Flex>
        </Grid>
      </CenterContainer>
    </BackgroundDark>
  );
};

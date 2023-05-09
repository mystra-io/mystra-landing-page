import { Flex, Grid, Link } from "@chakra-ui/react";
import { HeaderButton } from "../../../../shared/Header/headerButton";
import { CustomHeader } from "../../../../shared/typography/CustomHeader";
import { CustomLink } from "../../../../shared/typography/CustomLink";
import { Paragraph } from "../../../../shared/typography/Paragraph";
import { RequirementItem } from "./requirementItem";

export const Requirements = () => {
  return (
    <Grid gap="24px">
      <CustomHeader smaller>Benefit Requirements</CustomHeader>
      <Paragraph>
        Each delegator will receive points based on the number of CSPR staked on
        our node. However, users will have to meet the following conditions
        beforehand:
      </Paragraph>
      <Flex
        flexDir="column"
        gridGap={{ base: "16px", md: "39px" }}
        m={{ base: "6px 0px", md: "36px 0px" }}
      >
        <RequirementItem
          content=" Join at least one Mystra social media channel: Discord or Telegram"
          index={1}
        />
        <RequirementItem
          content="Delegate a minimum of 5000 CSPR on the Mystra validator"
          index={2}
        />
        <RequirementItem
          content="Create a user account on mystra.app (Available soon)"
          index={3}
        />
        <RequirementItem content="Mint ticket" index={4} />
      </Flex>
      <Paragraph>
        Meeting the above criteria will allow you to receive additional benefits we offer on the Mystra platform.
        If you delegate CSPR with us, but you do not also fulfill the above conditions, you will only enjoy staking rewards.
        Points accumulated will not be taken into account until a user account is created and a NFT Ticket is minted.
      </Paragraph>
      <Paragraph>
        You can view the points you have accumulated  on our social channels (<CustomLink href="https://discord.gg/sZQVdRCyqx">
          Discord
        </CustomLink>{" "} or <CustomLink href="https://t.me/mystraio">
          Telegram
        </CustomLink>) and
        on the Mystra platform within your user account panel.
      </Paragraph>
      <Paragraph>
        Amount of points will reflect how many tokens can be purchased by users
        of projects incubated on Mystra.
      </Paragraph>
      <Paragraph>
        Points accumulated will increase your chances of winning an “NFT
        ticket” airdrop and winning a{" "}
        <CustomLink href="https://docs.mystra.io/docs/CasperArmyNFT/6.6-Airdrop-NFT">
          CasperArmyNFT
        </CustomLink>{" "}
        airdrop. If you’re unsuccessful in winning the CasperArmyNFT airdrop,
        those with the most points will qualify to buy an NFT through the BUY
        NOW auction. The remaining eligible users will enter the NFT sale round
        via limited time bidding. Ticket airdrop winners will be announced prior
        to the start of ticket sales.
      </Paragraph>
      <Paragraph>
        Our validator node is open to the whole Casper Community. We charge a 4%
        fee.
      </Paragraph>
      <Link
        href="https://docs.casperarmy.org/docs/point-system/3.2-Soldier-Rating"
        display="grid"
      >
        <Flex justifyContent="flex-start">
          <HeaderButton>LEARN MORE ABOUT THE POINTS SYSTEM</HeaderButton>
        </Flex>
      </Link>
    </Grid>
  );
};

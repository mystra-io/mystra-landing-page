import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import { ElementAssets, IconAssets } from "../../../../../config";
import { HeaderButton } from "../../../../shared/Header/headerButton";
import { CustomHeader } from "../../../../shared/typography/CustomHeader";
import { Paragraph } from "../../../../shared/typography/Paragraph";
import { GlassIcon } from "../../TopIcons/glassIcon";

export const PassiveIncome = () => {
  return (
    <Grid gridGap={{ base: "16px", md: "24px" }}>
      <CustomHeader>
        Earn a passive income around the clock
      </CustomHeader>
      <Paragraph>
        Our validator has been established to support the decentralisation of
        the Casper Network on which the CasperArmy project is based. Delegators
        participate in securing the network, receiving rewards from staking,
        extra benefits on our platform and support development of CasperArmy.
      </Paragraph>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr auto" }}
        gap={{ base: "50px", md: "100px" }}
        m="30px 0px"
      >
        <Flex flexDir="column" gap={{ base: "16px", md: "38px" }}>
          <Paragraph>
            <Text fontWeight="bold" color="white">
              Take out together with CasperArmy you:
            </Text>
          </Paragraph>
          <Paragraph>
            1. Receive <Text display="inline" color="white">
              points
            </Text> to gain better opportunities for acquiring new
            Mystra products, such as CasperArmyNFT.
          </Paragraph>
          <Paragraph>
            2. Gain a voice in the {" "}
            <Text display="inline" color="white">
              DAO
            </Text> on the direction of development of the
            CasperArmy platform and the projects incubated on it.
          </Paragraph>
          <Paragraph>
            3. Opportunities to invest in projects development to developed by third-party
            creators that have been previously vetted and voted on by the DAO - within{" "}
            <Text display="inline" color="white">
              Venture Capital.
            </Text>
          </Paragraph>
          <Link href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.9-staking">
            <Flex justifyContent={{ base: "", md: "flex-start" }}>
              <HeaderButton>Learn more</HeaderButton>
            </Flex>
          </Link>
        </Flex>
        <Flex justifyContent="center" align="center">
          <Image maxW="60vw" src={ElementAssets.validator} />
        </Flex>
      </Grid>
      <GlassIcon
        icon={<Image src={IconAssets.alert} />}
        heading="The staked coins are never physically transferred to validator"
        content={"Control of the coins always belongs to the delegator."}
        alternative
      />
    </Grid>
  );
};

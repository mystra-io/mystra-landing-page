import { GridItem, Grid, Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { BrandAssets } from "../../../../../config";
import { GlassContainer } from "../glassContainer";
import { Block } from "./block";

export const CreatorFeatureBlocks = () => {
  return (
    <Grid
      minH="800px"
      maxH={{ base: "auto", xl: "800px" }}
      mt="20px"
      gridTemplateAreas={{
        base: "'a' 'b' 'c' 'd' 'e' 'f'",
        xl: "'a b c d' 'e e f f'",
      }}
      gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr 1fr 1fr" }}
      gridGap="24px"
      gridTemplateRows={{ base: "auto auto auto auto auto auto", xl: "1fr 1fr" }}
    >
      <GridItem display="grid" gridArea="a">
        <Block
          label={"INCUBATION HUB"}
          heading={"Collab & entrepreneurship HUB"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.4%20Incubation%20HUB"
        />
      </GridItem>
      <GridItem display="grid" gridArea="b">
        <Block
          label={"WEB 3 DAO"}
          heading={"Community governance"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.2%20DAO"
        />
      </GridItem>
      <GridItem display="grid" gridArea="c">
        <Block
          label={"WEB 3 DAL"}
          heading={"Decentralized Autonomous Launchpad"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.1%20Creators%20platform#dal---decentralized-autonomous-launchpad"
        />
      </GridItem>
      <GridItem display="grid" gridArea="d">
        <Block
          label={"VENTURE CAPITAL"}
          heading={"Early stage financing"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.3%20Venture%20Capital"
        />
      </GridItem>
      <GridItem display="grid" gridArea="e">
        <Block
          label={"NFT MARKETPLACE"}
          heading={"Create, drop & sell yours digital assets"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.6-Open-NFT-Marketplace"
        />
      </GridItem>
      <GridItem display="grid" gridArea="f">
        <Block
          label={"PROJECT REPUTATION"}
          heading={"Points system & rating"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.10-point-system"
        />
      </GridItem>
    </Grid>
  );
};

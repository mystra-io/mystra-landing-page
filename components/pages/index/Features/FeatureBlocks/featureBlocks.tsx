import { GridItem, Grid, Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { BrandAssets } from "../../../../../config";
import { GlassContainer } from "../glassContainer";
import { Block } from "./block";

export const FeatureLabel = ({ children }: any) => (
  <Flex flexDir="column" gap="12px" color="#FF0202" fontWeight="bold">
    {children}
    {/*<Box w="8px" h="2px" bg="rgba(255,255,255,0.5)" />*/}
  </Flex>
);

export const FeatureBlocks = () => {
  return (
    <Grid
      minH="800px"
      maxH={{ base: "auto", xl: "800px" }}
      mt="20px"
      gridTemplateAreas={{ base: "'a' 'b' 'c' 'd'", xl: "'a b c' 'a d d'" }}
      gridTemplateColumns={{ base: "1fr", xl: "1.5fr 1fr 1fr" }}
      gridGap="24px"
      gridTemplateRows={{ base: "auto auto auto auto", xl: "1fr 1fr" }}
    >
      <GridItem display="grid" gridArea="a">
        <Block
          label={"INCUBATION HUB"}
          heading={"Collaboration & entrepreneurship HUB"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.4%20Incubation%20HUB"
          bigImage
          image={BrandAssets.computer}
        />
      </GridItem>
      <GridItem display="grid" gridArea="b">
        <Block
          label={"WEB 3 DAO"}
          heading={"Decentralized Autonomous Organization"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.2%20DAO"
          image={BrandAssets.circle}
        />
      </GridItem>
      <GridItem display="grid" gridArea="c">
        <Block
          label={"VENTURE CAPITAL"}
          heading={"Early stage investments"}
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.3%20Venture%20Capital"
          image={BrandAssets.chart}
        />
      </GridItem>
      <GridItem display="grid" gridArea="d">
        <Block
          label={"NFT MARKETPLACE"}
          heading={
            "Gateway to participate in the buying and selling of digital assets"
          }
          href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.6-Open-NFT-Marketplace"
          image={BrandAssets.world}
        />
      </GridItem>
    </Grid>
  );
};

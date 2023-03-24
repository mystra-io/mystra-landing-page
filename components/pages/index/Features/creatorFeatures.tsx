import { BackgroundDark } from "../../../shared/containers/backgroundDark";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { Welcome } from "../../../texts/welcome";
import { SectionHeader } from "../../../texts/sectionHeader";
import { SectionText } from "../../../texts/sectionText";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import React from "react";
import { FeatureBlocks } from "./FeatureBlocks/featureBlocks";
import { Rating } from "./rating";
import { Image } from "@chakra-ui/react";
import { EffectAssets } from "../../../../config";
import { CreatorFeatureBlocks } from "./FeatureBlocks/creatorFeatureBlocks";

export const CreatorFeatures = () => {
  return (
    <BackgroundDark>
      <Box pos="relative" zIndex="-20">
        <Image
          src={EffectAssets.elipse}
          display={{base: "none", lg: "block"}}
          pos="absolute"
          w="700px"
          right="-30%"
          top="-200px"
          transform="rotate(20deg), translateY(-50%)"
          zIndex="0"
          filter="blur(180px)"
        />
      </Box>
      <CenterContainer>
        <Grid padding="120px 0px 40px" textAlign="center" gridGap="40px">
          <Box justifySelf="center">
            <Welcome>CasperArmy platform</Welcome>
          </Box>
          <SectionHeader>Platform features for creators</SectionHeader>
          <SectionText>Start creating on Casper Network</SectionText>
          <CreatorFeatureBlocks />
        </Grid>

      </CenterContainer>
      <Box pos="relative">
        <Image
          src={EffectAssets.elipse}
          zIndex="0"
          pos="absolute"
          w="700px"
          left="-30%"
          top="-400px"
          transform="rotate(40deg), translateY(-50%)"
          filter="blur(180px)"
        />
      </Box>
    </BackgroundDark>
  );
};

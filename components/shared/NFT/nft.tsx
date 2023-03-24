import { BackgroundDark } from "../containers/backgroundDark";
import { Image } from "@chakra-ui/image";
import { Grid, Box, Flex } from "@chakra-ui/layout";
import { ElementAssets, IconAssets } from "../../../config";
import React from "react";
import { Welcome } from "../../texts/welcome";
import { SectionHeader } from "../../texts/sectionHeader";
import { SectionText } from "../../texts/sectionText";
import { HeaderButton } from "../Header/headerButton";
import { keyframes } from "@emotion/react";
import { Link, usePrefersReducedMotion } from "@chakra-ui/react";

const spin = keyframes`
  0%  { transform: rotate(-5deg); }
  50%  { transform: rotate(5deg); }
  100% { transform: rotate(-5deg); }
`;

const float = keyframes`
  0%  { transform: translateY(0px); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
`;

export const NFT = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationCards = prefersReducedMotion
    ? undefined
    : `${spin} infinite 15s ease-out`;

  const animationGhosts = prefersReducedMotion
    ? undefined
    : `${float} infinite 13s ease`;

  return (
    <BackgroundDark>
      <Grid
        justifyItems="center"
        padding="100px 20px 100px"
        gridGap="40px"
        overflowX="hidden"
      >
        <Box color="red">
          <Welcome>BE READY FOR THIS!</Welcome>
        </Box>
        <SectionHeader>CasperArmyNFT is&nbsp;coming!</SectionHeader>
        <Box textAlign="center">
          <SectionText>
            Buy a #CasperArmyNFT and become an elite member to receive extra
            privileges
          </SectionText>
        </Box>
        <Flex
          p={{ base: "20px 0px", md: "40px 0px" }}
          align="center"
          justifyItems="center"
          overflowX="hidden"
        >
          <Image
            animation={animationGhosts}
            zIndex="1"
            width={{ base: "80vw", md: "auto" }}
            marginBottom="0px"
            src={ElementAssets.nft}
          />
          <Image
            position="absolute"
            src={ElementAssets.nftBackground}
            maxW="90vw"
            left="0"
            right="0"
          />
          <Image
            position="absolute"
            src={ElementAssets.nftCards}
            margin="auto"
            maxW="90vw"
            left="0"
            width={{ base: "140vw", md: "auto" }}
            right="0"
            animation={animationCards}
          />
        </Flex>
        <Link zIndex="2000" href="https://casperarmy.io/">
          <HeaderButton>
            CASPERARMY NFT SITE &nbsp;
            <Image src={IconAssets.arrowRight} />
          </HeaderButton>
        </Link>
      </Grid>
    </BackgroundDark>
  );
};

import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { ElementAssets } from "../../../../config";
import { getParallaxValue, useParallax } from "../../../../hooks/useParralax";
import { CenterContainer } from "../../../shared/containers/centerContainer";

export const TicketShowcase = () => {
  const { ref, result } = useParallax({
    onScroll: useCallback((percentage) => {
      const scrollValue = getParallaxValue(percentage, 180, 0, 45);
      const opacityValue = getParallaxValue(percentage, 0, 1, 45);
      const slideValue = getParallaxValue(percentage, 300, 0, 35);
      return {
        scrollValue: scrollValue,
        opacityValue: opacityValue,
        slideValue: slideValue,
      };
    }, []),
    minWindowWidth: 1000,
  });

  return (
    <CenterContainer>
      <Flex flexDir="column" align="center" pos="absolute" w="40px" left="0" right="0"  top={{base: "-60px", md: "-140px"}} margin="auto" gap="4px">
        <Box w="2px" h="40px" bg="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)" opacity="0.5"></Box>
        <Box fontFamily="Changa" letterSpacing="0.37em" fontSize="12px" lineHeight="140%">SCROLL</Box>
        <Box w="2px" h="100px" bg="linear-gradient(180deg, #28BFD5 0%, #5F59F9 100%)" opacity="0.5"></Box>
      </Flex>
      <Flex
        justify="center"
        mb="100px"

        position="relative"
        opacity={`${result && result.opacityValue}`}
        transform={`translateY(${result && result.slideValue}px)`}
      >
        <Grid maxW="80vw" position="relative">
          <Image w="100%" src={ElementAssets.ticketFront} />
          <Image
            src={ElementAssets.web3SpinnerTransparent}
            pos="absolute"
            right="0px"
            top="20%"
            display={{base: 'none', md: 'block'}}
            transform={`translateX(50%) rotate(${
              result && result.scrollValue
            }deg)`}
          />
        </Grid>

        <Box
          ref={ref}
          bg="#161616"
          filter="blur(260px)"
          w="80vw"
          h="100%"
          borderRadius="100%"
          pos="absolute"
          zIndex="-1"
        ></Box>
      </Flex>
    </CenterContainer>
  );
};

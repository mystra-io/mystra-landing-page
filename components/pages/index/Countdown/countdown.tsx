import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Text, Heading } from "@chakra-ui/layout";
import { EffectAssets, ElementAssets } from "../../../../config";
import { Timer } from "./timer";
import { CountdownButtons } from "./countdownButtons";

export const Countdown = () => {
  return (
    <div  id="newsletter">
      <Flex
        display={{ base: "flex", md: "none" }}
        justify="center"
        padding="60px 0px"
        zIndex="40"
        position="relative"
       
      >
        <Image src={ElementAssets.web3SpinnerTransparent} position="absolute" left="0" top="50%"></Image>
      </Flex>
      <Grid
        margin={{ base: "20px 0px 20px", md: "200px 0px" }}
        templateColumns="repeat(12, 1fr)"
        gap="24px"
        zIndex="1"
        pos="relative"
      >
        <Image
          pos="absolute"
          src={ElementAssets.ticketBackground}
          maxW="500px"
          bottom={{ base: "-20%", md: "-10%" }}
          zIndex={{ base: "0", md: "0" }}
          left={{ base: "-50%", md: "-5%" }}
        />
        <Image
          pos="absolute"
          maxW="500px"
          src={ElementAssets.ticketBackground}
          top="0"
          right={{ base: "-40%", md: "-5%" }}
          opacity="0.2"
        />
        <Image
          pos="absolute"
          src={ElementAssets.ticketCorner}
          zIndex="1"
          maxW="500px"
          display={{base: "none", md: "block"}}
          top="-100px"
          right={{ base: "-40%", md: "-5%" }}
        />
        <Image
          pos="absolute"
          src={ElementAssets.web3Spinner}
          zIndex="1"
          display={{ base: "none", xl: "block" }}
          top="50%"
          maxW="200px"
          left="0%"
          transform="translate(25%, -50%)"
        />
        <Image
          pos="absolute"
          src={EffectAssets.numbers}
          zIndex="1"
          top="50px"
          left="0%"
          transform="translate(-20%, -0%)"
        />
        <Image
          pos="absolute"
          src={EffectAssets.numbers}
          zIndex="1"
          bottom="-0px"
          right="0%"
          transform="translate(25%, -0%)"
        />
        <GridItem
          colStart={{ base: 1, lg: 2 }}
          colSpan={{ base: 12, lg: 10 }}
          padding={{ base: "7px 7px", md: "20px 20px" }}
          bg="transparent"
          position="relative"
          display="grid"
          borderRadius="16px"
          border="1px solid rgba(255, 255, 255, 0.05)"
        >
          <Flex
            gridGap="40px"
            padding="75px 0px"
            align="center"
            flexDir="column"
            bg="transparent"
            borderRadius="16px"
            style={{ backdropFilter: "blur(20.0356px)" }}
            boxShadow="inset 0px 0px 11.5966px rgba(255, 255, 255, 0.05), inset 0px 0.682151px 0.682151px rgba(255, 255, 255, 0.15);"
          >
            <Text
              textShadow="2px gray"
              textTransform="uppercase"
              fontFamily="Chaney"
              letterSpacing="8px"
              color="transparent"
              style={{
                WebkitTextStroke: "1px gray",
                color: "transparent",
              }}
              fontSize={{ base: "7px", md: "10px" }}
            >
              The first gain more
            </Text>
            <Heading
              fontWeight="400"
              textAlign="center"
              letterSpacing="8px"
              fontSize="14px"
              fontFamily="Chaney"
              padding="0px 30px"
              maxW="600px"
            >
              NFT CALL-UP TICKET SALES WILL BEGIN:
            </Heading>
            <Timer />
            <CountdownButtons />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

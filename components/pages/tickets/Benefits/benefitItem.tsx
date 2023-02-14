import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ElementAssets } from "../../../../config";
import { Benefit } from "./benefits";

interface IBenefitItem {
  value: Benefit;
  index: string;
}

export const BenefitItem: FC<IBenefitItem> = ({ value, index }) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "auto 1fr" }}
      gridGap={{ base: "20px", md: "32px" }}
      fontFamily="Sora"
      padding={{ base: "0px 8px", md: "initial" }}
    >
      <Flex gap="20px" align={{ base: "center", md: "initial" }}>
        <Image boxSize="29px" mt="3px" src={ElementAssets.dot} />
        <Box
          fontSize="24px"
          display={{ base: "block", md: "none" }}
          fontWeight="800"
        >
          {index}
        </Box>
      </Flex>
      <Grid>
        <Flex gap="21px" align="center">
          <Box
            display={{ base: "none", md: "block" }}
            fontSize="24px"
            fontWeight="800"
          >
            {index}
          </Box>
          <Box
            color="#FF0202"
            fontSize="14px"
            fontWeight="bold"
            letterSpacing="0.6em"
            textTransform="uppercase"
            position="relative"
            _after={{
              backgroundColor: "#FF0202",
              filter: "blur(10px)",
              opacity: "0.2",
              position: "absolute",
              left: "-2%",
              top: "0",
              content: '""',
              width: "104%",
              height: "100%",
            }}
          >
            {value.title}
          </Box>
        </Flex>
        <Text
          mt="7px"
          color="#666"
          lineHeight="152%"
          fontSize={{ base: "14px", md: "18px" }}
          maxW={{ base: "100%", md: "75%" }}
        >
          {value.description}
        </Text>
      </Grid>
    </Grid>
  );
};

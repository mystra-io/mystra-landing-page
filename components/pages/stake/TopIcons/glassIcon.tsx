import { Box, Flex, Grid, Heading, Image, Img, Text } from "@chakra-ui/react";
import { FC } from "react";

interface IGlassIcon {
  content: React.ReactNode | string;
  heading: string;
  icon: React.ReactNode;
  alternative?: boolean;
}

export const GlassIcon: FC<IGlassIcon> = ({ content, heading, icon, alternative = false}) => {
  return (
    <Grid
      padding="42px 52px"
      bg="rgba(255, 255, 255, 0.01)"
      boxShadow="inset 0px 0px 12.3205px rgba(255, 255, 255, 0.05), inset 0px 0.724735px 0.724735px rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(25px)"
      borderRadius="17px"
      templateColumns={{base: "1fr", md: "auto 1fr"}}
      gap="30px"
    >
      <Grid boxSize={{base: "56px", md: "95px"}}>{icon}</Grid>
      <Flex flexDir="column" gap="8px" justify="center">
        <Heading fontSize={alternative ? "23px" : "28px"}>{heading}</Heading>
        <Box fontSize={alternative ? "23px" : "14px"} color="#888">
          {content}
        </Box>
      </Flex>
    </Grid>
  );
};

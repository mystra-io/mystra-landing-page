import { Box, Flex, Grid } from "@chakra-ui/react";
import { FC } from "react";

interface IRequirementItem {
  content: string;
  index: number;
}

export const RequirementItem: FC<IRequirementItem> = ({ content, index }) => {
  return (
    <Grid
      gridGap="10px"
      templateColumns={{ base: "1fr", md: "40px 1fr" }}
      justifyContent="flex-start"
      bg="rgba(255, 255, 255, 0.01)"
      boxShadow="inset 0px 0px 12.3205px rgba(255, 255, 255, 0.05), inset 0px 0.724735px 0.724735px rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(25px)"
      borderRadius="17px"
      padding={{ base: "25px 25px", md: "18px 35px" }}
      alignItems="center"
    >
      <Box
        fontSize={{ base: "16px", md: "24px" }}
        fontWeight="bold"
        color="white"
      >
        {index}
      </Box>
      <Flex
        textAlign="left"
        justifySelf="flex-start"
        fontSize={{ base: "14px", md: "22px" }}
        color="white"
      >
        {content}
      </Flex>
    </Grid>
  );
};

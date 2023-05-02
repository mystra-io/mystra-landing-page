import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import { CenterContainer } from "../../../shared/containers/centerContainer";

export const InfoWithItems = ({
  items,
  header,
}: {
  items: any[];
  header: string;
}) => {
  return (
    <CenterContainer>
      <Flex mt="60px" flexDir="column">
        <Flex
          fontFamily="Syne"
          fontWeight="700"
          fontSize="24px"
          textTransform="uppercase"
        >
          {header}
        </Flex>
        <Grid mt="20px" templateColumns={{base:  "1fr",md:"1fr 1fr"}} columnGap="60px">
          <Flex flexDir="column" gap="20px">
            {items.slice(0, Math.floor(items.length / 2) + 1).map((item) => {
              return (
                <Grid fontSize='12px' color="#CEE5F2" templateColumns="auto 1fr" gap="20px">
                  <Box mt="10px" w="16px" h="4px" bg="#81D9BE"></Box>
                  {item}
                </Grid>
              );
            })}
          </Flex>
          <Flex flexDir="column" gap="20px">
            {items
              .slice(Math.floor(items.length / 2) + 1, items.length)
              .map((item) => {
                return (
                  <Grid color="#CEE5F2" templateColumns="auto 1fr" fontSize='12px' gap="20px">
                    <Box mt="10px" w="16px" h="4px" bg="#81D9BE"></Box>
                    {item}
                  </Grid>
                );
              })}
          </Flex>
        </Grid>
      </Flex>
    </CenterContainer>
  );
};

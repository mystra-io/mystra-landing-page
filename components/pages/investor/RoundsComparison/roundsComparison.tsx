import { Box, Flex, Grid } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { ROUNDS } from "./rounds";

export const RoundsComparison = () => {
  return (
    <CenterContainer>
      <Flex mt="100px" maxW="calc(100vw)" flexDir="column">
        <Flex
          fontFamily="Syne"
          fontWeight="700"
          fontSize="24px"
          textTransform="uppercase"
        >
          Public Sale Rounds And ROI relative to the PUBLIC SALE ROUNDS
        </Flex>
        <Flex
          maxW="90vw"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          overflowX="scroll"
          w="100%"
          mt="50px"
        >
          <Grid
            w="100%"
            display={{ base: "flex", md: "grid" }}
            templateColumns={{ base: "auto", md: "1fr 1fr 1fr 1fr 1fr 1fr" }}
            gap="20px"
          >
            {ROUNDS.map((round) => {
              return (
                <Flex key={round.number} align="center" flexDir="column" gap="20px">
                  <Flex
                    fontFamily="Sora"
                    w={{ base: "150px", md: "100%" }}
                    padding="16px 0px 20px 0px"
                    align="center"
                    flexDir="column"
                    justify="center"
                    borderTopRightRadius="16px"
                    bg="rgba(23, 23, 23, 0.6)"
                    border="1px dashed #7B7B7B;"
                  >
                    <Box fontSize="12px">
                      ROUND <Box display="inline" fontWeight="bold">{round.number}</Box>
                    </Box>
                    <Box fontSize="12px" mt="18px" fontWeight="bold">PUBLIC SALE</Box>
                    <Box fontSize='24px' mt="6px" fontWeight="bold"><Box display="inline" color="#04D7B1">$</Box>{round.price}</Box>
                    <Box fontFamily="Syne" mt="6px" fontSize='12px' fontWeight="bold">{round.amount} tickets</Box>
                  </Flex>
                  <Box fontSize='24px' fontWeight="bold"><Box display="inline" color="#04D7B1">X</Box>{round.x}</Box>
                </Flex>
              );
            })}
          </Grid>
        </Flex>
      </Flex>
    </CenterContainer>
  );
};

import { Grid, GridItem } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/react";
import { useTimer } from "../../../../hooks/useTimer";
import { TimerBlock } from "./timerBlock";

const Separator = () => (
  <GridItem
    display="flex"
    letterSpacing="0px"
    padding={{ base: "0px", md: "0px 10px" }}
  >
    :
  </GridItem>
);

export const Timer = () => {
  const date = useTimer(new Date("2022-08-01T18:00:00.000"));

  return (
    <>
      <Flex
        flexDir="column"
        fontSize="70px"
        fontFamily="Sora, sans-serif"
        textTransform="uppercase"
        align="center"
        textAlign="center"
        display={{ base: "flex", md: "none" }}
      >
        <Box fontWeight="bold">{date[0]}</Box>
        <Box letterSpacing="6px" fontSize="11px">
          Days
        </Box>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "1fr auto 1fr auto 1fr",
          md: "1fr auto 1fr auto 1fr auto 1fr",
        }}
        fontSize={{ base: "30px", md: "60px" }}
        fontFamily="Sora, sans-serif"
        lineHeight="100%"
        letterSpacing={{ base: "0.4em", lg: "0.6em" }}
        marginTop={{ base: "0px", md: "20px" }}
        fontWeight="200"
        gridGap={{ base: "0px", md: "0px", lg: "25px" }}
        textShadow="0px 3px 3px rgba(0, 0, 0, 0.25);"
      >
        <Box display={{ base: "none", md: "block" }}>
          <TimerBlock value={date[0]} label="days" />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Separator />
        </Box>
        <TimerBlock value={date[1]} label="hours" />
        <Separator />
        <TimerBlock value={date[2]} label="minutes" />
        <Separator />
        <TimerBlock value={date[3]} label="seconds" />
      </Grid>
    </>
  );
};

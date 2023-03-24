import { Flex, Box } from "@chakra-ui/layout";
import { FC } from "react";

interface ITimerBlock {
  value: number;
  label: string;
}

export const TimerBlock: FC<ITimerBlock> = ({ value, label }) => {
  return (
    <Flex align="center" flexDir="column" textAlign="center">
      <Box
        marginRight="-.6em"
        textAlign="center"
        fontSize={{ base: "30px", md: "45px", lg: "50px", xl: "60px" }}
        suppressHydrationWarning
      >
        {String(value).padStart(2, "0")}
      </Box>
      <Box
        textTransform="uppercase"
        color="#FF0202"
        fontWeight="bold"
        fontSize={{ base: "10px", md: "13px" }}
        letterSpacing="4px"
        position="relative"
        _before={{
          content: '""',
          backgroundColor: "#FF0202",
          opacity: "1",
          width: "100%",
          height: "20%",
          position: "absolute",
          float: "left",
          filter: "blur(50px)",
          bottom: "0",
          top: "10px",
          padding: "10px",
        }}
      >
        {label}
      </Box>
    </Flex>
  );
};

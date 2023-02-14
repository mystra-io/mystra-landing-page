import { Box, Flex, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { ElementAssets, IconAssets } from "../../../../config";

export const RoundItem = ({
  index,
  price,
  percent,
  max,
  currentSold,
  previousMax,
}: {
  index: number;
  price: number;
  percent: number;
  max: number;
  currentSold: number;
  previousMax: number;
}) => {
  const amountCompleted = useMemo(() => {
    if (currentSold > previousMax + max) {
      return max;
    } else if (currentSold - previousMax >= 0) {
      return currentSold - previousMax;
    } else {
      return 0;
    }
  }, [currentSold]);

  const percentCompleted = useMemo(() => {
    if (currentSold > previousMax + max) {
      return 1;
    } else if (currentSold - previousMax >= 0) {
      return (currentSold - previousMax) / max;
    } else {
      return 0;
    }
  }, [currentSold]);

  const isStarted = useMemo(() => currentSold >= previousMax, [currentSold]);

  const isEnded = useMemo(
    () => (max == 0 ? false : currentSold >= previousMax + max),
    [currentSold]
  );

  return (
    <Flex
      flexDir="column"
      align="center"
      gap="20px"
      bg={isEnded ? "#FF020222" : "#171717"}
      border={`2px dashed ${isEnded ? "#FF0202" : "#7B7B7B"}`}
      borderRadius="0px 20px 0px 0px"
      padding="23px 27px"
      minWidth="224px"
      maxWidth="224px"
      position="relative"
      opacity={isStarted ? "1" : "0.5"}
    >
      {(isStarted && !isEnded) && <Image pos="absolute" top="0" right="30px" src={ElementAssets.ticketRect}></Image>}

      {(isStarted && !isEnded) && <Box position="absolute" top="0" border="50px solid white" borderRadius="0px 20px 0px 0px" width="100%" h="100%" filter="blur(5px)"  zIndex="-1"></Box>}
      {!isStarted && <Image w="14px" src={IconAssets.lock} />}
      <Box color="#FF0202" fontSize="14px" fontWeight="bold">
        {isEnded && "CLOSED"}
        {isStarted && !isEnded && "OPENED"}
      </Box>
      <Box textTransform="uppercase">
        Round{" "}
        <Box fontWeight="bold" display="inline-block">
          {index}
        </Box>
      </Box>
      <Flex flexDir="column" gap="10px" align="center">
        <Box fontSize="32px" fontWeight="700">
          <Box display="inline-block" color="#FF0202">
            $
          </Box>
          {price}
        </Box>

        {max != 0 && (
          <Box
            fontSize="14px"
            fontWeight="600"
            letterSpacing="0.19em"
            color="#FF0202"
          >
            {percent}% OFF
          </Box>
        )}
      </Flex>
      <Flex flexDir="column" align="center" gap="8px">
        {max != 0 && (
          <Box pos="relative" w="140px" h="4px" bg="white">
            <Box bg="red" w={`${percentCompleted * 100}%`} h="4px"></Box>
            {isEnded && (
              <Box
                position="absolute"
                left="50%"
                margin="-10px auto"
                transform="rotate(10deg) translateX(-50%)"
                letterSpacing="0.2em"
                fontSize="12px"
                padding="4px 8px"
                bg="#FF0202"
                color="white"
              >
                SOLD
              </Box>
            )}
          </Box>
        )}
        {max != 0 ? (
          <Box>
            {amountCompleted} / {max}
          </Box>
        ) : (
          <Box>Limited by DAO</Box>
        )}
      </Flex>
    </Flex>
  );
};

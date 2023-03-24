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
      display={{base: !isEnded && isStarted ? "flex" : "none", lg: "flex"}}
      gap="20px"
      position="relative"
      opacity={isStarted ? "1" : "0.5"}
    >
      <Flex justify="space-betweeen">
        <Box fontFamily="Sora" fontSize="14px" fontWeight="300">
          Round <Box display="inline-block">{index}</Box>
        </Box>
        <Flex>{isEnded && "CLOSED"}</Flex>
      </Flex>
      <Flex flexDir="column" gap="8px">
        {
          <Box pos="relative" w={{base: "auto", md: "140px"}} h="4px" bg="#4B4B4B">
            <Box
              bg="#04D7B1"
              w={`${max != 0 ? percentCompleted * 100 : 0}%`}
              h="4px"
            ></Box>
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
        }

        <Flex align="center" justify="space-between" fontFamily="Sora">
          {max != 0 ? (
            <Box>
              <Box color="#04D7B1" display="inline-block" fontWeight="700">
                {amountCompleted}
              </Box>{" "}
              / {max}
            </Box>
          ) : (
            <Box fontSize="10px">Limited by DAO</Box>
          )}

          <Box fontSize="16px" fontFamily="Sora" fontWeight="700">
            <Box display="inline-block" color="#04D7B1">
              $
            </Box>
            {price}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

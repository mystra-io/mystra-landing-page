import { Box, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SLIDER_CHANGE_TIME = 30;

export const TicketTraitsSlider = ({
  traits,
}: {
  traits: { label: string; content: any }[];
}) => {
  const [currentTrait, setCurrentTrait] = useState<number>(0);
  const [stopped, setStopped] = useState<boolean>(false);

  const increaseCounter = () => {
    setCurrentTrait((prev) => {
      return prev == traits.length - 1 ? 0 : prev + 1;
    });
  };

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    console.log(time);
    if (time == SLIDER_CHANGE_TIME) {
      setTime(0);
      increaseCounter();
    }
  }, [time]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (!stopped) {
        setTime((prev) => {
          return prev + 1;
        });
      }
    }, 100);
    return () => clearInterval(timer);
  }, [stopped]);

  return (
    <Flex
      onMouseEnter={() => {
        setStopped(true);
      }}
      onMouseLeave={() => {
        setStopped(false);
      }}
      flexDir="column"
      mt={{ base: "30px", md: "100px" }}
      maxW="420px"
    >
      <Box fontSize="16px" fontFamily="Sora" fontWeight="700">
        {"0" + (currentTrait + 1).toString()}
      </Box>
      <Box
        mt="10px"
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="16px"
        fontFamily="Sora"
        color="#04D7B1"
      >
        {traits.length > 0 ? traits[currentTrait].label : "Loading"}
      </Box>
      <Box
        mt="20px"
        fontWeight="400"
        fontSize="14px"
        fontFamily="Sora"
        lineHeight="160%"
        color="#CEE5F2"
      >
        {traits.length > 0 ? traits[currentTrait].content : "Loading"}
      </Box>
      <Grid
        gap="8px"
        mt="25px"
        templateColumns={`repeat(${traits.length}, 1fr)`}
      >
        {traits.map((item, index) => {
          return (
            <Box
              key={item.label}
              cursor="pointer"
              onClick={() => {
                setCurrentTrait(index);
                setTime(0);
              }}
              h="8px"
              border="1px solid"
              pos="relative"
              borderColor={currentTrait == index ? "#04D7B1" : "gray"}
              borderRadius="2px"
            >
              <Box
                bg={currentTrait == index ? "#04D7B1" : "none"}
                w={`${
                  ((time % SLIDER_CHANGE_TIME) / SLIDER_CHANGE_TIME) * 100
                }%`}
                h="100%"
              ></Box>
            </Box>
          );
        })}
      </Grid>
    </Flex>
  );
};

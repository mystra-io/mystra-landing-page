import { Box, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";

export const TicketTraitsSlider = ({
  traits,
}: {
  traits: { label: string; content: any }[];
}) => {
  const [currentTrait, setCurrentTrait] = useState<number>(0);

  return (
    <Flex flexDir="column" mt={{base: '30px', md: "100px"}} maxW='420px'>
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
	  <Grid gap="8px" mt="25px" templateColumns={`repeat(${traits.length}, 1fr)`}>
	  {traits.map((item, index) => {
		  return <Box cursor="pointer" onClick={() => setCurrentTrait(index)} h="8px" bg={currentTrait == index ? "#04D7B1" : "none"} border="1px solid" borderColor="#04D7B1" borderRadius="2px"/>
	  })}
	  </Grid>
    </Flex>
  );
};

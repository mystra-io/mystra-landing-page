import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { FC } from "react";

const Line = () => {
  return <Box width="47px" h="0px" borderBottom="1px solid white"></Box>;
};

interface IWelcome {
  lines?: boolean;
  children: React.ReactNode
}

export const Welcome :FC<IWelcome> = ({lines = false, children}) => {
  return (
    <Flex gridGap="25px" maxW={{base: "70vw", md: "initial"}} align="center" flexDirection={{base: "column", md: "initial"}}>
      <Box display={{base: "none", md: "block"}}>
        {lines && <Line />}
      </Box>
     
      <Text
        textTransform="uppercase"
        fontFamily="Chaney"
        textAlign="center"
        letterSpacing="8px"
        fontSize="12px"
 
      >
        {children}
      </Text>
      {lines && <Line />}
    </Flex>
  );
};

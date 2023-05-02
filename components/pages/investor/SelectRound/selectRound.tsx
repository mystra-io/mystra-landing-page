import { Box, Button, Flex } from "@chakra-ui/react";

export enum ROUND {
  PRESEED,
  SEED,
  PRIVATE,
}

export const SelectRound = () => {
  return (
    <Flex flexDir="column" zIndex="2" margin="100px auto" align="center">
      <Flex
        fontWeight="bold"
        textAlign="center"
        mb="20px"
        textTransform="uppercase"
        fontFamily="Syne"
        fontSize="24px"
      >
        Our current{" "}
        <Box color="#04D7B1" display="inline">
          &nbsp;offer
        </Box>
      </Flex>
      <Flex w={{base: "100%", md: "auto"}} gap="10px" flexDir={{base: "column", md: "initial"}}>
        <Flex
          textDecoration="none !important"
          align="center"
          justify="center"
          _hover={{
            bg: "radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #04D7B1 100%)",
          }}
          p={{ base: "0px 17px 0px 17px", md: "0px 30px 0px 30px" }}
          gap="20px"
          fontWeight="700"
          fontSize={{ base: "12px", md: "14px" }}
          border="1px solid #04D7B1"
          h={{ base: "46px", md: "46px" }}
          borderRadius={{ base: "8px", md: "8px" }}
          fontFamily="Syne"
          textTransform="uppercase"
          bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #04D7B1 100%)"
        >
          PRE-SEED ROUND
        </Flex>
        <Flex
          justify="center"
          textDecoration="none !important"
          cursor="default"
          _hover={{
            bg: "radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)",
          }}
          align="center"
          filter="grayscale(1)"
          p={{ base: "0px 17px 0px 17px", md: "0px 30px 0px 30px" }}
          gap="20px"
          fontWeight="700"
          fontSize={{ base: "12px", md: "14px" }}
          border="1px solid #A989FF"
          h={{ base: "46px", md: "46px" }}
          color="gray"
          borderRadius={{ base: "8px", md: "8px" }}
          fontFamily="Syne"
          textTransform="uppercase"
          bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)"
        >
          SEED ROUND
        </Flex>
        <Flex
          textDecoration="none !important"
          p={{ base: "0px 17px 0px 17px", md: "0px 30px 0px 30px" }}
          _hover={{
            bg: "radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)",
          }}
          justify="center"
          align="center"
          gap="20px"
          color="gray"
          fontWeight="700"
          cursor="default"
          filter="grayscale(1)"
          fontSize={{ base: "12px", md: "14px" }}
          border="1px solid #A989FF"
          h={{ base: "46px", md: "46px" }}
          borderRadius={{ base: "8px", md: "8px" }}
          fontFamily="Syne"
          textTransform="uppercase"
          bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)"
        >
          PRIVATE ROUND
        </Flex>
      </Flex>
    </Flex>
  );
};

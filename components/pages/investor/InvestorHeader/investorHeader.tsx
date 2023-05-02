import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";

export const InvestorHeader = () => {
  return (
    <Flex
      mt="100px"
      gap="20px"
      pos="relative"
      padding="0px 40px"
      zIndex="0"
      textAlign="center"
      flexDir="column"
      align="center"
    >
      <Image
        zIndex="-40"
        opacity="0.8"
        pos="absolute"
        left={{ base: "-150px", md: "-200px" }}
        transform="rotate(50deg)"
        top={{ base: "-100px", md: "0px" }}
        w={{ base: "300px", md: "500px" }}
        src="/assets/elements/headerimage.png"
      />
      <Image
        zIndex="-40"
        opacity="0.8"
        pos="absolute"
        right={{ base: "-150px", md: "-200px" }}
        transform="rotate(50deg)"
        top={{ base: "-100px", md: "0px" }}
        w={{ base: "300px", md: "500px" }}
        src="/assets/elements/headerimage.png"
      />

      <Box
        textTransform="uppercase"
        letterSpacing="0.5em"
        fontFamily="Syne"
        fontSize="14px"
        color="#04D7B1"
      >
        For investor
      </Box>
      <Heading
        lineHeight="80%"
        fontFamily="Syne"
        fontWeight="700"
        maxW="800px"
        fontSize={{ base: "40px", md: "80px" }}
      >
        {" "}
        Venture Capital Investors Offer
      </Heading>
      <Link href="https://mystra.io/pitchdeck.pdf" target="_blank">
        <Button
          mt="20px"
          textDecoration="none !important"
          _hover={{ bg: "#946AED" }}
          p={{ base: "0px 20px 0px 20px", md: "0px 30px 0px 30px" }}
          gap="20px"
          fontWeight="700"
          fontSize={{ base: "12px", md: "14px" }}
          border="1px solid #A989FF"
          h={{ base: "46px", md: "64px" }}
          borderRadius={{ base: "46px", md: "64px" }}
          fontFamily="Syne"
          textTransform="uppercase"
          bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)"
        >
          View Pitchdeck
        </Button>
      </Link>
    </Flex>
  );
};

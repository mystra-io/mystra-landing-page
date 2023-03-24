import { Button, Link } from "@chakra-ui/react";

export const LaunchApp = () => {
  return (
    <Link textDecoration="none !important" href="https://testnet.mystra.app/">
      <Button
        h={{ base: "40px", lg: "56px" }}
        p={{ base: "0px 19px", lg: "0px 32px" }}
        border="1px solid"
        borderColor="#04D7B1"
        _hover={{ bg: "#04D7B1" }}
        bg="none"
		textDecoration="none"
        textTransform="uppercase"
        fontFamily="Syne"
        fontSize="12px"
        fontWeight="700"
        borderRadius="56px"
      >
        Launch App
      </Button>
    </Link>
  );
};

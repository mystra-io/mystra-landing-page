import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LaunchApp } from "../../../shared/launchApp/launchApp";
import { LabelText } from "../../../shared/typography/labelText";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const AppBanner = () => {
  return (
    <Box margin="60px auto" display={{ base: "none", lg: "block" }}>
      <CenterContainer>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          h="380px"
          borderRadius="16px"
          bgSize="cover"
          bgPos="center"
          bgImage="/assets/elements/banner.png"
          gap="28px"
        >
          <LabelText>WEB3 GATE</LabelText>
          <Box fontSize="40px" fontFamily="Sora" fontWeight="500">
            web3 mystery solved with mystra
          </Box>
          <Link
            href="https://testnet.mystra.app/"
            textDecoration="none !important"
          >
            <Button
              _hover={{ bg: "#946AED" }}
              p="0px 28px 0px 37px"
              gap="20px"
              fontWeight="700"
              border="1px solid #A989FF"
              h="64px"
              borderRadius="64px"
              fontFamily="Syne"
              textTransform="uppercase"
              bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)"
            >
              Launch App <ArrowForwardIcon />
            </Button>
          </Link>
        </Flex>
      </CenterContainer>
    </Box>
  );
};

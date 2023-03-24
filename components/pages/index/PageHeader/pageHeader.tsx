import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LabelText } from "../../../shared/typography/labelText";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const PageHeader = () => {
  return (
    <Box margin="0 auto">
      <CenterContainer>
        <Grid
          templateColumns={{ base: "1fr 1px", lg: "1fr 1fr" }}
          mt={{ base: "30px", lg: "120px" }}
        >
          <Flex flexDir="column" justify="center">
            <LabelText>ALL IN-ONE</LabelText>
            <Heading
              fontFamily="Sora"
              fontSize={{ base: "28px", md: "60px" }}
              mt="17px"
              fontWeight="800"
              lineHeight="120%"
            >
              Your all in one blockchain tools
            </Heading>
            <Text
              mt="23px"
              color="#CEE5F2"
              fontSize="16px"
              fontFamily="Sora"
              lineHeight="160%"
              fontWeight="300"
              maxW="540px"
            >
              Multichain community project that unites. Your accelerated
              transition from Web2 to Web3. DAO platform for creators and
              investors with project incubation HUB and more...
            </Text>
            <Flex
              mt="45px"
              gap={{ base: "20px", md: "29px" }}
              textTransform="uppercase"
              alignItems="center"
            >
              <Link  href="/#buy_ticket">
                <Button
				textDecoration="none !important"
                  _hover={{ bg: "#946AED" }}
                  p={{ base: "0px 17px 0px 20px", md: "0px 28px 0px 37px" }}
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
                  Buy a NFT Ticket <ArrowForwardIcon />
                </Button>
              </Link>
              <Link target="_blank" href="https://docs.mystra.io/docs/MEMBERSHIP/4.2-For-investors">
                <Box
                  fontFamily="Syne"
                  cursor="pointer"
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight="700"
                  lineHeight="90%"
                  textDecoration="underline"
                >
                  Become a member
                </Box>
              </Link>
            </Flex>
          </Flex>
          <Flex pos={{ base: "relative", lg: "relative" }} align="center">
            <Image
              pos="absolute"
              left="0px"
              right="0"
              top="0"
              bottom="0"
              margin="auto"
              src="/assets/elements/headerimage.png"
            />
          </Flex>
        </Grid>
      </CenterContainer>
    </Box>
  );
};

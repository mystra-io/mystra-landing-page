import { Box, Button, Center, Flex, Grid, Image, Link } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LabelText } from "../../../shared/typography/labelText";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export const Staking = () => {
  return (
    <Flex
      justify="center"
      py={{ base: "70px", lg: "150px" }}
      borderY="1px solid"
      borderColor="rgba(255,255,255,0.1)"
      bg={"rgba(0,0,0,0.2)"}
    >
      <CenterContainer>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "20px", md: "80px" }}
          alignItems="center"
        >
          <Flex flexDir="column" align="flex-start">
            <LabelText>STAKE YOUR TOKENS</LabelText>
            <Box
              mt="20px"
              lineHeight="110%"
              ml={{ base: "none", md: "-5px" }}
              fontSize={{ base: "28px", md: "40px" }}
              fontWeight={{ base: "800", md: "500" }}
              fontFamily="Sora"
            >
              Gain much more by staking CSPR with Mystra
            </Box>
            <Box
              fontSize="16px"
              lineHeight="160%"
              fontWeight="400"
              fontFamily="Sora"
              mt="30px"
              color="#CEE5F2"
            >
              By staking with us and meeting additional criteria, you can count
              on additional benefits.
            </Box>
            <Box
              fontSize="14px"
              mt="30px"
              lineHeight="160%"
              fontWeight="400"
              fontFamily="Sora"
              color="#CEE5F2"
            >
              The validator has been established to support the decentralisation
              of the Casper Network (ethereum, polygon, bsc nodes soon) on which
              the Mystra project is based. Delegators participate in securing
              the network, receiving rewards from staking, extra benefits on our
              platform and support development of Mystra.
            </Box>
            <Link
              target="_blank"
              href="https://docs.mystra.io/docs/PRODUCTS%20AND%20SERVICES/2.9-staking"
              textDecoration="none !important"
            >
              <Button
                _hover={{ bg: "#946AED" }}
                p={{ base: "0px 17px 0px 20px", md: "0px 28px 0px 37px" }}
                gap="20px"
                fontWeight="700"
                fontSize={{ base: "12px", md: "14px" }}
                border="1px solid #A989FF"
                h={{ base: "46px", md: "64px" }}
                borderRadius={{ base: "46px", md: "64px" }}
                fontFamily="Syne"
                mt="40px"
                textTransform="uppercase"
                bg="radial-gradient(150% 150% at 50.21% 50%, rgba(138, 69, 251, 0) 0%, #946AED 100%)"
              >
                Find out why it's worth it <ArrowForwardIcon />
              </Button>
            </Link>
          </Flex>
          <Flex justify="center" align="center">
            <Image
              src="/assets/elements/staking.png"
              pb={{ base: "0px", lg: "100px" }}
            />
          </Flex>
        </Grid>
      </CenterContainer>
    </Flex>
  );
};

import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";

const Pointer = () => (
  <Image display={{base: "none", md: "block"}} boxSize="30px" src="/assets/elements/pointer.png" />
);

export const SaleView = ({ amount }: { amount: number }) => {
  return (
    <CenterContainer>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="50px">
        <Flex align="center">
          <Image src="/assets/elements/circle.png" />
        </Flex>
        <Flex justify="center" flexDir="column" gap="20px">
          <Flex gap="20px" align="center">
            <Pointer />
            <Flex flexDir="column" fontFamily="Sora">
              <Box fontSize="16px" lineHeight="24px">
                Price per ticket
              </Box>
              <Box
                color="#04D7B1"
                letterSpacing="0.08em"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="16px"
                lineHeight="24px"
              >
                30 USD
              </Box>
            </Flex>
          </Flex>
          <Flex gap="20px" align="center">
            <Pointer />
            <Flex flexDir="column" fontFamily="Sora">
              <Box fontSize="16px" lineHeight="24px">
                No. of claimed tickets
              </Box>
              <Box
                color="#04D7B1"
                letterSpacing="0.08em"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="16px"
                lineHeight="24px"
              >
                {amount}{" "}
                <Box
                  display="inline"
                  fontSize="12px"
                  color="gray"
                  fontWeight="normal"
                >
                  (min. 100)
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex gap="20px" align="center">
            <Pointer />
            <Flex flexDir="column" fontFamily="Sora">
              <Box fontSize="16px" lineHeight="24px">
                Total payment
              </Box>
              <Box
                color="#04D7B1"
                letterSpacing="0.08em"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="16px"
                lineHeight="24px"
              >
                {amount * 30} USD
              </Box>
            </Flex>
          </Flex>
          <Flex gap="20px" align="center">
            <Pointer />
            <Flex flexDir="column" fontFamily="Sora">
              <Box fontSize="16px" lineHeight="24px">
                Cliff offer TGE
              </Box>
              <Box
                color="#04D7B1"
                letterSpacing="0.08em"
                fontWeight="bold"
                fontSize="16px"
                lineHeight="24px"
              >
                2 months
              </Box>
            </Flex>
            <Flex flexDir="column" fontFamily="Sora">
              <Box fontSize="16px" lineHeight="24px">
                Ability to burn 100% NFT allocation
              </Box>
              <Box
                color="#04D7B1"
                letterSpacing="0.08em"
                fontWeight="bold"
                fontSize="16px"
                lineHeight="24px"
              >
                10 months vesting
              </Box>
            </Flex>
          </Flex>
          <Flex gap="20px" align="center">
            <Pointer />
            <Flex flexDir="column" gap="8px" fontFamily="Sora">
              <Flex fontFamily="Sora" gap="10px">
                <Box fontSize="16px" lineHeight="24px">
                  Burn release every month
                </Box>
                <Box
                  color="#04D7B1"
                  letterSpacing="0.08em"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  10%
                </Box>
              </Flex>
              <Flex fontFamily="Sora" gap="10px">
                <Box fontSize="16px" lineHeight="24px">
                  Burn release per month
                </Box>
                <Box
                  color="#04D7B1"
                  letterSpacing="0.08em"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  {Math.ceil(amount * 0.1)} tickets
                </Box>
              </Flex>
              <Flex fontFamily="Sora" gap="10px">
                <Box fontSize="16px" lineHeight="24px">
                  Full burn release after TGE
                </Box>
                <Box
                  color="#04D7B1"
                  letterSpacing="0.08em"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  12 months
                </Box>
              </Flex>
			  <Flex fontFamily="Sora" gap="10px">
                <Box fontSize={{base: "14px", md: "16px"}} lineHeight="24px">
                  NFT Ticket Release
                </Box>
                <Box
                  color="#04D7B1"
                  letterSpacing="0.08em"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="24px"
                >
                  48h from purchase
                </Box>
              </Flex>
            </Flex>
			
          </Flex>
        </Flex>
      </Grid>
    </CenterContainer>
  );
};

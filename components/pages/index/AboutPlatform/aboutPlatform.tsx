import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LabelText } from "../../../shared/typography/labelText";

const modules = [
  {
    label: "INCUBATION HUB",
    content: "/assets/elements/incubation-item.png",
  },
  {
    label: "DAO",
    content: "/assets/elements/dao-item.png",
  },
  {
    label: "MARKETPLACE",
    content: "/assets/elements/marketplace-item.png",
  },
  {
    label: "WEB3 CHAT",
    content: "/assets/elements/chat-item.png",
  },
  {
    label: "DEFI",
    content: "/assets/elements/staking-item.png",
  },
  {
    label: "WALLET",
    content: "/assets/elements/wallet-item.png",
  },
];

export const AboutPlatform = () => {
  const [selectedModule, setSelectedModule] = useState<number>(0);

  return (
    <Box id="features" margin="auto" mb={{ base: "20px", md: "150px" }}>
      <CenterContainer>
        <Flex
          pt={{ base: "50px", md: "150px" }}
          flexDir="column"
          gap="25px"
          align="center"
          justify="center"
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.1)"
        >
          <LabelText>MYSTRA PLATFORM</LabelText>
          <Text
            fontWeight="500"
            textAlign="center"
            fontSize={{ base: "28px", md: "40px" }}
            fontFamily="Sora"
          >
            The first of its kind on the blockchain
          </Text>
          <Box fontSize="16px" color="#CEE5F2">
            Accelerate your transition from Web2 to Web3.
          </Box>
        </Flex>

        <Grid
          templateRows={{ base: "1fr 1fr 1fr", md: "1fr 1fr", xl: "1fr" }}
          templateColumns={{
            base: "1fr 1fr",
            md: "repeat(3, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap="8px"
          mt="40px"
        >
          {modules.map((item, index) => {
            return (
              <Button
                key={item.label}
                h="48px"
                fontFamily="Syne"
                fontWeight="500"
                fontSize="14px"
                borderRadius="8px"
                onClick={() => setSelectedModule(index)}
                border="1px solid"
                borderColor={
                  selectedModule == index
                    ? "#04D7B1"
                    : "rgba(120, 120, 120, 0.64)"
                }
                _hover={{
                  bg: "radial-gradient(50% 50% at 50% 50%, rgba(15, 15, 15, 0) 0%, rgba(33, 232, 201, 0.13) 100%)",
                }}
                bg={
                  selectedModule == index
                    ? "radial-gradient(50% 50% at 50% 50%, rgba(15, 15, 15, 0) 0%, rgba(33, 232, 201, 0.13) 100%)"
                    : "linear-gradient(180deg, rgba(15, 15, 15, 0.64) 0%, rgba(9, 9, 9, 0) 100%)"
                }
              >
                {item.label}
              </Button>
            );
          })}
        </Grid>
        <Flex
          align="center"
          justify="center"
          h={{ base: "50vh", md: "100vh" }}
          bgRepeat="no-repeat"
          bgImage="/assets/elements/about-bg.png"
          bgPosition={{ base: "50% 50%", md: "50% -25%" }}
          bgSize={{ base: "100%", md: "80%" }}
        >
          <Image
            src={modules[selectedModule].content}
            maxH="100vh"
            maxW={{ base: "90vw", md: "100vw" }}
          />
        </Flex>
      </CenterContainer>
    </Box>
  );
};

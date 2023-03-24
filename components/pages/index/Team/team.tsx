import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LabelText } from "../../../shared/typography/labelText";
import { TEAM_DATA } from "./team-data";

export const Team = () => {
  return (
    <Flex
      align="center"
      padding={{ base: "80px 0px 60px", md: "150px 0px" }}

      flexDir="column"
    >
      <CenterContainer>
        <Flex
          justify={{ base: "center", lg: "space-between" }}
          align="flex-end"
		  mb="10px"
        >
          <Flex flexDir="column" align={{ base: "center", lg: "initial" }}>
            <LabelText>Contributors</LabelText>
            <Box fontSize="40px" fontWeight="500">
              Mystra Leaders
            </Box>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            gap="28px"
            align="center"
          >
            <Box>Mystra on LinkedIn</Box>
            <Button
              h="56px"
              fontFamily="Syne"
              border="1px solid"
              padding="0 22px"
              bg="none"
              borderRadius="56px"
              _hover={{ bg: "#04D7B1" }}
              borderColor="#04D7B1"
            >
              Go to LinkedIn
            </Button>
          </Flex>
        </Flex>
      </CenterContainer>
      <Flex
        mt="60px"
        maxW="calc(100vw)"
        flexDir="column"
        overflow={{ base: "hidden", md: "initial" }}
        display={{ base: "flex", md: "grid" }}
        gridTemplateColumns={{
          base: "none",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        gap="70px"
      >
        <Flex
          pb="40px"
          display={{ base: "flex", md: "none" }}
          overflowX="scroll"
          gap="20px"
        >
          {TEAM_DATA.main.map((member, index) => {
            return (
              <Flex
                flexDir="column"
                ml="32px"
                mr={index == TEAM_DATA.main.length - 1 ? "20px" : "0px"}
                minW="70vw"
                maxW="70vw"
              >
                <Box
                  boxSize="88px"
                  pos="relative"
                  bg="#111111"
                  borderRadius="50%"
                  bgSize="cover"
                  bgPos="center"
                  bgImage={member.photo}
                >
                  <Image
                    pos="absolute"
                    right="5px"
                    top="5px"
                    src="/assets/elements/circle-team.png"
                    boxSize="88px"
                  />
                </Box>
                <Box mt="18px" fontSize="20px">
                  {member.name}
                </Box>
                <Box mt="10px" maxW="140px" color="#04D7B1" fontSize="12px">
                  {member.role}
                </Box>
                <Box mt="25px" color="#CEE5F2" fontWeight="300" fontSize="12px">
                  {member.description}
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex margin="auto">
        <CenterContainer>
          <Flex
            mt="0px"
            maxW="calc(100vw)"
            flexDir="column"
            overflow={{ base: "hidden", md: "initial" }}
            display={{ base: "flex", md: "grid" }}
            gridTemplateColumns={{
              base: "none",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            gap="70px"
          >
            {TEAM_DATA.main.map((member) => {
              return (
                <Flex flexDir="column" display={{ base: "none", md: "flex" }}>
                  <Box
                    boxSize="88px"
                    pos="relative"
                    bg="#111111"
                    borderRadius="50%"
                    bgSize="cover"
                    bgPos="center"
                    bgImage={member.photo}
                  >
                    <Image
                      pos="absolute"
                      right="5px"
                      top="5px"
                      src="/assets/elements/circle-team.png"
                      boxSize="88px"
                    />
                  </Box>
                  <Box mt="18px" fontSize="20px">
                    {member.name}
                  </Box>
                  <Box mt="10px" maxW="140px" color="#04D7B1" fontSize="12px">
                    {member.role}
                  </Box>
                  <Box
                    mt="25px"
                    color="#CEE5F2"
                    fontWeight="300"
                    fontSize="12px"
                  >
                    {member.description}
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </CenterContainer>
      </Flex>
      <Flex margin="auto">
        <Flex justify="center" display={{ base: "none", lg: "flex" }}>
          <CenterContainer>
            <Flex justify="space-between" mt="80px">
              {TEAM_DATA.others.map((member) => {
                return (
                  <Flex flexDir="column">
                    <Flex
                      flexDir="column"
                      fontFamily="Syne"
                      fontWeight="500"
                      fontSize="20px"
                      lineHeight="120%"
                    >
                      {member.name.split(" ").map((item) => {
                        return <Box fontFamily="Syne">{item}</Box>;
                      })}
                    </Flex>
                    <Box color="#04D7B1" maxW="110px" fontSize="12px" mt="15px">
                      {member.role}
                    </Box>
                  </Flex>
                );
              })}
            </Flex>
          </CenterContainer>
        </Flex>
      </Flex>
    </Flex>
  );
};

import { Box, Flex, Grid } from "@chakra-ui/layout";
import {
  Image,
  Input,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconAssets } from "../../../../config";

export const CountdownButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setLoading] = useState<boolean>(false);

  const save = async () => {
    setLoading(true);
  };

  return (
    <Grid
      templateColumns={{ base: "auto 50px", md: "auto 70px" }}
      height={{ base: "50px", md: "70px" }}
      gridGap={{ base: "9px", md: "13px" }}
      fontSize={{ base: "12px", md: "13px" }}
      position="relative"
      zIndex="0"
    >
      <Link
        href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.7-call-up-ticket"
        display="grid"
        position="relative"
        zIndex="10"
      >
        <Flex
          border="2px solid white"
          padding={{ base: "0px 10px", md: "0px 80px" }}
          align="center"
          gridGap="20px"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
          textDecoration="none"
          _hover={{ background: "white", color: "black" }}
        >
          What are call up tickets
          <Image
            display={{ base: "none", md: "block" }}
            src={IconAssets.arrowRightBrand}
          />
        </Flex>
      </Link>
      <Flex
        border="2px solid red"
        align="center"
        justify="center"
        cursor="pointer"
        onClick={onOpen}
      >
        <Image src={IconAssets.bell} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          color="black"
          maxW="580px"
          borderRadius="4px"
          bg="transparent"
        >
          <Box
            background="rgba(255, 255, 255, 0.01)"
            boxShadow="inset 0px 0px 12.3205px rgba(255, 255, 255, 0.05), inset 0px 0.724735px 0.724735px rgba(255, 255, 255, 0.15)"
            backdropFilter="blur(13px)"
            borderRadius="8px"
            border="1px solid rgba(133, 133, 133, 1)"
            padding="13px"
          >
            <Grid
              padding="55px 41px"
              borderRadius="4px"
              bg="#1D1D1D"
              gap="20px"
              position="relative"
            >
              <Image
                src={IconAssets.xCircle}
                onClick={onClose}
                pos="absolute"
                top="23px"
                right="23px"
                cursor="pointer"
              />
              <Box
                letterSpacing="0.8em"
                ml="2px"
                fontSize="8px"
                fontFamily="Chaney"
              >
                CasperArmy
              </Box>
              <Text fontWeight="800" fontSize="30px">
                Sign Up to the newsletter
              </Text>

              <Text fontSize="16px" maxW="350px" color="#747474">
                Sign up and stay up to date on Incubated projects, DAO, VC
                investments and news
              </Text>
              <form
                method="post"
                action="https://newsletter.casperarmy.org/subscription/form"
                className="listmonk-form"
              >
                <div>
                  <input type="hidden" name="nonce" />
                  <p>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      bg="#171717"
                      padding="30px"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      fontSize="14px"
                      mb="20px"
                      _placeholder={{ color: "#474747" }}
                      color="white"
                    />
                  </p>
                  <p>
                    <Input
                      type="email"
                      name="email"
                      required
                      bg="#171717"
                      _placeholder={{ color: "#474747" }}
                      color="white"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      padding="30px"
                      fontSize="14px"
                      placeholder="Enter your e-mail address"
                      mb="20px"
                    />
                  </p>

                  <p>
                    <input
                      id="b3c6a"
            
                      type="checkbox"
                      name="l"
                      checked
                      value="b3c6a0ef-1670-421c-8a6b-bb70d40ea12c"
                    />
                    <Box display="inline" fontSize="12px" color="gray">
                      <Box color="#FF0202" display="inline" marginLeft="10px">*</Box>I have read and accept the <Link color="#FF0202" href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.7-Terms-of-use">Terms & Conditions </Link> and <Link color="#FF0202" href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.6-Privacy-policy">Privacy
                      Policy</Link>
                    </Box>
                  </p>

                  <p>
                    <Input
                      type="submit"
                      _hover={{ opacity: "0.7" }}
                      cursor="pointer"
                      bg="#FF0202"
                      padding="16px 0px 40px 0px"
                      color="white"
                      mt="20px"
                      border="none"
                      borderRadius="4px"
                      textAlign="center"
                      onClick={() => save()}
                      fontWeight="bold"
                      value="Sign Up"
                    />
                  </p>
                </div>
              </form>
            </Grid>
          </Box>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

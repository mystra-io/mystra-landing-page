import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useWeb3 } from "@3rdweb/hooks";
import {
  CasperClient,
  CasperServiceByJsonRPC,
  CLPublicKey,
  DeployUtil,
} from "casper-js-sdk";
import { isConnected } from "casper-js-sdk/dist/lib/Signer";
import {
  Button,
  Checkbox,
  Grid,
  Image,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconAssets } from "../../../../config";
import { WalletButton } from "./walletButton";
import { LoggedUser, WalletTypes } from "./LoggedUser/loggedUser";
import { GlassContainer } from "../../../pages/index/Features/glassContainer";

const apiUrl =
  "020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed";
const casperService = new CasperServiceByJsonRPC(apiUrl);
const casperClient = new CasperClient(apiUrl);

export const LaunchApp = () => {
  const [state, setState] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<WalletTypes | null>(null);

  const handleLogout = async () => {
    if (walletType === WalletTypes.METAMASK) {
    } else if (walletType === WalletTypes.CASPER_SIGNER) {
    }

    setState(null);
    setWalletType(null);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTwo,
    onOpen: onOpenTwo,
    onClose: onCloseTwo,
  } = useDisclosure();

  // must accept terms before signing in
  const [accepted, setAccepted] = useState<boolean>(false);
  const [showAcceptError, setShowAcceptError] = useState<boolean>(false);

  const handleCheck = (e: any) => {
    setAccepted(e.target.checked);
    window.localStorage.setItem(
      "acceptedTermsAndPolicy",
      e.target.checked.toString()
    );
    setShowAcceptError(false)

  };

  useEffect(() => {
    setAccepted(
      window.localStorage.getItem("acceptedTermsAndPolicy") == "true"
    );
    console.log(window.localStorage.getItem("acceptedTermsAndPolicy"));
  }, []);

  return (
    <>
      {!state ? (
        <Flex
          gridGap={"23px"}
          align="center"
          borderRadius="4px"
          fontSize="16px"
          zIndex="0"
          fontWeight="bold"
          padding={state ? "8px 28px" : "15px 28px"}
          fontFamily="Changa"
          justifyContent={{ base: "center", md: "initial" }}
          letterSpacing="3px"
          textAlign="center"
          border="2px solid white"
          cursor="pointer"
          _hover={{ backgroundColor: "white", color: "black" }}
          onClick={async () => {
            if (!state) {
              onOpen();
            } else {
              setState(null);
            }
          }}
        >
          CONNECT WALLET
        </Flex>
      ) : (
        <LoggedUser
          address={state}
          wallet={walletType ?? WalletTypes.CASPER_SIGNER}
          handleLogout={handleLogout}
        />
      )}
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
              gap="9px"
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
                #CasperArmy
              </Box>
              <Text fontWeight="800" fontSize="30px">
                Select your wallet
              </Text>

              <Text fontSize="16px" maxW="350px" color="#747474">
                Connect with one of our available wallet or create and connect a
                new wallet.
              </Text>
              <Grid gap="10px" m="15px 0px">
                <WalletButton
                  isSelected={walletType === WalletTypes.CASPER_SIGNER}
                  name="Casper Signer"
                  icon={IconAssets.casper}
                  action={async () => {
                    if (accepted) {
                      if (typeof window !== "undefined") {
                        if (await window.casperlabsHelper) {
                          try {
                            window.casperlabsHelper.requestConnection();
                            const isConnected =
                              await window.casperlabsHelper.isConnected();

                            if (!state && isConnected) {
                              console.log(await window.casperlabsHelper);
                              setState(
                                await window.casperlabsHelper.getActivePublicKey()
                              );
                              setWalletType(WalletTypes.CASPER_SIGNER);
                              setShowAcceptError(false);
                              onClose();
                            }
                          } catch (e) {
                            console.log(e);
                          }
                        } else {
                          onOpenTwo();
                          onClose();
                        }
                      }
                    } else {
                      setShowAcceptError(true);
                    }
                  }}
                />
                <WalletButton
                  isSelected={walletType === WalletTypes.METAMASK}
                  name="Metamask"
                  icon={IconAssets.metamask}
                  action={() => {
                    if (accepted) {
                      if ((window as any).ethereum) {
                        (window as any).ethereum
                          .request({ method: "eth_requestAccounts" })
                          .then((res: any) => {
                            // Return the address of the wallet
                            setState(res[0]);
                            setWalletType(WalletTypes.METAMASK);
                            setShowAcceptError(false)
                            onClose();
                          });
                      } else {
                        alert("install metamask extension!!");
                      }
                    } else {
                      setShowAcceptError(true)
                    }
                  }}
                />
              </Grid>
              <Box m="10px 0px">
                <Checkbox
                  colorScheme="red"
                  isChecked={accepted}
                  onChange={handleCheck}
                >
                  <Box color="rgba(116, 116, 116, 1)" fontSize="12px">
                    <Box color="#FF0202" display="inline">
                      *{" "}
                    </Box>
                    I have read and accept the{" "}
                    <Link
                      href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.7-Terms-of-use"
                      color="#FF0202"
                    >
                      Terms & Conditions
                    </Link>{" "}{" "}
                    and{" "}
                    <Link
                      href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.6-Privacy-policy"
                      color="#FF0202"
                    >
                      Privacy Policy
                    </Link>
                  </Box>
                </Checkbox>
                {showAcceptError && <Box mt="20px" fontSize="12px" color="red">By using CasperArmys content and tools including this site, the CasperArmy platform, and the wallet connection, you need to accept our Terms & Conditions and Privacy Policy.</Box>}
              </Box>
              <Flex justify="space-between" color="#747474">
                <Link
                  href="https://docs.casperlabs.io/workflow/signer-guide/"
                  fontSize="12px"
                  textDecoration="underline"
                  fontWeight="500"
                >
                  Create new Casper wallet
                </Link>
                <Link
                  href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.11-networks-and-payments"
                  fontSize="12px"
                  textDecoration="underline"
                  fontWeight="500"
                >
                  Read more about payments
                </Link>
              </Flex>
            </Grid>
            <Flex
              align="center"
              color="white"
              fontSize="9px"
              padding="20px 0px 6px"
              display="flex"
              gridGap="10px"
              justifyContent="center"
            >
              <Image src={IconAssets.alertTriangle} /> Users will require a
              Casper Signer account to use the all features on our platform
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenTwo} onClose={onCloseTwo}>
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
              gap="9px"
              position="relative"
            >
              <Image
                src={IconAssets.xCircle}
                onClick={onCloseTwo}
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
                #CasperArmy
              </Box>
              <Text fontWeight="800" fontSize="30px" color="#FF0202">
                ATTENTION
              </Text>

              <Text fontSize="16px" maxW="350px" color="#747474">
                Casper Signer extension not detected.
              </Text>

              <Flex justify="space-between" color="#747474" mt="20px">
                <Link
                  href="https://docs.casperlabs.io/workflow/signer-guide/"
                  fontSize="12px"
                  textDecoration="underline"
                  fontWeight="500"
                >
                  Read Casper Signer guide
                </Link>
                <Link
                  href="https://chrome.google.com/webstore/detail/casper-signer/djhndpllfiibmcdbnmaaahkhchcoijce"
                  fontSize="12px"
                  textDecoration="underline"
                  fontWeight="500"
                >
                  Install Chrome Extension
                </Link>
              </Flex>
              <Button mt="40px" h="70px" bg="#FF0202" onClick={onCloseTwo}>
                {" "}
                OK
              </Button>
            </Grid>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

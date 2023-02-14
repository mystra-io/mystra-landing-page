import { Grid, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { BrandAssets } from "../../../../config";
import { LaunchApp } from "./launchApp";
import { Navigation } from "./Navigation/navigation";
import Link from "next/link";
import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MobileNavigation } from "./mobileNavigation";
import dynamic from "next/dynamic";

const LaunchAppDynamic =  dynamic(() => Promise.resolve(LaunchApp), {
  ssr: false,
});

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", lg: "1fr auto 1fr" }}
      marginTop={{ base: "none", lg: "49px" }}
      padding={{ base: "30px 20px", md: "30px 0px", lg: "0px 0px" }}
      alignItems="center"
      zIndex="1000"
      w={{base: "90vw", md: "auto"}}
      position="relative"
    >
      <Link href="/">
        <Image
          cursor="pointer"
          src={BrandAssets.logo}
          w={{ base: "100px", lg: "auto" }}
        />
      </Link>
      <Navigation onClose={onClose} />
      <Flex display={{ base: "none", lg: "flex" }} justify="flex-end">
        <LaunchAppDynamic />
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        gridGap="30px"
        justifySelf="flex-end"
      >
        <Image src={BrandAssets.ecologyLabelMobile} />
        <Flex
          w="40px"
          h="30px"
          justify="space-between"
          flexDir="column"
          onClick={onOpen}
        >
          <Box bg="white" padding="2px"></Box>
          <Box bg="white" padding="2px"></Box>
          <Box bg="white" padding="2px"></Box>
        </Flex>

        <Modal isCentered onClose={onClose} isOpen={isOpen} size="full">
          <ModalOverlay display={{ base: "initial", lg: "none" }} />
          <MobileNavigation onClose={onClose} />
        </Modal>
      </Flex>
    </Grid>
  );
};

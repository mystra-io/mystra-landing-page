import { Grid, Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { BrandAssets } from "../../../../config";
import { Navigation } from "./Navigation/navigation";
import Link from "next/link";
import { Button, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MobileNavigation } from "./mobileNavigation";
import dynamic from "next/dynamic";
import { LaunchApp } from "../../../shared/launchApp/launchApp";

const LaunchAppDynamic = dynamic(() => Promise.resolve(LaunchApp), {
  ssr: false,
});

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateColumns={{ base: "1fr 1fr", lg: "1fr auto  auto" }}
      marginTop={{ base: "none", lg: "40px" }}
      padding={{ base: "20px 14px", md: "30px 0px", lg: "0px 0px" }}
      alignItems="center"
      zIndex="1000"
      w={{ base: "calc(100vw)", md: "auto" }}
      position="relative"
    >
      <Link href="/">
        <Image
          cursor="pointer"
          mb="20px"
          src={BrandAssets.logo}
          w={{ base: "140px", lg: "auto" }}
        />
      </Link>
      <Box display={{base: "none", lg: "block"}}></Box>

      <Flex align="center" pb={{base: "5px", md: "none"}} gap="42px" display={{ base: "flex", lg: "flex" }} justify="flex-end">
        <Navigation onClose={onClose} />
        <LaunchApp/>
      </Flex>
    
    </Grid>
  );
};

import { Box, Flex, Image, Link, Modal, ModalContent } from "@chakra-ui/react";

import React, { FC } from "react";
import { ElementAssets, IconAssets } from "../../../../config";
import { LaunchApp } from "./launchApp";
import { Navigation } from "./Navigation/navigation";

interface IMobileNavigation {
  onClose: () => void;
}

export const MobileNavigation: FC<IMobileNavigation> = ({ onClose }) => {
  return (
    <ModalContent
      w="100vw"
      maxH="100vh"
      display={{ base: "flex", lg: "none" }}
      padding="20px 19px"
      bg="#161616"
      borderRadius="0px"
      overflowY="scroll"
      flexDir="column"
      gap="40px"
    >
      <Flex justifyContent="space-between" align="center">
        <Box
          fontFamily="Sora"
          fontSize="25px"
          fontWeight="800"
          lineHeight="130%"
        >
          Menu
        </Box>
        <Image onClick={onClose} w="38px" src={IconAssets.x} />
      </Flex>
      <Navigation onClose={onClose} mobile />
      <LaunchApp />
      <Link href="https://cspr.live/validator/020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed">
        <Image src={ElementAssets.validatorMenu} w="100%" />
      </Link>
    </ModalContent>
  );
};

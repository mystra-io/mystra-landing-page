import { Flex, Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { BrandAssets } from "../../../../config";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import React from "react";
import { Socials } from "./socials";
import { CornerLinks } from "./cornerLinks";
import Link from "next/link";

export const Topbar = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      borderBottom="1px solid rgba(255,255,255,0.1)"
      zIndex="200"
      position="relative"
    >
      <Flex bg="transparent" justify="space-between" p="12px 0px">
        <CornerLinks />
        <Flex align="center" gridGap="26px">
          <Link target="blank" href="https://docs.mystra.io/docs/validator/7.1-Validator-features#eco-friendly">
            <Image
              display={{ base: "none", xl: "flex" }}
              cursor="pointer"
              mb="9px"
              src={BrandAssets.ecologyLabel}
            />
          </Link>

          <Flex
            display={{ base: "none", xl: "flex" }}
            fontFamily="Changa"
            fontSize="12px"
          >
            JOIN OUR COMMUNITY AND&nbsp;
            <Box fontWeight="bold">EARN EXTRA POINTS!</Box>
          </Flex>
          <Socials />
        </Flex>
      </Flex>
    </Box>
  );
};

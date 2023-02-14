import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";

const CornerDot = () => {
  return <Box bg="#FF0202" boxSize="3px" />;
};

export const CornerLinks = () => {
  return (
    <Flex
      fontWeight="bold"
      fontSize="12px"
      fontFamily="Changa, sans-serif"
      gridGap="20px"
      align="center"
    >
      <Link href="https://litepaper.casperarmy.io">ARMY NFT LITEPAPER</Link>
      <CornerDot />
      <Link href="https://docs.casperarmy.org/docs/point-system/3.2-Soldier-Rating">
        HOW TO EARN POINTS?
      </Link>
      <CornerDot />
      <Link href="https://cspr.live/validator/020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed">
        <Flex cursor="pointer">
          VALIDATOR&nbsp;
          <Flex fontWeight="normal">
            (STAKE AND EARN&nbsp;<Flex color="#FF0202">MORE!</Flex>)
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
};

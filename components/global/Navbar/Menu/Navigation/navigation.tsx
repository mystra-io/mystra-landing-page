import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavItem } from "./navItem";

interface INavigation {
  mobile?: boolean;
  onClose: () => void;
}

export const Navigation: FC<INavigation> = ({ mobile, onClose }) => {
  return (
    <Flex
      fontFamily="Mulish, sans-serif"
      gridGap={{ base: "45px", lg: "18px", xl: "45px" }}
      fontSize="14px"
      display={{base: "none", lg: "flex"}}
      flexDir={{ base: "column", lg: "initial" }}
      zIndex="1"
      textAlign={{ base: "center", lg: "initial" }}
      fontWeight="600"
      letterSpacing="0.1em"
      css={{
        ".active": {
          fontWeight: "800",
        },
        // ":hover": { color: "red", },
      }}
    >
      <NavItem onClick={onClose} url="/#ticket">
        NFT Ticket
      </NavItem>
      <NavItem onClick={onClose} url="/#features">
        Features
      </NavItem>
     
      <NavItem onClick={onClose} url="/#faq">
        FAQ
      </NavItem>
    </Flex>
  );
};

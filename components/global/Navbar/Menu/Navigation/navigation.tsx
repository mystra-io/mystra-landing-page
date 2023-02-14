import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavItem } from "./navItem";

interface INavigation {
  mobile?: boolean;
  onClose: () => void
}

export const Navigation: FC<INavigation> = ({ mobile, onClose}) => {
  return (
    <Flex
      fontFamily="Mulish, sans-serif"
      gridGap={{base: "45px", lg: "18px", xl: "45px"}}
      fontSize="14px"
      flexDir={{ base: "column", lg: "initial" }}
      zIndex="1"
      textAlign={{ base: "center", lg: "initial" }}

      fontWeight="600"
      letterSpacing="0.1em"
      display={{ base: mobile ? "flex" : "none", lg: "flex" }}
      css={{
        ".active": {
          fontWeight: "800",          
        },
        // ":hover": { color: "red", },
      }}
    >
      <NavItem onClick={onClose} url="/">investor</NavItem>
      <NavItem onClick={onClose} url="/creator">creator</NavItem>
      <NavItem onClick={onClose} url="/tickets">Call-Up ticket</NavItem>
      <NavItem onClick={onClose} url="/stake">Staking</NavItem>
      <NavItem onClick={onClose} url="https://casperarmy.io/">Army NFT</NavItem>
      <NavItem onClick={onClose} url="https://platform.casperarmy.org/">Launch App</NavItem>
    </Flex>
  );
};

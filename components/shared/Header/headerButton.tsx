import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";

interface IHeaderButton {
  ghost?: boolean;
  children: React.ReactNode;
  singleItem?: boolean;
  href?: string;
}

export const HeaderButton: FC<IHeaderButton> = ({
  ghost,
  children,
  singleItem = false,
  href = "/",
}) => {
  return (
    <Flex
      borderRadius="3px"
      textTransform="uppercase"
      fontFamily="Sora, sans-serif"
      fontWeight="bold"
      justify={{base: "center", md:(singleItem ? "center" : "space-between")}}
      color="white"
      lineHeight="100%"
      align="center"
      p={{ base: "20px 25px", md: "25px 40px" }}
      fontSize={{ base: "12px", md: "13px" }}
      bg={ghost ? "transaprent" : "#FF0202"}
      border="2px solid #FF0202"
      textAlign="center"
      cursor="pointer"
      _hover={{
        backgroundColor: "#FF0202",
        textDecoration: 'none'
      }}
      gap="10px"
      textDecoration="none"
    >
      {children}
    </Flex>
  );
};

import { Text } from "@chakra-ui/react";

export const TextBasic = ({ children }: any) => {
  return (
    <Text
      fontSize={{ base: "18px", md: "24px" }}
      opacity="0.6"
      lineHeight="160%"
    >
      {children}
    </Text>
  );
};

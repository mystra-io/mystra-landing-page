import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

interface ISectionHeading {
  label: string;
  content: string;
  centered?: boolean;
}

export const SectionHeading: FC<ISectionHeading> = ({
  label,
  content,
  centered = false,
}) => {
  return (
    <Flex
      flexDir="column"
      gridGap="17px"
      align={centered ? "center" : "initial"}
      margin={{ base: "54px 0px", md: "140px 0px" }}
    >
      <Box
        textTransform="uppercase"
        fontFamily="Chaney"
        fontSize="10px"
        style={{ WebkitTextStroke: "0.5px #888", color: "transparent" }}
        letterSpacing="0.8em"
      >
        {label}
      </Box>
      <Heading
        as="h3"
        textAlign="center"
        fontSize={{ base: "30px", md: "60px" }}
        lineHeight="150%"
      >
        {content}
      </Heading>
    </Flex>
  );
};

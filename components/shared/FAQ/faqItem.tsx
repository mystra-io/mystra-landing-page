import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IconAssets } from "../../../config";
import { questionItem } from "./faq";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface IFAQItem {
  value: questionItem;
}

export const FAQItem: FC<IFAQItem> = ({ value }) => {
  const [shown, setShown] = useState<boolean>(false);

  const toggle = () => {
    setShown(!shown);
  };

  return (
    <Flex
      flexDir="column"
      borderRadius="4px"
      onClick={toggle}
      gap="14px"
      fontSize="18px"
      padding="28px 30px"
      border="1px solid #666"
      lineHeight="152%"
      bg={"rgba(23, 23, 23, 0.8)"}
      cursor="pointer"
      position="relative"
    >
      <Flex fontWeight="bold" justifyContent="space-between" align="center">
        <Box fontSize="14px" fontFamily="Sora" lineHeight="27px" fontWeight="500" maxW="80%">{value.question}</Box>
        <ChevronDownIcon
          justifySelf="center"
          boxSize='25px'
          color="#B594FF"
          transform={shown ? "rotate(180deg)" : "none"}
        />
      </Flex>
      {shown && <Text fontSize="12px" fontFamily="Sora" maxW="90%" lineHeight="160%" color="#CEE5F2">{value.answer}</Text>}
    </Flex>
  );
};

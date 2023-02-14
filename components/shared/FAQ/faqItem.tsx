import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IconAssets } from "../../../config";
import { questionItem } from "./faq";

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
      cursor="pointer"
      position="relative"
    >
      <Flex fontWeight="bold" justifyContent="space-between" align="center">
        <Box maxW="80%">{value.question}</Box>
		<Image justifySelf="center" transform={shown ? "rotate(180deg)" : "none"} src={IconAssets.chevronVertical}/>
      </Flex>
      {shown && <Text color="#C4C4C4">{value.answer}</Text>}
    </Flex>
  );
};

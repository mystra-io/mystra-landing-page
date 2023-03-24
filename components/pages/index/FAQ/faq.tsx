import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { FAQItem } from "../../../shared/FAQ/faqItem";
import { LabelText } from "../../../shared/typography/labelText";

export interface questionItem {
  question: string;
  answer: string;
}

interface IFAQ {
  questions: questionItem[];
}

export const FAQ: FC<IFAQ> = ({ questions }) => {
  return (
    <Box id="faq" margin="auto">
      <CenterContainer>
        <Flex
          pt={{base: "50px", md: "150px"}}
          flexDir="column"
          gap="25px"
          align="center"
          justify="center"
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.1)"
        >
          <LabelText>FAQ</LabelText>
          <Text fontWeight="500" textAlign="center" fontSize={{base: "28px", md: "40px"}} fontFamily="Sora">
            Frequently Asked Questions
          </Text>
        </Flex>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="24px"
          p={{base: "40px 0px 50px", md: "150px 0px 80px"}}
        >
          <Flex flexDir="column" gap="inherit">
            {questions
              .slice(0, Math.floor(questions.length / 2))
              .map((questionItem) => {
                return (
                  <FAQItem value={questionItem} key={questionItem.question} />
                );
              })}
          </Flex>
          <Flex flexDir="column" gap="inherit">
            {questions
              .slice(Math.floor(questions.length / 2), questions.length)
              .map((questionItem) => {
                return (
                  <FAQItem value={questionItem} key={questionItem.question} />
                );
              })}
          </Flex>
        </Grid>
      </CenterContainer>
    </Box>
  );
};

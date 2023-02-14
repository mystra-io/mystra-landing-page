import { Flex, Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import { CenterContainer } from "../containers/centerContainer";
import { SectionHeading } from "../sectionHeading";
import { FAQItem } from "./faqItem";

export interface questionItem {
  question: string;
  answer: string;
}

interface IFAQ {
  questions: questionItem[];
}

export const FAQ: FC<IFAQ> = ({ questions }) => {
  return (
    <CenterContainer>
      <SectionHeading
        label="FAQ"
        content="Frequently Asked Questions"
        centered
      />
      <Grid templateColumns={{base: "1fr", md: "1fr 1fr"}} gap="24px" mb={{base: "54px", md: "170px"}}>
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
  );
};

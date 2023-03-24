import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";
import { SectionHeader } from "../../texts/sectionHeader";
import { SectionText } from "../../texts/sectionText";
import { Welcome } from "../../texts/welcome";
import { CustomLink } from "../../shared/typography/CustomLink";
import { Step } from "./step";

export interface StepItem {
  content: string;
  heading: string;
  index: number;
  label: string;
  buttonText: string;
  image: string;
  soon: boolean;
  reversed: boolean;
  href: string
  background: React.ReactNode
}

interface ISteps {
  stepList: StepItem[];
}

export const StepsCreator: FC<ISteps> = ({ stepList }) => {
  return (
    <Grid padding="100px 0px 100px">
      <Box pos="relative">
        <Box
          bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
          zIndex="-20"
          pos="absolute"
          right="0"
          w="400px"
          h="400px"
          top="0px"
          transform="rotate(220deg) translateX(-50%)"
          filter="blur(180px)"
        />
      </Box>
      <Flex margin="0 auto" gridGap="40px" flexDir="column" align="center">
        <Box color="red">
          <Welcome>Become a casperarmy member</Welcome>
        </Box>
        <SectionHeader>Entry steps for creator</SectionHeader>
        <Box textAlign="center">
          <SectionText>See how process looks for <CustomLink href="/">investors</CustomLink></SectionText>
        </Box>
      </Flex>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gridGap="24px"
        mt={{ base: "20px", md: "120px" }}
      >
        <GridItem
          gridColumnStart={{ base: 1, md: "2" }}
          colSpan={{ base: 12, md: 10 }}
          gridGap="40px"
          rowGap={{ base: "80px", md: "100px" }}
          display="grid"
        >
          {stepList.map((step) => {
            return (
              <Step
                content={step.content}
                heading={step.heading}
                index={step.index}
                label={step.label}
                buttonText={step.buttonText}
                image={step.image}
                reversed={step.reversed}
                soon={step.soon}
                key={step.index}
                href={step.href}
                background={step.background}

              />
            );
          })}
        </GridItem>
      </Grid>
      <Box pos="relative">
        <Box
          bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
          zIndex="-20"
          pos="absolute"
          left="0"
          w="400px"
          h="400px"
          bottom="0px"
          transform="rotate(220deg) translateY(-50%)"
          filter="blur(180px)"
        />
      </Box>
    </Grid>
  );
};

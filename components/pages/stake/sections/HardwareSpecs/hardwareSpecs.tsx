import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { CustomHeader } from "../../../../shared/typography/CustomHeader";
import { CustomLink } from "../../../../shared/typography/CustomLink";
import { Paragraph } from "../../../../shared/typography/Paragraph";

const specList = [
  "AMD Ryzen ™ 9 3900",
  "12 Core",
  "Matisse (Zen2)",
  "Simultaneous Multithreading",
  "Virtualization (AMD-V)",
  "128 GB DDR4 ECC",
  "2 x 1.92 TB NVMe",
  "Bandwidth: 1 Gbit/s",
];

const HardwareItem = ({ value }: any) => (
  <Box
    bg="white"
    color="black"
    fontWeight="bold"
    padding="7px 20px"
    fontSize="18px"
  >
    {value}
  </Box>
);

export const HardwareSpecs = () => {
  return (
    <Grid gridGap="24px">
      <CustomHeader smaller>Server Details</CustomHeader>
      <Paragraph>
        Our validator is hosted on a dedicated server.
      </Paragraph>
      <Grid gap="19px">
        <Paragraph>
          <Text fontWeight="bold" color="white">
            Hardware Specifications:
          </Text>
        </Paragraph>
        <Flex alignItems="flex-start" flexWrap="wrap" gap="19px">
          {specList.map((spec) => {
            return <HardwareItem value={spec} key={spec} />;
          })}
        </Flex>
      </Grid>
      <Paragraph>
        You can also find all current information directly on our{" "}
        <CustomLink
          colored
          href="https://docs.casperarmy.org/docs/validator/7.1-Validator-features"
        >
          validator page.
        </CustomLink>
      </Paragraph>
    </Grid>
  );
};

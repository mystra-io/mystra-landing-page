import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { PartnerAssets, PartnerUrls } from "../../../../config";
import Link from "next/link";
import { Image } from "@chakra-ui/image";
import Marquee from "react-fast-marquee";

const partnersList = [
  {
    key: "casper blockchain",
    image: PartnerAssets.casperblockchain,
    url: PartnerUrls.casperblockchain,
  },
  {
    key: "awesome casper",
    image: PartnerAssets.awesomecasper,
    url: PartnerUrls.awesomecasper,
  },
  {
    key: "dotoracle",
    image: PartnerAssets.dotOracle,
    url: PartnerUrls.dotOracle,
  },

  {
    key: "tubbly",
    image: PartnerAssets.tubbly,
    url: PartnerUrls.tubbly,
  },

  {
    key: "cspr pl",
    image: PartnerAssets.csprPl,
    url: PartnerUrls.csprPl,
  },
  {
    key: "nftCalendar",
    image: PartnerAssets.nftCalendar,
    url: PartnerUrls.nftCalendar,
  }
];

export const Partners = () => {
  return (
    <Flex
      gridGap={{ base: "40px", md: "96px" }}
      align="center"
      overflowX="scroll"
      padding="20px 0px"
      justify="center"
      w="100vw"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "&::-webkit-scrollbar-track": {
          display: "none",
        },
        "&::-webkit-scrollbar-thumb": {
          display: "none",
        },
      }}
    >
      <Marquee gradient={false}>
        {partnersList.concat(partnersList).map((partner, index) => {
          return (
            <Box  key={partner.key + index}>
              <Link href={partner.url}>
                <Image margin={{base: "0px 30px", md: "0px 50px", lg: "0px 50px"}} cursor="pointer" src={partner.image} />
              </Link>
            </Box>
          );
        })}
        
      </Marquee>
    </Flex>
  );
};

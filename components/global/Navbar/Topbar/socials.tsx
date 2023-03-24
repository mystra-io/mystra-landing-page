import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/react";

import React from "react";
import { SocialAssets, SocialMediaUrls } from "../../../../config";

const topbarSocials = [
  {
    key: "discord",
    image: SocialAssets.discord,
    url: SocialMediaUrls.discord,
  },
  {
    key: "telegram",
    image: SocialAssets.telegram,
    url: SocialMediaUrls.telegram,
  },
  {
    key: "twitter",
    image: SocialAssets.twitter,
    url: SocialMediaUrls.twitter,
  },
  {
    key: "medium",
    image: SocialAssets.medium,
    url: SocialMediaUrls.medium,
  },
];

export const Socials = () => {
  return (
    <Flex gridGap="24px" filter="brightness(6)">
      {topbarSocials.map((el) => {
        return (
          <Link target="_blank" _hover={{opacity: 0.6}} key={el.key} href={el.url}>
            <Image h="18px" src={el.image} />
          </Link>
        );
      })}
    </Flex>
  );
};

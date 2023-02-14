import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useState } from "react";
import { IconAssets } from "../../../../../config";
import { GlassContainer } from "../glassContainer";
import { FeatureLabel } from "./featureBlocks";

interface IBlock {
  label: string;
  heading: string;
  href: string;
  image?: string;
  bigImage?: boolean;
}

export const Block: FC<IBlock> = ({
  label,
  heading,
  href,
  image,
  bigImage = false,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Link href={href}>
      <GlassContainer onClick={() => {}}>
        <FeatureLabel>{label}</FeatureLabel>
        {bigImage ? image && <Image w="200px" src={image} /> : <Box></Box>}
        {!bigImage && image && (
          <Image
            position="absolute"
            w="65px"
            top="40px"
            right="40px"
            src={image}
          />
        )}

        <Heading>
          <Box
            fontSize={bigImage ? { base: "100%", md: "140%" } : "100%"}
            mt={bigImage ? "40px" : "0px"}
          >
            {heading}
          </Box>
        </Heading>

        <Flex justify="space-between">
          <Box fontSize="15px" textDecoration="underline">
            Read more
          </Box>{" "}
        </Flex>
      </GlassContainer>
    </Link>
  );
};

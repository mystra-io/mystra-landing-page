import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import Link from "next/link";

import { IconAssets } from "../../../config";
import { HeaderButton } from "../../shared/Header/headerButton";

export const IndexHeading = () => (
  <>
    First Venture Capital with
    <br /> DAO on the{" "}
    <span
      style={{
        fontSize: "100%",
        color: "#FF0202",
      }}
    >
      Casper
    </span>{" "}
    Network
  </>
);

export const IndexHeadingAddon = () => (
  <Grid
    templateColumns={{ base: "auto", md: "1fr 1fr" }}
    templateRows={{ base: "1fr 1fr", md: "auto" }}
    gridGap={{ base: "8px", md: "22px" }}
    w={{ base: "80vw", md: "auto" }}
  >
    <Link href="/tickets">
      <Grid>
        <HeaderButton>
          Mint a NFT Ticket
          <Image src={IconAssets.arrowRight} />
        </HeaderButton>
      </Grid>
    </Link>
    <Link href="https://docs.casperarmy.org/docs/MEMBERSHIP/4.2-For-investors">
      <Grid>
        <HeaderButton singleItem ghost>
          Become a member
        </HeaderButton>
      </Grid>
    </Link>
  </Grid>
);

export const StakeHeadingAddon = () => {
  return (
    <Grid
      templateColumns={{ base: "auto", md: "1fr 1fr" }}
      templateRows={{ base: "1fr 1fr", md: "auto" }}
      gridGap={{ base: "8px", md: "22px" }}
      w={{ base: "80vw", md: "auto" }}
    >
      <Link href="https://docs.casperarmy.org/docs/validator/7.2-How-to-stake">
        <Grid>
          <HeaderButton>
            How TO START STAKING
            <Image src={IconAssets.arrowRight} />
          </HeaderButton>
        </Grid>
      </Link>
      <Link href="https://docs.casperarmy.org/docs/validator/7.3-Benefits-of-staking">
        <Grid>
          <HeaderButton singleItem ghost>
            BENEFITS
          </HeaderButton>
        </Grid>
      </Link>
    </Grid>
  );
};

export const CreatorHeadingAddon = () => (
  <Grid
    templateColumns={{ base: "auto", md: "1fr 1fr" }}
    templateRows={{ base: "1fr 1fr", md: "auto" }}
    gridGap={{ base: "8px", md: "22px" }}
    w={{ base: "80vw", md: "auto" }}
  >
    <Link href="/tickets">
      <Grid>
        <HeaderButton>
          Mint a NFT Ticket
          <Image src={IconAssets.arrowRight} />
        </HeaderButton>
      </Grid>
    </Link>
    <Link href="https://docs.mystra.io/docs/MEMBERSHIP/4.1-For-creators">
      <Grid>
        <HeaderButton singleItem ghost>
          Become a creator
        </HeaderButton>
      </Grid>
    </Link>
  </Grid>
);

import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BrandAssets } from "../../../config";
import { CenterContainer } from "../../shared/containers/centerContainer";
import { Socials } from "../Navbar/Topbar/socials";
import { SmallHeader } from "../../texts/smallHeader";
import { ChatButton } from "./chatButton";
import { CustomLink } from "../../shared/typography/CustomLink";

export const Footer = () => {
  return (
    <Grid mt={{ base: "20px", md: "100px" }} fontFamily="Roboto, sans-serif">
      <CenterContainer>
        <Flex
          display={{ base: "flex", md: "none" }}
          padding="20px"
          mb="40px"
          justify="space-between"
        >
          <Image src={BrandAssets.logo} w="100px" />
          <Box
            border="1px solid #FF0202"
            fontSize="14px"
            padding="18px 30px"
            fontWeight="bold"
            borderRadius="5px"
          >
            <Link href="#newsletter">
            Newsletter
            </Link>
          
          </Box>
        </Flex>
        <Grid
          templateColumns={{ base: "1fr", md: "1.5fr 1fr 1fr 1fr" }}
          gridGap={{ base: "50px", md: "50px", lg: "30px" }}
          fontSize="16px"
          pb="40px"
          alignItems={{ base: "center", md: "initial" }}
        >
          <Flex
            flexDir="column"
            gridGap="10px"
            display={{ base: "none", md: "flex" }}
          >
            <SmallHeader>Newsletter</SmallHeader>
            <Text>
              Sign up and stay up to date on Incubated projects, DAO, VC
              investments and news
            </Text>
            <Link
              padding="12px 0px"
              fontWeight="bold"
              color="white"
              bg="#FF0202"
              borderRadius="4px"
              maxW="200px"
              textTransform="uppercase"
              href="#newsletter" textAlign="center"
            >
              Sign up
            </Link>
          </Flex>
          <Flex flexDir="column" gridGap="10px" alignItems="inherit">
            <SmallHeader>Support</SmallHeader>
            <CustomLink
              withoutUnderline
              href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.12-FAQ"
            >
              FAQ
            </CustomLink>
            <CustomLink withoutUnderline href="https://docs.casperarmy.org">
              Documentation
            </CustomLink>
            <CustomLink withoutUnderline href="https://github.com/casper-army">
              GitHub
            </CustomLink>
          </Flex>
          <Flex flexDir="column" gridGap="10px" alignItems="inherit">
            <SmallHeader>Headquarters</SmallHeader>
            <CustomLink
              withoutUnderline
              href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.1-Description"
            >
              About CasperArmy
            </CustomLink>
            <CustomLink
              withoutUnderline
              href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.4-team"
            >
              CasperArmy Team
            </CustomLink>
            <CustomLink
              withoutUnderline
              href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.5-partners"
            >
              Partners
            </CustomLink>
          </Flex>
          <Flex
            flexDir="column"
            gridGap="10px"
            display={{ base: "none", md: "flex" }}
          >
            <SmallHeader>Contact headquarters</SmallHeader>
            <Text>If you have any questions, please write to us</Text>
            <></>
            <ChatButton />
          </Flex>
        </Grid>
      </CenterContainer>
      <Box bg="rgba(255,255,255,0.1)" h="1px"></Box>
      <CenterContainer>
        <Grid
          templateRows="1fr 1fr"
          padding="27px 0px"
          gap={{ base: "38px", md: "10px" }}
        >
          <Flex
            justify="space-between"
            gap={{ base: "38px", md: "initial" }}
            flexDir={{ base: "column-reverse", md: "initial" }}
            align="center"
            mt={{ base: "16px", md: "initial" }}
          >
            <Flex fontSize="16px" fontWeight="500" gridGap="40px">
              <CustomLink
                withoutUnderline
                href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.6-Privacy-policy"
              >
                Privacy Policy
              </CustomLink>
              <CustomLink
                withoutUnderline
                href="https://docs.casperarmy.org/docs/what-is-casperarmy/1.7-Terms-of-use"
              >
                Terms of Use
              </CustomLink>
            </Flex>
            <Socials />
          </Flex>
          <Box
            fontSize="17px"
            color="#373637"
            padding={{ base: "0 10vw", md: "0px" }}
            textAlign={{ base: "center", md: "initial" }}
          >
            Copyright 2022 © by CasperArmy. All Rights Reserved.{" "}
          </Box>
        </Grid>
      </CenterContainer>
    </Grid>
  );
};

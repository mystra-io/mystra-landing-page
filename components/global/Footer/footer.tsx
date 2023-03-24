import { Box, Button, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
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
          justify={{base: "center", md: "space-between"}}
          gridGap={{ base: "50px", md: "50px", lg: "30px" }}
          fontSize="16px"
          pb="40px"
          
          alignItems={{ base: "center", md: "initial" }}
        >
          <Flex
            flexDir="column"
            maxW="350px"
            display={{ base: "none", md: "flex" }}
          >
            <SmallHeader>Newsletter</SmallHeader>
            <Text mt="34px" fontSize="14px" lineHeight="160%" fontWeight="400">
              Sign up and stay up to date on Incubated projects, DAO, VC
              investments and news
            </Text>
            <Box color="#ff0000dd" fontFamily="Sora" fontWeight="800" letterSpacing="0.05em" mt="10px">NEWSLETTER COMING SOON</Box>
          </Flex>
          <Flex  justifyItems={{base: "center", md: "initial"}}>
            <Flex  display={{base: 'none', md: 'flex'}} flexDir="column" alignItems="center" w={{base: "0px", md: "200px"}}>
              <SmallHeader>Support</SmallHeader>
              <Box h="34px" />
              <Flex flexDir="column" gap="9px">
                <CustomLink
                  withoutUnderline
                  href="https://docs.mystra.io/docs/PRODUCTS%20AND%20SERVICES/2.12-FAQ"
                >
                  FAQ
                </CustomLink>
                <CustomLink withoutUnderline href="https://docs.mystra.io">
                  Documentation
                </CustomLink>
                <CustomLink
                  withoutUnderline
                  href="https://github.com/mystra-io"
                >
                  GitHub
                </CustomLink>
              </Flex>
            </Flex>
            <Flex flexDir="column"  alignItems={{base: "center", md: "inherit"}}>
              <Grid templateColumns={{base:"1fr", md: "auto 1fr"}} gap="48px" alignItems="center">
                <SmallHeader>Mystra</SmallHeader>
                <Box
                display={{base: "none", md: "block"}}
                  h="1px"
                  bg="linear-gradient(90.56deg, #40FCCF 7.22%, #9363FF 31.71%)"
                />
              </Grid>
              <Flex mt="34px"  flexDir={{base: "column", md: "initial"}}>
                <Flex flexDir="column" align={{base: "center", md: "initial"}} gap="9px" w="200px">
                  <CustomLink
                    withoutUnderline
                    href="https://docs.mystra.io/docs/what-is-mystra/1.1-Description"
                  >
                    About Mystra
                  </CustomLink>
                  <CustomLink
                    withoutUnderline
                    href="https://docs.mystra.io/docs/what-is-mystra/1.4-team"
                  >
                    About Team
                  </CustomLink>
                  <CustomLink
                    withoutUnderline
                    href="https://docs.mystra.io/docs/what-is-mystra/1.5-partners"
                  >
                    Partners
                  </CustomLink>
                </Flex>
                <Flex flexDir="column" gap="9px" mt={{base: '5px', md: 'initial'}} w="200px" align={{base: "center", md: "initial"}}>
                  <CustomLink
                    withoutUnderline
                    href="https://mystra.io/pitchdeck.pdf
                    "
                  >
                    Pitchdeck
                  </CustomLink>
                  <CustomLink
                    withoutUnderline
                    href="https://mystra.io/#"
                  >
                    Press media
                  </CustomLink>
                  <CustomLink
                    withoutUnderline
                    href="https://mystra.io/#"
                  >
                    They write about us
                  </CustomLink>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
            <Flex
              fontSize="14px"
              fontWeight="500"
              gridGap={{base: '20px', md: "42px"}}
              fontFamily="Sora"
            >
              <CustomLink
                withoutUnderline
                href="https://docs.mystra.io/docs/what-is-mystra/1.6-Privacy-policy"
              >
                Privacy Policy
              </CustomLink>
              <CustomLink
                withoutUnderline
                href="https://docs.mystra.io/docs/what-is-mystra/1.7-Terms-of-use"
              >
                Terms of Use
              </CustomLink>
            </Flex>
            <Socials />
          </Flex>
          <Box
            fontSize="16px"
            color="rgba(255,255,255,0.4)"
            fontFamily="Roboto"
            fontWeight="400"
            padding={{ base: "0 10vw", md: "0px" }}
            textAlign={{ base: "center", md: "initial" }}
          >
            Copyright 2022 © by Mystra. All Rights Reserved.{" "}
          </Box>
        </Grid>
      </CenterContainer>
    </Grid>
  );
};

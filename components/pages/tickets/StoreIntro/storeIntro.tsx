import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { SectionHeading } from "../../../shared/sectionHeading";
import { CustomHeader } from "../../../shared/typography/CustomHeader";
import { Paragraph } from "../../../shared/typography/Paragraph";
import { RoundItem } from "./roundItem";

export const StoreIntro = () => {
  return (
    <CenterContainer>
      <SectionHeading
        centered
        content={"One ticket gives you access to the entire platform"}
        label="Ticket sale rounds"
      />
      <Flex
        justify={{ base: "initial", xl: "center" }}
        gap="20px"
        mb="60px"
        maxW="100vw"
        overflowX="auto"
        padding="0px 20px"
        pb="40px"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* <RoundItem index={1} price={50} percent={75} max={2000} />
        <RoundItem index={2} price={125} percent={65} max={1000} />
        <RoundItem index={3} price={200} percent={43} max={1000} />
        <RoundItem index={4} price={250} percent={29} max={1000} />
        <RoundItem index={5} price={300} percent={15} max={1000} />
        <RoundItem index={6} price={350} percent={75} max={0} /> */}
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gridGap={{ base: "40px", md: "120px" }}
        mb="100px"
        padding={{ base: "20px", lg: "0px" }}
      >
        <Flex flexDir="column" gap="35px">
          <Box
            letterSpacing="0.8em"
            fontFamily="CHANEY"
            fontSize="12px"
            color="#888888"
          >
            SALES PROCESS
          </Box>
          <CustomHeader>Simple ticket purchasing interface</CustomHeader>
          <Paragraph>
            Once the countdown to the start of the ticket sale has ended, a
            user-friendly interface will appear on the website, select the
            number of tickets, payment network and click on the buy button.
          </Paragraph>
          <Paragraph>
            To meet the needs of the users, in addition to paying with Casper
            (CSPR) the sale will also be available on the ERC20 network (USDC,
             USDT), BSC BEP20 (BUSD, USDC, USDT) and Polygon (USDC, USDT).
          </Paragraph>
          <Box fontWeight="bold">
            Sign up for our newsletter so you dont miss the first round of
            ticket sales!
          </Box>
        </Flex>
        <Image
          src="https://cdn.discordapp.com/attachments/939935121019117609/990743165445222470/Group_882.png"
          maxWidth="80vw"
        />
      </Grid>
    </CenterContainer>
  );
};

import {
  Box,
  Button,
  Image,
  Flex,
  Grid,
  Input,
  Link,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { SectionHeading } from "../../../shared/sectionHeading";
import { RoundItem } from "../StoreIntro/roundItem";
import { BuyWindow } from "./BuyWindow/buyWindow";
import { IconAssets } from "../../../../config";
import axios from "axios";

export const Store = () => {
  const [currentRound, setCurrentRound] = useState<number>(2);
  const [currentDiscount, setCurrentDiscount] = useState<number>(75);

  const [totalSold, setTotalSold] = useState<number>(0);
  const [cryptoPrice, setCryptoPrice] = useState<number>(50);

  const [amountGot, setAmountGot] = useState<number>();

  useEffect(() => {
    if (totalSold >= 6000) {
      setCryptoPrice(350);
      setCurrentRound(6);
      setCurrentDiscount(0);
    } else if (totalSold >= 5000) {
      setCryptoPrice(300);
      setCurrentRound(5);
      setCurrentDiscount(15);
    } else if (totalSold >= 4000) {
      setCryptoPrice(250);
      setCurrentRound(4);
      setCurrentDiscount(29);
    } else if (totalSold >= 3000) {
      setCryptoPrice(200);
      setCurrentRound(3);
      setCurrentDiscount(43);
    } else if (totalSold >= 2000) {
      setCryptoPrice(125);
      setCurrentRound(2);
      setCurrentDiscount(65);
    } else if (totalSold >= 0) {
      setCryptoPrice(50);
      setCurrentRound(1);
      setCurrentDiscount(75);
    }
  }, [totalSold]);

  useEffect(() => {
    axios
      .get("https://casperarmy.org:4000/getTickets")
      .then((item) => {
        console.log("items", item.data.rows[0].sum);
        const count = item.data.rows[0].sum;

        setTotalSold(count);
      })
      .catch((e: any) => {
        console.log(e);

        setTotalSold(0);
      });
  }, []);

  return (
    <Box margin="0 auto" id="buy_ticket">
      <CenterContainer>
        <Flex
          flexDir="column"
          bg="
rgba(18, 18, 18, 0.7)
"
          borderRadius="8px"
          border="1px solid"
          borderColor={"rgba(40,40,40,1)"}
          padding={{base :"33px 27px 49px 27px", lg: "55px 66px 66px 66px"}}
        >
          <Box fontSize="18px" fontWeight="700">
            Mint NFT Ticket - ROUND {currentRound}
          </Box>
          <Box fontSize="14px" mt="16px">
            Your minted NFTs on Casper appear on your wallet within{" "}
            <Box color="#04D7B1" display="inline">
              24 hours
            </Box>
          </Box>
          <Flex flexDir={{base: "column", lg: "initial"}} justify="space-between" mt="55px">
            <RoundItem
              index={1}
              price={50}
              percent={75}
              max={2000}
              currentSold={totalSold}
              previousMax={0}
            />
            <RoundItem
              index={2}
              price={80}
              percent={65}
              max={4500}
              currentSold={totalSold}
              previousMax={2000}
            />
            <RoundItem
              index={3}
              price={130}
              percent={43}
              max={8500}
              currentSold={totalSold}
              previousMax={6500}
            />
            <RoundItem
              index={4}
              price={230}
              percent={29}
              max={12500}
              currentSold={totalSold}
              previousMax={1000}
            />
            
          </Flex>
          <BuyWindow
            currentRound={currentRound}
            currentDiscount={currentDiscount}
            cryptoPrice={cryptoPrice}
            setAmountGot={setAmountGot}
          />
        </Flex>
      </CenterContainer>
    </Box>
    //     <CenterContainer>
    //       <SectionHeading
    //         label="The ticket is your access"
    //         content="One ticket gives you access
    // 		to the entire platform"
    //         centered
    //       />
    //       <Grid
    //         templateColumns={{ base: "auto", xl: "auto 590px" }}
    //         gap={{ base: "20px", xl: "60px" }}
    //         alignItems="flex-start"
    //         mb="50px"
    //       >
    //         <Flex align="flex-start" flexDir="column" position="relative"
    // >
    //           <Box letterSpacing="0.17em" fontSize="20px" textTransform="uppercase">
    //             Tickets round
    //           </Box>
    //           <Flex

    //             justify={{ base: "initial", xl: "center" }}
    //             display={{ base: "flex", xl: "grid" }}
    //             gridTemplateColumns="1fr 1fr 1fr"
    //             gridTemplateRows="1fr 1fr"
    //             gap="20px"
    //             mb={{ base: "10px", md: "30px" }}
    //             maxW="100vw"
    //             overflowX="auto"
    //             padding="26px 0px 10px 0px"
    //             pb="0px"
    //             sx={{
    //               "::-webkit-scrollbar": {
    //                 display: "none",
    //               },
    //             }}
    //           >
    //             <RoundItem
    //               index={1}
    //               price={50}
    //               percent={75}
    //               max={2000}
    //               currentSold={totalSold}
    //               previousMax={0}
    //             />
    //             <RoundItem
    //               index={2}
    //               price={125}
    //               percent={65}
    //               max={1000}
    //               currentSold={totalSold}
    //               previousMax={2000}
    //             />
    //             <RoundItem
    //               index={3}
    //               price={200}
    //               percent={43}
    //               max={1000}
    //               currentSold={totalSold}
    //               previousMax={3000}
    //             />
    //             <RoundItem
    //               index={4}
    //               price={250}
    //               percent={29}
    //               max={1000}
    //               currentSold={totalSold}
    //               previousMax={4000}
    //             />
    //             <RoundItem
    //               index={5}
    //               price={300}
    //               percent={15}
    //               max={1000}
    //               currentSold={totalSold}
    //               previousMax={5000}
    //             />
    //             <RoundItem
    //               index={6}
    //               price={350}
    //               percent={75}
    //               max={0}
    //               currentSold={totalSold}
    //               previousMax={6000}
    //             />
    //           </Flex>
    //           <Flex display="none" w="100%" bg="#FF0202" borderRadius="7px" fontSize="14px" padding="9px" gap="10px" justify="center">
    //             <Image src={IconAssets.alertTriangle}/>
    //             You have got {amountGot}x tickets on this network.
    //           </Flex>
    //         </Flex>
    //
    //       </Grid>
    //     </CenterContainer>
  );
};

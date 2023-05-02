import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React, { useState } from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { Image } from "@chakra-ui/image";
import { Partners } from "../components/pages/index/Partners/partners";
import { Countdown } from "../components/pages/index/Countdown/countdown";
import { EffectAssets, ElementAssets } from "../config";
import { NFT } from "../components/shared/NFT/nft";
import { Features } from "../components/pages/index/Features/features";
import { Footer } from "../components/global/Footer/footer";
import { Steps } from "../components/shared/Steps/steps";

import {
  IndexHeading,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Layout } from "../components/layout/layout";
import { keyframes } from "@emotion/react";
import { usePrefersReducedMotion } from "@chakra-ui/react";
import { PageHeader } from "../components/pages/index/PageHeader/pageHeader";
import { FAQ } from "../components/pages/index/FAQ/faq";
import { Team } from "../components/pages/index/Team/team";
import { Store } from "../components/pages/tickets/Store/store";
import { TicketDescription } from "../components/pages/index/TicketDescription/ticketDescription";
import { AppBanner } from "../components/pages/index/AppBanner/appBanner";
import { Staking } from "../components/pages/index/staking/staking";
import { AboutPlatform } from "../components/pages/index/AboutPlatform/aboutPlatform";
import { InvestorHeader } from "../components/pages/investor/InvestorHeader/investorHeader";
import { InfoWithItems } from "../components/pages/investor/InfoWithItems/infoWithItems";
import { InvestorBuyWindow } from "../components/pages/investor/InvestorBuyWindow/investorBuyWindow";
import { PUBLIC_INVEST_ITEMS } from "../components/pages/investor/InfoWithItems/items";
import { SelectRound } from "../components/pages/investor/SelectRound/selectRound";
import { SaleView } from "../components/pages/investor/SaleView/saleView";
import { RoundsComparison } from "../components/pages/investor/RoundsComparison/roundsComparison";

const float = keyframes`
  0%  { transform:scale(1); opacity: 0.6; }
  50%  { transform:  scale(1.4); opacity: 1;}
  100% { transform:  scale(1); opacity: 0.6; }
`;

const Home: NextPage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationCards = prefersReducedMotion
    ? undefined
    : `${float} infinite 6s ease-out`;

  const [amount, setAmount] = useState<number>(100);

  return (
    <Flex flexDir="column" zIndex="1" position="relative">
      <InvestorHeader />
      <SelectRound />
      <SaleView  amount={amount}/>
      <RoundsComparison />
      <InfoWithItems
        items={PUBLIC_INVEST_ITEMS.additional}
        header={"Additional information"}
      />
      <InfoWithItems
        items={PUBLIC_INVEST_ITEMS.about}
        header={"About MYSTRA Token"}
      />
      <InvestorBuyWindow
        currentDiscount={0}
        currentRound={0}
        cryptoPrice={30}
        setAmountGot={() => {}}
        amount={amount}
        setAmount={setAmount}
      />
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;

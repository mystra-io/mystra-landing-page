import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useMemo } from "react";
import { IconAssets } from "../../../../../config";

export enum WalletTypes {
  METAMASK,
  CASPER_SIGNER,
}

export const LoggedUser = ({
  address,
  wallet,
  handleLogout,
}: {
  address: string | null;
  wallet: WalletTypes;
  handleLogout: () => void;
}) => {
  const walletIcon = {
    [WalletTypes.METAMASK]: IconAssets.metamask,
    [WalletTypes.CASPER_SIGNER]: IconAssets.casper,
  };

  return (
    <Grid
      templateColumns="1fr auto"
      gap="19px"
      position="relative"
      zIndex="10000"
      w={{ base: "200px", lg: "auto" }}
      margin={{ base: "0 auto", lg: "initial" }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="flex-end"
        gridGap="0px"
        zIndex="0"
      >
        <Box fontSize="16px" fontWeight="bold">
          Connected
        </Box>
        <Box fontFamily="Changa" fontSize="12px" letterSpacing="0.2em">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </Box>
      </Flex>

      <Flex
        justify="center"
        align="center"
        boxSize="57px"
        position="relative"
        bg="black"
        borderRadius="50%"
        border="2px dashed white"
      >
        <Flex
          boxSize="27px"
          bg="white"
          align="center"
          justify="center"
          position="absolute"
          borderRadius="50%"
          top="0"
          left="0"
          transform="translate(-25%, -25%)"
        >
          <Image maxH="18px" src={walletIcon[wallet]} />
        </Flex>

        <Flex
          boxSize="20px"
          bg="white"
          align="center"
          justify="center"
          position="absolute"
          borderRadius="50%"
          right="0"
          bottom="0"
          cursor="pointer"
          _hover={{ filter: "invert(1)" }}
          transform="translate(-10%, 25%)"
          onClick={handleLogout}
        >
          <Image maxH="10px" mt="2px" src={IconAssets.logOut} />
        </Flex>

        <Box
          bgColor="black"
          bgImage="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/07/29024114/CasperLabs-Banner-Image.png"
          bgPosition="center"
          bgSize="cover"
          boxSize="44px"
          borderRadius="50%"
        />
      </Flex>
      {/*<Flex
          bg="white"
          pos="absolute"
          padding="15px 20px"
		  bottom="-70px"
		  right="0px"
          zIndex="0"
          borderRadius="4px"
          cursor="pointer"
        >
          <Flex gridGap="20px" color="black" cursor="pointer" zIndex="4">
            Sign out
            <Image src={IconAssets.logOut} />
          </Flex>
	  </Flex>*/}
    </Grid>
  );
};

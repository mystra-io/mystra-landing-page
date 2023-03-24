import { Grid, Image, Text } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";

export const WalletButton = ({
  name,
  icon,
  isSelected,
  action,
}: {
  name: string;
  icon: string;
  isSelected: boolean | null;
  action: () => void;
}) => {
  return (
    <Grid
      gap="28px"
      fontSize="14px"
      color="#747474;"
      cursor="pointer"
      bg={isSelected ? "rgba(21, 21, 21, 0.51)" : "rgba(255, 255, 255, 0.06)"}
      _hover={{ background: "rgba(255, 255, 255, 0.13)" }}
      borderRadius="5px"
      padding="18px 30px"
      gridTemplateColumns="40px 1fr 20px"
      alignItems="center"
    >
      <Image src={icon} />
      <Text>Connect with {name}</Text>
      <Image filter="invert(1)" opacity="0.3" src={IconAssets.logOut} />
    </Grid>
  );
};

import { Grid } from "@chakra-ui/layout";


export const GlassContainer = ({ onClick, children } : {onClick: () => void, children : React.ReactNode}) => {
  return (
    <Grid
      onClick={onClick}
      cursor="pointer"
      background="rgba(255, 255, 255, 0.01)"
      boxShadow="inset 0px 0px 12.3205px rgba(255, 255, 255, 0.05), inset 0px 0.724735px 0.724735px rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(23px)"
      borderRadius="17px"
      textAlign="left"
      position="relative"
      padding={{ base: "40px 30px", md: "55px" }}
      alignItems="flex-start"
      gap="30px"
      justifyContent="flex-start"
      templateRows="auto auto 1fr 10px"
    >
      {children}
    </Grid>
  );
};

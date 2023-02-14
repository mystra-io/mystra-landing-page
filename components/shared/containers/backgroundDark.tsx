import { Grid } from "@chakra-ui/layout";

export const BackgroundDark = ({ children }: any) => {
  return (
    <Grid
      bg="#121212"
	  width="100vw"
      border=" 0px solid rgba(255,255,255,0.1)"
      borderTopWidth="1px"
      borderBottomWidth="1px"
	    justifyContent="center"
      position="relative"
      zIndex="10"
    >
      {children}
    </Grid>
  );
};

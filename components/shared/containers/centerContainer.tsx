import { Box } from "@chakra-ui/layout";

export const CenterContainer = ({ children }: any) => {
  return (
    <Box
      margin={{ base: "0px 32px", md: "0px 5vw", lg: "default" }}
      zIndex="1"
      width={{ base: "calc(100vw-64px)", md: "85vw" }}
      maxWidth="1200px"
      position="relative"
    >
      {children}
    </Box>
  );
};

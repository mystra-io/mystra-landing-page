import { Box } from "@chakra-ui/layout";

export const CenterContainer = ({ children }: any) => {
  return (
    <Box
      bg="transparent"
      margin={{ base: "0px 16px", md: "0px 5vw", lg: 'default' }}
      zIndex="1"
      width={{ base: "calc(100vw-32px)", md: "95vw" }}
      maxWidth="1500px"
      position="relative"
    >
      {children}
    </Box>
  );
};

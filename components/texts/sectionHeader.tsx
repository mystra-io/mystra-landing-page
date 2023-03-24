import { Heading } from "@chakra-ui/layout";

export const SectionHeader = ({ children }: any) => {
  return (
    <Heading fontSize={{ base: "30px", md: "64px" }} textAlign="center">
      {children}
    </Heading>
  );
};

import { Text } from "@chakra-ui/react";

export const LabelText = ({
  children,
  props,
}: {
  children: any;
  props?: any;
}) => (
  <Text fontSize="14px" lineHeight="110%" fontWeight="normal" fontFamily="Syne" letterSpacing="0.5em" color="#04D7B1" {...props}>
    {children}
  </Text>
);

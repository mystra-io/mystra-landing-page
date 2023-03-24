import { Text } from "@chakra-ui/layout"

export const SectionText = ({children} : any) => {
	return <Text lineHeight="180%" fontSize={{base: "16px", md: "22px"}} color="#888888">{children}</Text>
}
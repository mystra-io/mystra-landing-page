import { Box, Text } from "@chakra-ui/react"

export const Paragraph = ({children} : any) => {
	return <Box color="#888888" lineHeight="180%" fontSize={{base: "14px", md: "22px"}}>{children}</Box>
}
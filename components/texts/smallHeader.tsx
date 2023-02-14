import { Text } from "@chakra-ui/react"

export const SmallHeader = ({children} : any) => {
	return <Text fontSize={{base: "16px", md: "14px"}} fontWeight="700" color="#DD392E" textTransform="uppercase">{children}</Text>
}
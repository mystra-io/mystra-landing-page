import { Text } from "@chakra-ui/react"

export const SmallHeader = ({children} : any) => {
	return <Text letterSpacing="0.4em" fontSize={{base: "16px", md: "14px"}} fontWeight="400" color="#04D7B1" textTransform="uppercase">{children}</Text>
}
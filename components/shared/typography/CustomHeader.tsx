import { Heading } from "@chakra-ui/react"
import { FC } from "react"

interface ICustomHeader {
	children: React.ReactNode,
	smaller?: boolean
}

export const CustomHeader :FC<ICustomHeader> = ({children, smaller = false}) => {
	return <Heading fontSize={{base: "25px", md: smaller ? "40px" : "50px"}}>{children}</Heading>
}
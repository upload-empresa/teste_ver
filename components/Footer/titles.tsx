import { Text } from "@chakra-ui/react"

interface FooterProps {
    title: string
}


export function Titles({title}:FooterProps) {
    return (
        <Text
            as="ul"
            color="white"
            fontWeight="500"
            fontSize="24px"
        >
            {title}
        </Text>

    )
}
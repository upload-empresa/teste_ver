import { Text } from "@chakra-ui/react"

interface DescriptionProps {
    text: string
}


export function ExamesDescription({text}:DescriptionProps) {
    return (
        <Text
            as="p"
            fontSize="20px"
            w="80%"
        >
            {text}
        </Text>

    )
}
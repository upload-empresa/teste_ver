import { Text } from "@chakra-ui/react"

interface DescriptionProps {
    text: string
}

export function Description({text}:DescriptionProps) {
    return (
        <Text
            as="li"
            fontSize="20px"
            mt="5%"
            ml="6%"
        >
            {text}
        </Text>

    )
}
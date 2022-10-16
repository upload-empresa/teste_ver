import { Text } from "@chakra-ui/react"

interface TitleTextProps {
    titulo: string
}

export function TitleText({titulo}: TitleTextProps) {
    return (
        <Text
            as="h1"
            fontWeight="600"
            fontSize="48px"
            color="white"
            position="absolute"
            top="75%"
            left="2%"
        >
            {titulo}
        </Text>

    )
}
import { Text } from "@chakra-ui/react"

interface DescriptionProps {
    text: string
}


export function Phone({text}:DescriptionProps) {
    return (
        <Text
            as="p"
            fontSize="24px"
            fontWeight="semibold"
            color="#3FC1FD"
        >
            {text}
        </Text>

    )
}
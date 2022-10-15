import { Text } from "@chakra-ui/react"

interface UnidadesContatoProps {
    information: string
}


export function UnidadesContato({information}:UnidadesContatoProps) {
    return (
        <Text
            as="p"
            fontSize={{md:"16px", lg:"20px", xl:"20px"}}
            fontWeight="500"
            marginInlineStart="0"
        >
            {information}
        </Text>

    )
}
import { Stack, Text } from "@chakra-ui/react"

interface ConveniosProps {
    url: string
    alternativetext: string
    name: string
    tam?: any
}

export function Convenios({ alternativetext, url, name, tam }: ConveniosProps) {
    return (
        <Stack 
            w="120px" 
            h={{base:"auto", lg:"120px", xl:"120px"}} 
            borderRadius="full"
            align="center"
            width={tam}
        >
            <img src={url} alt={alternativetext} />
            <Text
                as="p"
                fontSize="20px"
                fontWeight="medium"
                textAlign="center"
            >
                {name}
            </Text>
        </Stack>
    )
}
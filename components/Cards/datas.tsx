import { HStack, Stack, Heading, Text } from "@chakra-ui/react"

interface DatasProps {
    title: string
    text: string
}

export function Datas({title, text}:DatasProps) {
    return (
        <HStack
            w={{base:"100%", lg:"32%", xl:"32%"}}
            align="stretch"
        >
            <Stack
                spacing={6}
                align="center"
            >
                <Heading
                    as="h2"
                    fontSize="48px"
                    fontWeight="medium"
                >
                    {title}
                </Heading>
                <Text
                    as="p"
                    fontSize="20px"
                >
                    {text}
                </Text>
            </Stack>
        </HStack>

    )
}
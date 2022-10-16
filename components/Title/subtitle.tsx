import { Text } from "@chakra-ui/react"

interface SubTitleProps {
    titleinformation: string
    tam: any
    colortrasnform?: string
}

export function SubTitle({tam, titleinformation, colortrasnform}:SubTitleProps) {
    return (
        <Text
            as="h2"
            fontSize={tam}
            position="relative"
            fontWeight="700"
            color={colortrasnform}
            _before={{
                content: "''",
                position: 'absolute',
                top: '85%',
                left: '0%',
                width: '82px',
                border: '3px solid #3FC1FD'
            }}
        >
            {titleinformation}

        </Text>

    )
}
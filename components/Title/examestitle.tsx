import { Text } from "@chakra-ui/react"

interface ExamesTitleProps {
    title: string
}


export function ExamesTitle({title}:ExamesTitleProps) {
    return (
        <Text
            as="h2"
            color="white"
            fontWeight="500"
            fontSize={{base:"16px", md:"20px", lg:"20px", xl:"20px"}}
            position="absolute"
            bottom="10%"
            left="4%"
            _before={{
                content: "''",
                position: 'absolute',
                top: '85%',
                left: '0%',
                width: '82px',
                border: '3px solid #3FC1FD'
            }}
        >
            {title}
        </Text>

    )
}
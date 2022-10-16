import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

interface FooterProps {
    text: string
    caminho: string
}


export function Texts({ caminho, text }: FooterProps) {
    return (
        <NextLink href={caminho} passHref>
            <Link
                as="a"
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    as="li"
                    color="white"
                    fontWeight="500"
                    fontSize="20px"
                >
                    {text}
                </Text>
            </Link>
        </NextLink>

    )
}
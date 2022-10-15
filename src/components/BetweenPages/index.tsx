import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

interface BetweenPagesProps {
    caminho: string
    name: string
}

export function BetweenPages({caminho, name}:BetweenPagesProps) {
    return (
        <NextLink href={caminho} passHref>
            <Link
                _hover={{
                    textDecoration: 'none'
                }}
            >
                <Text
                    as="span"
                    color="#3FC1FD"
                    fontWeight="bold"
                    fontSize="20px"
                >
                    {name}
                </Text>
            </Link>
        </NextLink>
    )
}
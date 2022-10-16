import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

interface NavigationProps {
    rota: string
    nome: string
}

export function Navigation({rota, nome}:NavigationProps) {
    return (
        <NextLink href={rota} passHref>
            <Link
                as="a"
                transition="0.1s ease"
                transitionDelay="0.05s"
                _hover={{
                    textDecoration: 'none',
                    borderBottom: "3px solid white"
                }}
            >
                <Text
                    color="#fff"
                    fontSize="20px"
                    fontWeight="500"
                    as="p"
                >
                    {nome}
                </Text>
            </Link>
        </NextLink>

    )
}
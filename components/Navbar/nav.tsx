import { HStack, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"


export function Nav() {
    return (
        <Stack
            as="nav"
            px={8}
            py={12}
            align="center"
        >
            <HStack
                as="ul"
                justify="center"
                borderBottomWidth= '2px'
                w="40%"
            >
                <Text
                    as="li"
                    listStyleType="none"
                    px={4}
                    fontSize="20px"
                    borderBottom= "2px solid transparent"
                    _hover={{
                        color: "blue",
                        borderBottom: "2px solid blue"
                    }}
                >
                    <NextLink href="admin-home" passHref>
                        <Link
                            as="a"
                            _hover={{
                                textDecoration: 'none',
                            }}

                        >
                            Home
                        </Link>
                    </NextLink>
                </Text>
                <Text
                    as="li"
                    listStyleType="none"
                    px={4}
                    fontSize="20px"
                    borderBottom= "2px solid transparent"
                    _hover={{
                        color: "blue",
                        borderBottom: "2px solid blue"
                    }}
                >
                    <NextLink href="admin-exames" passHref>
                        <Link
                            as="a"
                            _hover={{
                                textDecoration: 'none',
                            }}

                        >
                            Exames
                        </Link>
                    </NextLink>
                </Text>
                <Text
                    as="li"
                    listStyleType="none"
                    px={4}
                    fontSize="20px"
                    borderBottom= "2px solid transparent"
                    _hover={{
                        color: "blue",
                        borderBottom: "2px solid blue"
                    }}
                >
                    <NextLink href="admin-sobre" passHref>
                        <Link
                            as="a"
                            _hover={{
                                textDecoration: 'none',
                            }}

                        >
                            Sobre
                        </Link>
                    </NextLink>
                </Text>
                <Text
                    as="li"
                    listStyleType="none"
                    px={4}
                    fontSize="20px"
                    borderBottom= "2px solid transparent"
                    _hover={{
                        color: "blue",
                        borderBottom: "2px solid blue"
                    }}
                >
                    <NextLink href="admin-contato" passHref>
                        <Link
                            as="a"
                            _hover={{
                                textDecoration: 'none',
                            }}

                        >
                            Contato
                        </Link>
                    </NextLink>
                </Text>
                <Text
                    as="li"
                    listStyleType="none"
                    px={4}
                    fontSize="20px"
                    borderBottom= "2px solid transparent"
                    _hover={{
                        color: "blue",
                        borderBottom: "2px solid blue"
                    }}
                >
                    <NextLink href="admin-unidades" passHref>
                        <Link
                            as="a"
                            _hover={{
                                textDecoration: 'none',
                            }}

                        >
                            Unidades
                        </Link>
                    </NextLink>
                </Text>
            </HStack>
        </Stack>
    )
}
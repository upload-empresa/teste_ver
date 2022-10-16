import { Flex, HStack, Icon, IconButton, Link, Text, useDisclosure } from "@chakra-ui/react"
import NextLink from 'next/link'

interface CardProps {
    text: string
    icone: any
    link: string
    other?: string
}

export function Card({text, icone, link, other}:CardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            bg="#fff"
            boxShadow="2px 15px 45px rgba(0, 0, 0, 0.1)"
            borderRadius="7px"
            px={6}
            py={5}
            w="368px"
            h="141px"
        >
            <HStack
                border="2px solid #3FC1FD"
                spacing={2}
                px={2}
                py={8}
                w="321px"
                h="101px"
                justify="center"
            >

                <NextLink href={link} onClick={onOpen} passHref>
                    <Link
                        as="a"
                        rel={other}
                        _hover={{
                            textDecoration:"none"
                          }}
                    >
                        <HStack>
                            <IconButton
                                icon={<Icon as={icone} />}
                                fontSize="32"
                                variant="unstyled"
                                aria-label='Conta do usuário'
                                color="#3FC1FD"
                                transition="0.2s ease-in-out"
                                transitionDelay="0.05s"
                                _hover={{
                                    transform: "scale(1.15)"
                                }}
                            >
                            </IconButton>
                            <Text
                                as="h3"
                                fontWeight="600"
                                fontSize="20px"
                                color="#3FC1FD"
                                transition="0.2s ease-in-out"
                                transitionDelay="0.05s"
                                _hover={{
                                    transform: "scale(1.1)"
                                }}
                            >
                                {text}
                            </Text>
                        </HStack>
                    </Link>
                </NextLink>
            </HStack>
        </Flex>
    )
}
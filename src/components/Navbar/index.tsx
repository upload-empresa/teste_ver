import { Flex, HStack, Icon, IconButton } from "@chakra-ui/react"
import { MdAccountCircle } from "react-icons/md"
import { UnidadesContato } from "./unidadescontato"
import { Navigation } from "./navigation"

export function Navbar() {
    return (
        <Flex
            bg="white"
            flexDir="column"
            position="sticky"
            top="0"
            zIndex="10"
            as="header"
        >
            <HStack
                justify="space-between"
                p={{base:"2", md:"4", lg:"4", xl:"4"}}
                w="100%"
                as="section"
                flexDir={{base:"column", md:"row", lg:"row", xl:"row"}}
            >
                <UnidadesContato information="Agendar exames Leopoldina: (32) 3441-5397"/>
                <UnidadesContato information="Agendar exames Cataguases: (32) 3422-5858"/>
            </HStack>
            <HStack
                bg="rgba(66 61 143 / 90%)"
                py={4}
                px={3}
                justify="space-between"
                as="nav"
            >
                <img src="/logo.png" width="11%" alt="Logo da Ver-Imagem" />
                <HStack
                    align="center"
                    justify="center"
                    spacing={30}
                    as="section"
                >
                    <HStack
                        spacing={12}
                        as="article"
                    >
                        <Navigation rota="/" nome="Home"/>
                        <Navigation rota="exames" nome="Exames"/>
                        <Navigation rota="sobre" nome="Sobre"/>
                        <Navigation rota="/#contato" nome="Contato"/>
                        <Navigation rota="/#contato" nome="Unidades" />
                    </HStack>
                    <Flex
                        align="center"
                        justify="center"
                        as="article"
                    >
                        <IconButton
                            icon={<Icon as={MdAccountCircle} />}
                            fontSize="40"
                            variant="unstyled"
                            aria-label='Conta do usuário'
                            color="white"
                            transition="0.2s ease-in-out"
                            transitionDelay="0.1s"
                            _hover={{
                                transform: "scale(1.15)"
                            }}
                        >
                        </IconButton>
                    </Flex>
                </HStack>
            </HStack>
        </Flex>
    )
}
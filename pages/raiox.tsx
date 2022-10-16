import { HStack, Stack, Text } from "@chakra-ui/react"
import { BetweenPages } from "../components/BetweenPages"

import { Footer } from "../components/Footer"
import { Description } from "../components/Informations/description"
import { ExamesDescription } from "../components/Informations/examesdescription"
import { Phone } from "../components/Informations/phone"
import { Navbar } from "../components/Navbar"
import { SubTitle } from "../components/Title/subtitle"

export default function Slug() {
    return (
        <>
            <Navbar />
            <Stack
                as="section"
                px={4}
                paddingTop={8}
                paddingBottom={28}
            >
                <Stack
                    spacing={40}
                >
                    <HStack>
                        <BetweenPages caminho="/" name="Home" />
                        <BetweenPages caminho="#" name="/" />
                        <BetweenPages caminho="exames" name="Exames" />
                        <BetweenPages caminho="#" name="/" />
                        <BetweenPages caminho="exameespecifico" name="Mamografia Digital" />
                    </HStack>
                    <Stack
                        spacing={20}
                    >
                        <Stack
                            align="center"
                        >
                            <SubTitle titleinformation="Radiologia" tam="40px" />
                        </Stack>
                        <HStack
                            px={27}
                            spacing={30}
                            align="start"
                        >
                            <HStack
                                w="50%"
                            >
                                <Stack
                                    spacing={12}
                                >
                                    <ExamesDescription text={"Também chamado de radiografia, os raios X são um exame de imagem não invasivo, que utiliza baixas doses de radiação para identificar rapidamente alguns tipos de alterações na estrutura de ossos e de órgãos."} />
                                    <Stack
                                        spacing={12}
                                    >
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="semibold"
                                        >
                                            Marque seu exame através dos números:
                                        </Text>
                                        <Phone text={"Telefone de Leopoldina: (32) 3441-5397"} />
                                    </Stack>
                                </Stack>
                            </HStack>
                            <HStack
                                w="50%"
                                spacing={6}
                            >
                                <Text
                                    as="ul"
                                    fontSize="24px"

                                >
                                    Recomendações para seguir antes do exame:
                                    <Description text={" Não levar nenhum objeto de metal ou retirá-los antes da Radiografia;"} />
                                    
                                    <Description text={"Também não levar acessórios, joias ou óculos, podendo também retirá-los antes da Radiografia;"} />
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}
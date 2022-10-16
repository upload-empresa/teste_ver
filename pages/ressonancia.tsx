import { HStack, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
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
                            <SubTitle titleinformation="Ressonância Magnética" tam="40px" />
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
                                    <ExamesDescription text={"O exame de Ressonância Magnética é um método de diagnóstico por imagem que não utiliza radiação e permite retratar imagens de alta definição dos órgãos de seu corpo."} />
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
                                    <Description text={"Não utilize jóias e metais. Esse cuidado é importante pois o aparelho cria um campo magnético que pode atrair, desalojar e mover o metal;"} />

                                    <Description text={"Nada de cabelo molhado ou corpo úmido;"} />

                                    <Description text={"Cílios postiços com imãs ou metais na composição‍;"} />
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
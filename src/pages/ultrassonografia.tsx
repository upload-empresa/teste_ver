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
                            <SubTitle titleinformation="Ultrassonografia 3D/4D" tam="40px" />
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
                                    <ExamesDescription text={"É um exame de imagem que tem como objetivo visualizar qualquer órgão ou tecido do corpo em tempo real e auxiliar a prevenção e o diagnóstico de doenças"} />
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
                                        <Phone text={"Telefone de Cataguases: (32) 3422-5858"} />
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
                                    <Description text={"Usar roupas adequadas que facilitarão a exposição da área a ser avaliada;"} />

                                    <Description text={"Trazer exames anteriores pertinentes à região a ser avaliada;"} />
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
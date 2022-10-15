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
                            <SubTitle titleinformation="Doppler Colorido" tam="40px" />
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
                                    <ExamesDescription text={"O doppler é um exame de ultrassonografia que permite ao médico observar o aumento ou diminuição da vascularização, além da velocidade e direção do sangue nos vasos sanguíneos da região examinada. O exame é chamado de Doppler colorido porque o fluxo de sangue será mostrado em tons de vermelho e de azul."} />
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
                                    <Description text={"Em geral, não exige nenhum preparo prévio ou, no máximo, um jejum de algumas horas;"} />
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
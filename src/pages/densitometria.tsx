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
                            <SubTitle titleinformation="Densitometria Óssea" tam="40px" />
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
                                    <ExamesDescription text={"É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose."} />

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
                                    <Description text={"Não ingerir nenhum comprimidos contendo cálcio durante 24 horas antes do exame;"} />

                                    <Description text={"Não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;"} />

                                    <Description text={"Não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;"} />
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
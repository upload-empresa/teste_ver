import { HStack, Stack, Text } from "@chakra-ui/react"
import { Texts } from "./texts"
import { Titles } from "./titles"



export function Footer() {
    return (
        <Stack
            bg="rgba(66 61 143 / 90%)"
            px={39}
            py={{base:"8", md:"8", lg:"10", xl:"10"}}
            align="center"
            spacing={10}
        >
            <HStack
                spacing={{ base: "0", lg: "16", xl: "16" }}
                justify="center"
                align="start"
                flexWrap={{ base: "wrap" }}
            >
                <Stack
                    w={{base:"100%", md: "50%", lg: "auto", xl: "auto" }}
                    align={{base:"center", md:"center", lg:"start", xl:"start"}}
                >
                    <Titles title="Home" />
                    <Texts text="Ver-Imagem" caminho="/#verImagem" />
                    <Texts text="Avalie-nos" caminho="#" />
                    <Texts text="Convênios" caminho="/#convenios" />
                    <Texts text="Nossas Unidades" caminho="/#contato" />
                    <Texts text="Resultado dos Exames" caminho="#" />
                    <Texts text="Agendamento" caminho="#" />
                </Stack>
                <Stack
                    w={{base:"100%", md: "50%", lg: "auto", xl: "auto" }}
                    align={{base:"center", md:"center", lg:"start", xl:"start"}}

                >
                    <Titles title="Exames" />
                    <Texts text="Mamografia Digital" caminho={""} />
                    <Texts text="Doppler Colorido" caminho={""} />
                    <Texts text="Densitometria Óssea" caminho={""} />
                    <Texts text="Ultrassonografia Digital 3D/4D" caminho={""} />
                    <Texts text="Ressonância Magnética" caminho={""} />
                    <Texts text="Raio-X" caminho={""} />
                </Stack>
                <Stack
                    w={{base:"100%", md: "50%", lg: "auto", xl: "auto" }}
                    mt={{md:"5%"}}
                    align={{base:"center", md:"center", lg:"start", xl:"start"}}

                >
                    <Titles title="Contato" />
                    <Texts text="Facebook" caminho={""} />
                    <Texts text="Telefone de Leopoldina" caminho={""} />
                    <Texts text="Telefone de Cataguases" caminho={""} />
                </Stack>
                <Stack
                    w={{base:"100%", md: "50%", lg: "auto", xl: "auto" }}
                    mt={{md:"5%"}}
                    align={{base:"center", md:"center", lg:"start", xl:"start"}}

                >
                    <Titles title="Sobre" />
                    <Texts text="Nossa História" caminho="/sobre/#historia" />
                    <Texts text="Corpo Clínico" caminho="/sobre/#corpoclinico" />
                </Stack>
            </HStack>
            <Text
                as="p"
                color="white"
                fontWeight="500"
                fontSize="20px"
            >
                Termos de uso e Política de Privacidade - Desenvolvido por<Text as="span" color="white" fontWeight="600" fontSize="20px"> Upload  </Text>

            </Text>
        </Stack>
    )
}
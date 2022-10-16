import { Box, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"

import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { TitleText } from "../components/Title"
import { SubTitle } from "../components/Title/subtitle"
import { BetweenPages } from "../components/BetweenPages"
import { Convenios } from "../components/Convenios"
import { Datas } from "../components/Cards/datas"

export default function Sobre() {
    return (
        <>
            <Navbar />
            <Stack
                spacing={8}
                mb="5rem"
            >
                <Stack
                    spacing={14}
                >
                    <Stack
                        position='relative'
                    >
                        <img className={styles.principal} src="/verimagem.jpg" width="100%" alt="Clínica Ver-Imagem" />
                        <Stack
                            as="section"
                            position="absolute"
                            top="-2%"
                            bottom="0"
                            right="0"
                            left="0"
                            w="100%"
                            h="100%"
                            opacity="1"
                            backgroundColor="#0000003b"
                        />
                        <TitleText titulo="Sobre Nós" />
                    </Stack>
                    <HStack
                        px={14}
                        id="historia"
                    >
                        <BetweenPages caminho="/" name="Home" />
                        <BetweenPages caminho="#" name="/" />
                        <BetweenPages caminho="sobre" name="Sobre" />
                    </HStack>
                </Stack>
                <HStack
                    px={{base:"10", lg:"20", xl:"20"}}
                    spacing={{base:"0", lg:"30", xl:"30"}}
                    id="corpoclinico"
                    align={{base:"center", lg:"stretch", xl:"stretch"}}
                    flexDirection={{base:"column", lg:"row", xl:"row"}}
                >
                    <Datas title={"1997"} text={"Pioneira na cidade, foi em 1997 que iniciamos nossos atendimentos. Todos os médicos radiologistas têm o título de especialista em Radiologia e diagnóstico por imagens pelo Colégio Brasileiro de Radiologia e Associação Médica Brasileira"} />

                    <Datas title={"2010"} text={"Priorizando sempre o bem estar dos pacientes, principalmente com a preocupação e comprometimento de elevar sempre o padrão de seus serviços, a Clínica Verimagem amplia e adquire sua nova sede na Av Getúlio Vargas."} />

                    <Datas title={"2020"} text={"A busca por excelência é uma constante para a Clinica VERIMAGEM, que pensando nisso em 2020 adquiriu um moderno aparelho de Ressonância Magnética, referência na região, aumentando a qualidade em seus exames e laudos, com atendimento médico e técnico especializado e humanizado, pensado em cada paciente, oferecendo mais conforto e bem-estar em todos os procedimentos."}/>
                </HStack>
                <Stack
                    px={{base:"10", lg:"20", xl:"20"}}
                    pb={32}
                    align={{base:"center", md:"start", lg:"none", xl:"none"}}
                    spacing={8}
                    marginBottom="25%"
                >
                    <SubTitle tam={{base:"32px", md:"36px", lg:"36px", xl:"36px"}} titleinformation="Corpo Clínico" />
                    <HStack
                        spacing={7}
                        align={{base:"center", lg:"stretch", xl:"stretch"}}
                        flexDirection={{base:"column", lg:"row", xl:"row"}}
                    >
                        <Convenios url={"flavio.png"} tam={{base:"100%", lg:"50%", xl:"50%"}} alternativetext={"Flávio Augusto Teixeira Ronzani"} name={"Flávio Augusto Teixeira Ronzani: Médico Radiologista formado pela Universidade Federal de Juiz de Fora e Professor Mestre da Faculdade de Medicina da UFJF e membro titular do Colégio Brasileiro de Radiologia e Diagnóstico por Imagem"} />

                        <Convenios url={"silvio.png"} tam={{base:"100%", lg:"50%", xl:"50%"}} alternativetext={"Silvio Caetano Vitoi"} name={"Silvio Caetano Vitoi: Médico Radiologista formado pela Universidade Federal de Juiz de Fora e Ex-Professor da Faculdade de Medicina da UFJF e membro titular do Colégio Brasileiro de Radiologia e Diagnóstico por Imagem"} />
                    </HStack>
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}
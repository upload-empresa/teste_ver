import { Box, HStack, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import { MdAddIcCall, MdBiotech, MdOutlineCalendarToday, MdOutlineMedicalServices } from "react-icons/md"
import { TbActivityHeartbeat } from "react-icons/tb"
import { MdLocationOn } from "react-icons/md"


import styles from '../styles/Home.module.css'
import { Card } from "../components/Cards"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { SubTitle } from "../components/Title/subtitle"
import { Convenios } from "../components/Convenios"
import Image from "next/image"
// import ImageSlider from "../components/Slider/ImageSlider"
// import { SlideData } from "../utils/SlideData"

export default function Home() {
  return (
    <>
      <Navbar />
      <Stack>
        <Box
          w="100%"
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

          </Stack>
        </Box>
        {/* <Box w="100%" p={4} color="white">
          <ImageSlider slides={SlideData} />
        </Box> */}
        <HStack
          spacing={8}
          position='absolute'
          left='50%'
          transform='translateX(-50%)'
          top="20%"
          id="verImagem"
        >
          <Card link="https://www.medcloud.co/app/do/guest" text="Resultado dos Exames" icone={MdBiotech} other={"_blank"} />
          <Card link="../components/Modal" text="Agendamento" icone={MdOutlineCalendarToday} />
          <Card link="/exames" text="Exames Clínicos" icone={TbActivityHeartbeat} />
        </HStack>
      </Stack>
      <HStack
        px={32}
        mt="8rem"
        align="start"
        spacing={20}
      >
        <Stack
          w="40%"
        >
          <Image className={styles.imageverimagem} width="1114px" height="739px" src="/capa.jpg" alt="Ver-Imagem" />
        </Stack>
        <Stack
          w="60%"
          spacing={4}
        >

          <SubTitle tam="32px" titleinformation="Nossa História" />
          <Text
            as="p"
            fontSize="16px"
          >
            A Clínica VERIMAGEM iniciou suas atividades em outubro de 1997 em uma sala comercial no prédio Orlando Leite, na rua Coronel Olivier Fajardo, famosa rua da Exposição, com um aparelho de Densitometria Óssea e um aparelho de Ultrassom. Anos depois, com a ideia de ampliarmos nossos exames, mudamos para a atual sede, um casarão no coração da avenida Getúlio Vargas. Com a expansão inovamos com o serviço digital de raios-x e mamografia . Num exemplo de coragem e empreendedorismo, os proprietários da Clínica VERIMAGEM adquiriram o primeiro aparelho de Ressonância Magnética da cidade. Em 2020 evoluiu-se ainda mais visando a precisão dos diagnósticos por imagem com a aquisição de aparelho de Ressonância Magnética 1,5 Tesla SIEMENS SEMPRA Campo fechado, o que coloca a Clínica VERIMAGEM no patamar mais elevado dos recursos tecnológicos na respectiva área médica.
          </Text>
        </Stack>
      </HStack>
      <Stack
        px={32}
        mt="3rem"
        spacing={20}
        id="convenios"
        mb="10%"
      >
        <Stack
          spacing={4}
          mb="5%"
        >
          <SubTitle tam="32px" titleinformation="Convênios" />
          <HStack
            spacing={7}
          >
            <Convenios url="/unilogo.png" name="Unimed" alternativetext="Logo da Unimed" />
            <Convenios url="/bralogo.png" name="Bradesco" alternativetext="Logo do Bradesco" />
            <Convenios url="/cassilogo.png" name="Cassi" alternativetext="Logo da Cassi" />
            <Convenios url="/energilogo.png" name="Energisa" alternativetext="Logo da Energisa" />
            <Convenios url="/iplogo.png" name="Ipsemg" alternativetext="Logo da Ipsemg" />
            <Convenios url="/postallogo.png" name="Postal Saúde" alternativetext="Logo da Postal Saúde" />
            <Convenios url="/polilogo.png" name="Polícia Militar" alternativetext="Logo da Polícia Militar" />
            <Convenios url="/" name="Saúde Caixa" alternativetext="Logo da Saúde Caixa" />
            <Convenios url="/" name="Geap" alternativetext="Logo da Geap" />
            <Convenios url="/" name="Libertas" alternativetext="Logo da Libertas" />
            <Convenios url="/" name="Copass Saúde" alternativetext="Logo da Copass Saúde" />
            <Convenios url="/" name="18 de Julho" alternativetext="Logo da 18 de Julho" />
          </HStack>
        </Stack>
        <Stack
          spacing={4}
        >
          <SubTitle tam="32px" titleinformation="Parceiros" />
          <HStack
            spacing={7}
          >
            <Convenios url="/" name="Cisum" alternativetext="Logo da Cisum" />
            <Convenios url="/" name="27 Assistêncial" alternativetext="Logo do 27 Assistêncial" />
            <Convenios url="/" name="Ratinho" alternativetext="Logo da Ratinho" />
            <Convenios url="/" name="Recreio Assistencial" alternativetext="Logo da Recreio Assistencial" />
            <Convenios url="/" name="Ricardo Dias" alternativetext="Logo da Ricardo Dias" />
            <Convenios url="/" name="Unisanta" alternativetext="Logo da Unisanta" />
            <Convenios url="/" name="Metra" alternativetext="Logo da Metra" />
          </HStack>
        </Stack>
      </Stack>
      <Stack
        align="center"
        mt="3.5rem"
        spacing={20}
        mb="4rem"

      >
        <SubTitle tam="32px" titleinformation="Nossas Unidades" />
        <HStack
          w="75%"
          justify="space-around"
          spacing={78}
          id="contato"
          as="section"
          align="stretch"
        >
          <Stack
            as="section"
            position='relative'
            w={'100%'}
          >
            <Image className={styles.imageverimagem} src="/unidadeleopoldina.jpg" width="1080px" height="1034px" alt="Unidade de Leopoldina" />
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
              p={5}
              backgroundColor="#0000003b"
              borderRadius="7px"
              justify="end"
            >
              <Stack
                as="article"
                align="start"
                spacing={4}
              >
                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdLocationOn} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">
                    Av. Getúlio Vargas, 260 - Centro, Leopoldina - MG
                  </Text>
                </HStack>

                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdAddIcCall} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">
                    (32) 3441-5397
                  </Text>
                </HStack>
                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdOutlineMedicalServices} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">Raio-X, Mamografia, Densitometria Óssea, Doppler Colorido, Ressonância Magnétia e Ultrassonografia</Text>
                </HStack>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            as="section"
            position='relative'
            w='100%'
          >
            <Image className={styles.imageverimagem} src="/cataguases.png" width="640px" height="612px" alt="Unidade de Leopoldina" />
            <Stack
              as="section"
              position="absolute"
              top="-2%"
              bottom="0"
              right="0"
              left="0"
              w="100%"
              p={5}
              h="100%"
              opacity="1"
              backgroundColor="#0000003b"
              borderRadius="7px"
              justify="end"
            >
              <Stack
                as="article"
                align="start"
                spacing={4}
              >
                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdLocationOn} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">R. Cel. João Duarte, 64 - Salas 102/104 - Centro, Cataguases - MG</Text>
                </HStack>

                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdAddIcCall} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">(32) 3422-5858</Text>
                </HStack>
                <HStack
                  align="center"
                  justify="center"
                >
                  <IconButton
                    icon={<Icon as={MdOutlineMedicalServices} />}
                    fontSize="32px"
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
                  <Text as='p' color="white" fontWeight="500" fontSize="20px">Ultrassonografia 3D/4D</Text>
                </HStack>
              </Stack>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
      <Footer />
    </>
  )
}

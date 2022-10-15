import { HStack, Link, Stack } from "@chakra-ui/react"
import NextLink from "next/link"


import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { SubTitle } from "../components/Title/subtitle"
import { BetweenPages } from "../components/BetweenPages"
import { CardExames } from "../components/Cards/cardexames"
import { ExamesTitle } from "../components/Title/examestitle"

export default function Exames() {
    return (
        <>
            <Navbar />
            <Stack
                as="section"
                px={4}
                py={14}
            >
                <Stack
                    spacing={{base:"20", lg:"32", xl:"32"}}
                >
                    <HStack>
                        <BetweenPages caminho="/" name="Home" />
                        <BetweenPages caminho="#" name="/" />
                        <BetweenPages caminho="exames" name="Exames" />
                    </HStack>
                    <Stack
                        spacing={20}
                    >
                        <Stack
                            align="center"
                        >
                            <SubTitle tam={{base:"24px", md: "32px", lg: "40px", xl: "40px" }} titleinformation="Nossos Exames" />
                        </Stack>
                        <Stack
                            spacing={{base:"0", md:"12", lg:"12", xl:"12"}}
                            px={{ md: "15", lg: "40", xl: "40" }}
                            paddingBottom={20}
                        >
                            <HStack
                                spacing={{base:"0", md:"10", lg:"10", xl:"10"}}
                                flexDir={{base:"column", md:"row", lg:"row", xl:"row"}}
                                px={{base:"4"}}
                            >
                                <NextLink href="mamografia" passHref>
                                    <Link>
                                        <CardExames resolution="/mamografia.png">
                                            <ExamesTitle title={"Mamografia Digital"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                                <NextLink href="doppler" passHref>
                                    <Link>
                                        <CardExames resolution="/doppler.png">
                                            <ExamesTitle title={"Doppler Colorido"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                                <NextLink href="densitometria">
                                    <Link>
                                        <CardExames resolution="/densitometria.png">
                                            <ExamesTitle title={"Densitometria Óssea"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                            </HStack>
                            <HStack
                                spacing={{base:"0", md:"10", lg:"10", xl:"10"}}
                                flexDir={{base:"column", md:"row", lg:"row", xl:"row"}}
                                px={{base:"4"}}
                            >
                                <NextLink href="ultrassonografia">
                                    <Link>
                                        <CardExames resolution="/ultrassonografia.png">
                                            <ExamesTitle title={"Ultrassonografia 3D/4D"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                                <NextLink href="ressonancia">
                                    <Link>
                                        <CardExames resolution="/ressonancia.png">
                                            <ExamesTitle title={"Ressonância Magnética"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                                <NextLink href="raiox">
                                    <Link>
                                        <CardExames resolution="/raiox.png">
                                            <ExamesTitle title={"Raio-X"} />
                                        </CardExames>
                                    </Link>
                                </NextLink>
                            </HStack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}
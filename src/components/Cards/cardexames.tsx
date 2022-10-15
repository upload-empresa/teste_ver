import { Image, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"
import styles from '../../styles/Home.module.css'

interface CardExamesProps {
    children: ReactNode
    resolution: string
}

export function CardExames({children, resolution}: CardExamesProps) {
    return(
        <Stack
        position="relative"
    >
        <Image src={resolution} className={styles.imageverimagem} alt="Mamografia Digital Ver-Imagem" />
        <Stack
            as="section"
            position="absolute"
            top="-3%"
            bottom="0"
            right="0"
            left="0"
            w="100%"
            h="97%"
            opacity="1"
            borderRadius="7px"
            backgroundColor="#0000003b"
        />
        <Stack>
            {children}
        </Stack>
    </Stack>

    )
}

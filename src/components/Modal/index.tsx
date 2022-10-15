import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ModalsProps {
    children: ReactNode
}

export function Modals({children}: ModalsProps) {
    const { isOpen, onOpen ,onClose } = useDisclosure()
    return (
        <>
        <Button onClick={onOpen}>
            {children}
        </Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        Testando um modal
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}
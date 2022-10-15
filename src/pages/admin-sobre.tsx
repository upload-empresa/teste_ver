import { TableContainer, Table, TableCaption, Button, Icon, Text, Thead, Tr, Th, Tbody, Td, HStack } from "@chakra-ui/react"
import { MdAdd, MdRemoveRedEye, MdModeEdit, MdOutlineDelete } from "react-icons/md"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Nav } from "../components/Navbar/nav"

export default function Administrar() {
    return (
        <>
            <Navbar />
            <Nav />
            <TableContainer px={8} py={12} mb="3%">
                <Table variant='simple' >
                    <TableCaption placement="top" textAlign="right">
                        <Button colorScheme="green">
                            <Icon as={MdAdd} pr={1} fontSize="28px" /> 
                            <Text
                                fontSize="16px"
                            >
                                Adicionar
                            </Text>
                        </Button>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="black" fontSize="20px">Imagem</Th>
                            <Th color="black" fontSize="20px">Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td w="33%">
                                <img src="/images/camisa.png" alt="XXXX" width="30%" />
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <img src="/images/camisa.png" alt="XXXX" width="30%" />
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <img src="/images/camisa.png" alt="XXXX" width="30%" />
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>

                    </Tbody>
                    <Thead>
                        <Tr>
                            <Th color="black" fontSize="20px">Texto</Th>
                            <Th color="black" fontSize="20px">Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td w="33%">
                                <Text>
                                    1ª Data
                                </Text>
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <Text>
                                    2ª Data
                                </Text>
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <Text>
                                    3ª Data
                                </Text>
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <Text>
                                    Corpo Clínico
                                </Text>
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td w="33%">
                                <Text>
                                    Corpo Clínico
                                </Text>
                            </Td>
                            <Td w="33%">
                                <HStack spacing={4}>
                                    <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                        <Icon as={MdRemoveRedEye} fontSize="28px" />
                                    </Button>
                                    <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                        <Icon as={MdModeEdit} fontSize="28px" />
                                    </Button>
                                    <Button bg="red" color="white" _hover={{ bg: "red" }}>
                                        <Icon as={MdOutlineDelete} fontSize="28px" />
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>



                    </Tbody>

                </Table>
            </TableContainer>
            <Footer />
        </>
    )
}
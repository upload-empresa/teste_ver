import {
    CircularProgress,
    Typography,
  } from '@material-ui/core';
  
  import axios from 'axios';
  import dynamic from 'next/dynamic';
  import { useRouter } from 'next/router';
  import NextLink from 'next/link';
  import React, { useEffect, useContext, useReducer } from 'react';
  
  import { TableContainer, Table, TableCaption, Button, Icon, Text, Thead, Tr, Th, Tbody, Td, HStack } from "@chakra-ui/react"
  import { MdAdd, MdRemoveRedEye, MdModeEdit, MdOutlineDelete } from "react-icons/md"
  import { Footer } from "../../components/Footer"
  import { Navbar } from "../../components/Navbar"
  // import { Nav } from "../../components/Navbar/nav"
  
  import { getError } from '../../utils/error';
  import { Store } from '../../utils/Store';
  import { useSnackbar } from 'notistack';
  
  
  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, planos: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'CREATE_REQUEST':
        return { ...state, loadingCreate: true };
      case 'CREATE_SUCCESS':
        return { ...state, loadingCreate: false };
      case 'CREATE_FAIL':
        return { ...state, loadingCreate: false };
      case 'DELETE_REQUEST':
        return { ...state, loadingDelete: true };
      case 'DELETE_SUCCESS':
        return { ...state, loadingDelete: false, successDelete: true };
      case 'DELETE_FAIL':
        return { ...state, loadingDelete: false };
      case 'DELETE_RESET':
        return { ...state, loadingDelete: false, successDelete: false };
      default:
        state;
    }
  }
  
  function AdminPlanos() {
    const { state } = useContext(Store);
    const router = useRouter();
    const { userInfo } = state;
  
    const [
      { loading, error, planos, loadingCreate, successDelete, loadingDelete },
      dispatch,
    ] = useReducer(reducer, {
      loading: true,
      planos: [],
      error: '',
    });
  
    useEffect(() => {
      if (!userInfo) {
        router.push('/login');
      }
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/planos`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
      if (successDelete) {
        dispatch({ type: 'DELETE_RESET' });
      } else {
        fetchData();
      }
    }, [successDelete]);
  
    const { enqueueSnackbar } = useSnackbar();
    const createHandler = async () => {
      if (!window.confirm('Tem certeza?')) {
        return;
      }
      try {
        dispatch({ type: 'CREATE_REQUEST' });
        const { data } = await axios.post(
          `/api/admin/planos`,
          {},
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'CREATE_SUCCESS' });
        enqueueSnackbar('Exame criado com sucesso!', { variant: 'success' });
        router.push(`/admin/plano/${data.plano._id}`);
      } catch (err) {
        dispatch({ type: 'CREATE_FAIL' });
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    };
    const deleteHandler = async (planoId) => {
      if (!window.confirm('Tem certeza?')) {
        return;
      }
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(`/api/admin/planos/${planoId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'DELETE_SUCCESS' });
        enqueueSnackbar('Plano deletado com sucesso', { variant: 'success' });
      } catch (err) {
        dispatch({ type: 'DELETE_FAIL' });
        enqueueSnackbar(getError(err), { variant: 'error' });
      }
    }; 
      return (
          <>
              <Navbar />
              {/* <Nav /> */}
              
              <TableContainer px={8} py={12} mb="3%">
                  <Table variant='simple' >
                      <TableCaption placement="top" textAlign="right">
                          <Button
                           onClick={createHandler}
                           colorScheme="green"
                           >
                              <Icon as={MdAdd} pr={1} fontSize="28px" /> 
                              <Text
                                  fontSize="16px"
                              >
                                  Adicionar
                              </Text>
                          </Button>
                          {loadingCreate && <CircularProgress />}
                      </TableCaption>
                          {loading ? (
                        <CircularProgress />
                      ) : error ? (
                        <Typography >{error}</Typography>
                      ) : (
                      <><Thead>
                      <Tr>
                        <Th color="black" fontSize="20px">Imagem</Th>
                        <Th color="black" fontSize="20px">Nome</Th>
                        <Th color="black" fontSize="20px">Ações</Th>
                      </Tr>
                    </Thead><Tbody>
                        {planos.map((plano) => (
                          <Tr key={plano._id}>
                            <Td w="33%">
                            {plano.image}
                            </Td>
                            <Td w="33%">
                              {plano.name}
                            </Td>
                            <Td w="33%">
                              <HStack spacing={4}>
                                <Button bg="gray.600" color="white" _hover={{ bg: "gray.600" }}>
                                  <Icon as={MdRemoveRedEye} fontSize="28px" />
                                </Button>
                                <NextLink
                                  href={`/admin/plano/${plano._id}`}
                                  passHref
                                >
                                  <Button bg="black" color="white" _hover={{ bg: "black" }}>
                                    <Icon as={MdModeEdit} fontSize="28px" />
                                  </Button>
                                </NextLink>{' '}
  
                                <Button
                                  bg="red"
                                  color="white"
                                  _hover={{ bg: "red" }}
                                  onClick={() => deleteHandler(plano._id)}
                                >
                                  <Icon as={MdOutlineDelete} fontSize="28px" />
                                </Button>
                              </HStack>
                            </Td>
                          </Tr>
                        ))}
  
  
  
                      </Tbody></>
                     
                     )}
                  </Table>
              </TableContainer>
              <Footer />
          </>
      )
  }
  
  export default dynamic(() => Promise.resolve(AdminPlanos), { ssr: false });
  
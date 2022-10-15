
import { Button, Input, Stack, Text } from "@chakra-ui/react"

import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

import axios from 'axios';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useContext, useEffect } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';

export default function Login() {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query; // login?redirect=/shipping
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);


  const submitHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      router.push(redirect || '/');
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
        <>
      <Navbar />
      <form onSubmit={handleSubmit(submitHandler)} >
        <Stack
          as="section"
          align="center"
        >
          <Stack
            as="aside"
            bg="#fff"
            mt="7rem"
            mb="7rem"
            align="center"
            borderRadius="7px"
            w="400px"
            px={6}
            py={5}
            boxShadow="2px 15px 45px rgba(0, 0, 0, 0.1)"
          >
            <Stack
              as="article"
              border="2px solid #3FC1FD"
              align="center"
              px={6}
              py={5}
              spacing={8}
              borderRadius="7px"

            >
              <Text
                as="h3"
                fontSize="24px"
                fontWeight="500"
              >
                Faça seu Login
              </Text>
              <Stack
                spacing={2}
              >
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  render={({ field }) => (
                    <Input
                    placeholder="Digite seu email"
                    id="email"
                    inputProps={{ type: 'email' }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === 'pattern'
                          ? 'Email is not valid'
                          : 'Email is required'
                        : ''
                    }
                    {...field}
                    ></Input>
                  )}
                ></Controller>

                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
                  render={({ field }) => (
                    <Input 
                    placeholder="Digite seu senha" 
                    id="password"
                    inputProps={{ type: 'password' }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === 'minLength'
                          ? 'Password length is more than 5'
                          : 'Password is required'
                        : ''
                    }
                    {...field}
                    ></Input>
                    )}
                    ></Controller>
                        </Stack>
              <Button
               type="submit"
                bg="#3FC1FD"
                fontSize="20px"
                px={8}
                py={6}
                fontWeight="500"
                _hover={{
                  opacity: "0.9"
                }}
              >
                Acessar
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </form>
      </>
      )
}
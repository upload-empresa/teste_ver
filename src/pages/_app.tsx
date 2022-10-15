import '../styles/global.css'


import {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { SnackbarProvider } from 'notistack'
import { StoreProvider } from '../utils/Store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <StoreProvider>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </StoreProvider>
    </SnackbarProvider>
  )
}

export default MyApp

import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'Prompt',
        body: 'Prompt'
    },
    styles: {
        global: {
            body: {
                bg: '#fafafa',
                boxSizing: 'border-box',
            }
        }
    }
})


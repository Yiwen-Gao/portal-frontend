import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}


const theme = extendTheme({
    config,
    styles: {
        global: {
            "html, body": {
                bg: "gray.900",
            },
        },
    },
});

export default theme;
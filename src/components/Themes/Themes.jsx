import { ThemeProvider } from "@emotion/react";

const theme = {
    colours: {
        white: '',
        warning: '',
        focus: '',
        primary: {
            a: '',
            b: '',
            c: ''
        },
        secundary: {
            a: '',
            b: '',
            c: ''
        },
        neutral: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: ''
        }
    }

}

export const Themes = ({ children }) => {
    return <ThemeProvider theme={theme}>
         { children }
    </ThemeProvider>

}
import { ThemeProvider } from "@emotion/react";

const theme = {
    colours: {
        white: '',
        warning: '',
        focus: '',
        primary: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundary: {
            a: '#EBEAF9',
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
    },
    spacing: {
        xs: '8px',
        s : '16px',
        l : '32px',
        xl: '48px'
    },
    fontFamily: " 'Montserrat', sans-serif;"
}

export const Themes = ({ children }) => {
    return <ThemeProvider theme={theme}>
         { children }
    </ThemeProvider>

}
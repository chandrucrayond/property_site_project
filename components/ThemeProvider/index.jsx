import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: "Nunito Sans",
        'h1': {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.14px',
            color: '#091B29',
        },
        'h2': {
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#091B29',
        },
        'h3':{
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '19px',
        },
        'h4': {
            fontWeight: '600',
            fontSize: '13px',
            lineHeight: '14px',
        },
        'h5': {
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0px',
            color: '#98A0AC',
        },
    }
});

export default theme;
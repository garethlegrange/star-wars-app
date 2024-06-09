"use client";

import { Montserrat, EB_Garamond } from 'next/font/google'
import { createTheme } from "@mui/material/styles";

const body = Montserrat({ subsets: ['latin'] })
const title = EB_Garamond({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: body.style.fontFamily,
    h1: {
      fontFamily: title.style.fontFamily,
      fontSize: "4rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;

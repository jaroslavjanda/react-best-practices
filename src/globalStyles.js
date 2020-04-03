import 'sanitize.css'
import 'react-toastify/dist/ReactToastify.css'

import { createGlobalStyle } from 'styled-components'

import { fontFamily } from 'styled-system'
import theme from './common/theme'

const GlobalStyles = createGlobalStyle`

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
   font-size: 65%;
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  body {
    font-size: ${theme.fontSize.medium};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    color: ${theme.color.white};
    background-color: ${theme.color.black};
  }

`

export default GlobalStyles

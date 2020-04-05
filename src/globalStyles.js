import 'sanitize.css'
import 'react-toastify/dist/ReactToastify.css'

import { createGlobalStyle } from 'styled-components'

import { fontFamily } from 'styled-system'
import theme from './common/theme'

const GlobalStyles = createGlobalStyle`
   @font-face {
    font-family: "roboto";
    src: url('font/Roboto.Light.ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'roboto';
    src: url('font/Roboto-Medium.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'roboto';
    src: url('font/Roboto-Regular.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'oswald';
    src: url('font/Oswald-Regular.ttf');
    font-weight: 400;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 100%;
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'oswald', sans-serif;
    font-weight: 400;
    font-size: 8.4rem
  }

  body {
    font-size: 1rem;
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
  }

  body.fontLoaded {
    font-family: 'Oswald', 'Roboto', oswald, roboto, sans-serif;
  }
  #root {
    width: 100vw;
    height: 100vh;
  }

`

export default GlobalStyles

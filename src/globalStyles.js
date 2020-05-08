import 'sanitize.css'
import 'react-toastify/dist/ReactToastify.css'

import { createGlobalStyle } from 'styled-components'
import theme from './common/theme'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oswald';
    src: local('Oswald'), url('/font/Oswald-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: "Roboto";
    src: url('/font/Roboto.Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/font/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    
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
    font-family: Oswald, sans-serif;
    font-weight: 400;
    font-size: 8.4rem
  }

  body {
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
  }

  body.fontLoaded {
    font-family: 'oswald', 'roboto', oswald, roboto, sans-serif;
  }
  #root {
    width: 100vw;
    height: 100vh;
  }

`

export default GlobalStyles

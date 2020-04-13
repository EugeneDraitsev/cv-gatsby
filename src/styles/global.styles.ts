import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
      transition-property: background-color, color;
      transition-delay: 99999999999s;
    }
  }
`

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  * {
    font-family: 'Roboto', sans-serif;
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

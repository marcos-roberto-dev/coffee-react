import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  :focus {
    outline: 0;

  }

  input:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['--yellow-dark']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    line-height: 160%;
  }

  body {
    background: ${(props) => props.theme['--background']};
  }

`

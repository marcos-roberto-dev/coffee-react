import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;

  }

  input:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['--yellow-dark']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 160%;
  }

`

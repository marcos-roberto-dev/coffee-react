import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root {
    --test: tomato
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 2px transparent;
  }

  body, input, area, button {
    font-family: "Roboto", sans-serif;
    font-weight: 160%;
  }

`

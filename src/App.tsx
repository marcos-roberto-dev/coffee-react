import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContextProvider>
        <Router />
        <GlobalStyles />
      </ShoppingCartContextProvider>
    </ThemeProvider>
  )
}

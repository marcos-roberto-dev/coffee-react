import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'
const regexOne = /['credit', 'debit', 'money']/
const checkoutValidateSchema = zod.object({
  cep: zod.string().max(8).min(8).nonempty(),
  street: zod.string().nonempty(),
  number: zod.string().nonempty(),
  complement: zod.string().optional(),
  city: zod.string().nonempty(),
  district: zod.string().nonempty(),
  uf: zod.string().min(2).max(2).nonempty(),
  paymentMethod: zod.string().regex(regexOne),
})

type newCheckoutFormData = zod.infer<typeof checkoutValidateSchema>
export function App() {
  const methods = useForm<newCheckoutFormData>({
    resolver: zodResolver(checkoutValidateSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      district: '',
      uf: '',
      paymentMethod: '',
    },
  })
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContextProvider>
        <FormProvider {...methods}>
          <Router />
          <GlobalStyles />
        </FormProvider>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  )
}

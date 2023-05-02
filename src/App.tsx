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
  cep: zod
    .string()
    .max(8, { message: 'CEP deve conter 8 caracteres' })
    .min(8, { message: 'CEP deve conter 8 caracteres' }),
  street: zod.string().nonempty({ message: 'Campo obrigatorio' }),
  number: zod.string().nonempty({ message: 'Campo obrigatorio' }),
  complement: zod.string().optional(),
  city: zod.string().nonempty({ message: 'Campo obrigatorio' }),
  district: zod.string().nonempty({ message: 'Campo obrigatorio' }),
  uf: zod
    .string()
    .min(2, { message: 'UF deve conter 2 caracteres' })
    .max(2, { message: 'UF deve conter 2 caracteres' }),
  paymentMethod: zod
    .string()
    .regex(regexOne, { message: 'Selecione um metodo de pagamento' }),
})

export type NewCheckoutFormData = zod.infer<typeof checkoutValidateSchema>
export function App() {
  const methods = useForm<NewCheckoutFormData>({
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

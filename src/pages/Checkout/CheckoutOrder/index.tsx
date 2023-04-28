import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Card } from '../../../components/Card'
import {
  CheckoutHeaderContent,
  CheckoutOrderContainer,
  FormCard,
  FormInputs,
  SelectedKindPayment,
} from './styles'
import { Button } from '../../../components/Buttons'
import { defaultTheme } from '../../../styles/themes/default'

export function CheckoutOrder() {
  return (
    <CheckoutOrderContainer>
      <h2>Complete seu pedido</h2>
      <Card>
        <FormCard>
          <header>
            <CheckoutHeaderContent>
              <MapPinLine size={22} color={defaultTheme['--yellow-dark']} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutHeaderContent>
          </header>

          <FormInputs>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </FormInputs>
        </FormCard>
      </Card>

      <Card>
        <SelectedKindPayment>
          <header>
            <CheckoutHeaderContent>
              <CurrencyDollar size={22} color={defaultTheme['--purple']} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutHeaderContent>
          </header>

          <ul>
            <li>
              <Button size="large" variant="default">
                <CreditCard size={16} color={defaultTheme['--purple']} />
                Cartão de Crédito
              </Button>
            </li>
            <li>
              <Button size="large" variant="default">
                <Bank size={16} color={defaultTheme['--purple']} />
                Cartão de Débito
              </Button>
            </li>
            <li>
              <Button size="large" variant="default">
                <Money size={16} color={defaultTheme['--purple']} />
                Dinheiro
              </Button>
            </li>
          </ul>
        </SelectedKindPayment>
      </Card>
    </CheckoutOrderContainer>
  )
}

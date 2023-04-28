import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Card } from '../../../components/Card'
import {
  CheckoutOrderContainer,
  FormCard,
  FormInputs,
  SelectedKindPayment,
} from './styles'
import { Button } from '../../../components/Buttons'

export function CheckoutOrder() {
  return (
    <CheckoutOrderContainer>
      <h2>Complete seu pedido</h2>
      <Card>
        <FormCard>
          <header>
            <MapPinLine />
            <div>
              <div>Endereço de Entrega</div>
              <div>Informe o endereço onde deseja receber seu pedido</div>
            </div>
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
            <CurrencyDollar />
            <div>
              <div>Pagamento</div>
              <div>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </div>
            </div>
          </header>

          <ul>
            <li>
              <Button size="large" variant="default">
                <CreditCard size={16} />
                Cartão de Crédito
              </Button>
            </li>
            <li>
              <Button size="large" variant="default">
                <Bank size={16} />
                Cartão de Débito
              </Button>
            </li>
            <li>
              <Button size="large" variant="default">
                <Money size={16} />
                Dinheiro
              </Button>
            </li>
          </ul>
        </SelectedKindPayment>
      </Card>
    </CheckoutOrderContainer>
  )
}

import { Button } from '../../../components/Buttons'
import { Card } from '../../../components/Card'
import {
  CheckoutCoffeeListContainer,
  CheckoutCoffeeSelectedContainer,
} from './styles'

export function CheckoutCoffeeSelected() {
  return (
    <CheckoutCoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <Card>
        <CheckoutCoffeeListContainer>
          <ul>
            <li>Expresso</li>
            <li>Latte</li>
          </ul>
          <Button size="normal" variant="yellow">
            Confirmar Pedido
          </Button>
        </CheckoutCoffeeListContainer>
      </Card>
    </CheckoutCoffeeSelectedContainer>
  )
}

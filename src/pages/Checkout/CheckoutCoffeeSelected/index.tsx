import { NavLink } from 'react-router-dom'

import { Button } from '../../../components/Buttons'
import { Card } from '../../../components/Card'
import {
  CheckoutAmount,
  CheckoutCoffeeListContainer,
  CheckoutCoffeeSelectedContainer,
  CheckoutSeparatorItem,
} from './styles'
import { CheckoutCoffeeItem } from '../CheckoutCoffeeItem'

export function CheckoutCoffeeSelected() {
  return (
    <CheckoutCoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <CheckoutCoffeeListContainer>
        <Card>
          <ul>
            <CheckoutCoffeeItem />
            <CheckoutSeparatorItem />
            <CheckoutCoffeeItem />
          </ul>

          <div>
            <CheckoutSeparatorItem />
            <CheckoutAmount>
              <div>
                <div>Total de itens</div>
                <span>R$ 29,70</span>
              </div>

              <div>
                <div>Entrega</div>
                <span>R$ 3,50</span>
              </div>
              <div>
                <h4>Total</h4>
                <h4>R$ 33,20</h4>
              </div>
            </CheckoutAmount>
            <NavLink to="/success">
              <Button size="normal" variant="yellow">
                Confirmar Pedido
              </Button>
            </NavLink>
          </div>
        </Card>
      </CheckoutCoffeeListContainer>
    </CheckoutCoffeeSelectedContainer>
  )
}

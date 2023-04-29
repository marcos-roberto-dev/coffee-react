import { useContext } from 'react'
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
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'

export function CheckoutCoffeeSelected() {
  const { cart, deliveryTax, totalAmountCheckout } =
    useContext(ShoppingCartContext)
  return (
    <CheckoutCoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <CheckoutCoffeeListContainer>
        <Card>
          <ul>
            {cart.map((coffee) => (
              <div key={coffee.id}>
                <CheckoutCoffeeItem coffee={coffee} />
                {cart.length > 1 && <CheckoutSeparatorItem />}
              </div>
            ))}
          </ul>

          <div>
            <CheckoutAmount>
              <div>
                <div>Total de itens</div>
                <span>R$ {totalAmountCheckout().totalAmountCoffees}</span>
              </div>

              <div>
                <div>Entrega</div>
                <span>
                  R${' '}
                  {deliveryTax.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div>
                <h4>Total</h4>
                <h4>R$ {totalAmountCheckout().totalAmountWithDelivery}</h4>
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

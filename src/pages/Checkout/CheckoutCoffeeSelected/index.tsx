import { useContext } from 'react'

import { Button } from '../../../components/Buttons'
import { Card } from '../../../components/Card'
import { CheckoutCoffeeItem } from '../components/CheckoutCoffeeItem'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import { CoffeeItem } from '../../../reducers/shoppingcart/reducer'

import {
  CheckoutAmount,
  CheckoutCoffeeListContainer,
  CheckoutCoffeeSelectedContainer,
  CheckoutSeparatorItem,
} from './styles'

export function CheckoutCoffeeSelected() {
  const {
    cart,
    deliveryTax,
    totalAmountCheckout,
    addCoffeeInShoppingCart,
    removeCoffeeInShoppingCart,
  } = useContext(ShoppingCartContext)

  function changePlusQuantity(coffee: CoffeeItem) {
    addCoffeeInShoppingCart({ ...coffee, qnt: coffee.qnt + 1 })
  }

  function changeMinusQuantity(coffee: CoffeeItem) {
    addCoffeeInShoppingCart({ ...coffee, qnt: coffee.qnt - 1 })
  }

  function changeQuantity(coffee: CoffeeItem, qnt: number) {
    addCoffeeInShoppingCart({ ...coffee, qnt })
  }

  function deleteCoffeeInShoppingCart(coffee: CoffeeItem) {
    removeCoffeeInShoppingCart(coffee.id)
  }

  return (
    <CheckoutCoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <CheckoutCoffeeListContainer>
        <Card>
          <ul>
            {cart.map((coffee) => (
              <div key={coffee.id}>
                <CheckoutCoffeeItem
                  coffee={coffee}
                  onHandleChangeQuantity={changeQuantity}
                  onHandleMinusQuantityChange={changeMinusQuantity}
                  onHandlePlusQuantityChange={changePlusQuantity}
                  onHandleRemoveCoffeeInShoppingCart={
                    deleteCoffeeInShoppingCart
                  }
                />
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
            <Button size="normal" variant="yellow">
              Confirmar Pedido
            </Button>
          </div>
        </Card>
      </CheckoutCoffeeListContainer>
    </CheckoutCoffeeSelectedContainer>
  )
}

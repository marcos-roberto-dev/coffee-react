import { Trash } from 'phosphor-react'
import { Button } from '../../../components/Buttons'
import { ButtonQuantityItem } from '../../../components/ButtonQuantityItem'
import { defaultTheme } from '../../../styles/themes/default'
import {
  CheckoutCoffeeItemContainer,
  CheckoutCoffeeItemControl,
} from './styles'

import CoffeeIMG from '../../../assets/coffees/americano.svg'
import {
  CoffeeItem,
  ShoppingCartContext,
} from '../../../context/ShoppingCartContext'
import { useContext } from 'react'

interface CheckoutCoffeeItemProps {
  coffee: CoffeeItem
}

export function CheckoutCoffeeItem({ coffee }: CheckoutCoffeeItemProps) {
  const { addCoffeInShoppingCart, removeCoffeeInShoppingCart } =
    useContext(ShoppingCartContext)

  function handlePlusQuantityChange() {
    addCoffeInShoppingCart({ ...coffee, qnt: coffee.qnt + 1 })
  }

  function handleMinusQuantityChange() {
    addCoffeInShoppingCart({ ...coffee, qnt: coffee.qnt - 1 })
  }

  function handleChangeQuantityChange(qnt: number) {
    addCoffeInShoppingCart({ ...coffee, qnt })
  }

  function handleRemoveCoffeeInShoppingCart() {
    removeCoffeeInShoppingCart(coffee.id)
  }

  return (
    <CheckoutCoffeeItemContainer>
      <img src={CoffeeIMG} alt="Coffee" />
      <div>
        <h4>{coffee.label}</h4>
        <CheckoutCoffeeItemControl>
          <ButtonQuantityItem
            coffeeId={coffee.id}
            quantity={coffee.qnt}
            onMinusMinusQuantityChange={handleMinusQuantityChange}
            onPlusQuantityChange={handlePlusQuantityChange}
            onChange={handleChangeQuantityChange}
          />
          <Button
            variant="default"
            size="small"
            onClick={handleRemoveCoffeeInShoppingCart}
          >
            <Trash size={16} color={defaultTheme['--purple']} />
            Remover
          </Button>
        </CheckoutCoffeeItemControl>
      </div>
      <span>R$ 9,90</span>
    </CheckoutCoffeeItemContainer>
  )
}

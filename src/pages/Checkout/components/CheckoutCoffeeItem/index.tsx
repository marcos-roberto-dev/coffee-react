import { Trash } from 'phosphor-react'
import { Button } from '../../../../components/Buttons'
import { ButtonQuantityItem } from '../../../../components/ButtonQuantityItem'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  CheckoutCoffeeItemContainer,
  CheckoutCoffeeItemControl,
} from './styles'

import CoffeeIMG from '../../../../assets/coffees/americano.svg'
import { CoffeeItem } from '../../../../context/ShoppingCartContext'

interface CheckoutCoffeeItemProps {
  coffee: CoffeeItem
  onHandleMinusQuantityChange: (coffee: CoffeeItem) => void
  onHandlePlusQuantityChange: (coffee: CoffeeItem) => void
  onHandleChangeQuantity: (coffee: CoffeeItem, qnt: number) => void
  onHandleRemoveCoffeeInShoppingCart: (coffee: CoffeeItem) => void
}

export function CheckoutCoffeeItem({
  coffee,
  onHandleChangeQuantity,
  onHandleMinusQuantityChange,
  onHandlePlusQuantityChange,
  onHandleRemoveCoffeeInShoppingCart,
}: CheckoutCoffeeItemProps) {
  function handlePlusQuantityChange() {
    onHandlePlusQuantityChange(coffee)
  }

  function handleMinusQuantityChange() {
    onHandleMinusQuantityChange(coffee)
  }

  function handleChangeQuantity(qnt: number) {
    onHandleChangeQuantity(coffee, qnt)
  }

  function handleRemoveCoffeeInShoppingCart() {
    onHandleRemoveCoffeeInShoppingCart(coffee)
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
            onChange={handleChangeQuantity}
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

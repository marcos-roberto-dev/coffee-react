import { Trash } from 'phosphor-react'
import { Button } from '../../../components/Buttons'
import { ButtonQuantityItem } from '../../../components/ButtonQuantityItem'
import { defaultTheme } from '../../../styles/themes/default'
import {
  CheckoutCoffeeItemContainer,
  CheckoutCoffeeItemControl,
} from './styles'

import CoffeeIMG from '../../../assets/coffees/americano.svg'

export function CheckoutCoffeeItem() {
  return (
    <CheckoutCoffeeItemContainer>
      <img src={CoffeeIMG} alt="Coffee" />
      <div>
        <h4>Expresso Tradicional</h4>
        <CheckoutCoffeeItemControl>
          <ButtonQuantityItem />
          <Button variant="default" size="small">
            <Trash size={16} color={defaultTheme['--purple']} />
            Remover
          </Button>
        </CheckoutCoffeeItemControl>
      </div>
      <span>R$ 9,90</span>
    </CheckoutCoffeeItemContainer>
  )
}

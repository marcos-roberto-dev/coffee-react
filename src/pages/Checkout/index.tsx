import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected'
import { CheckoutOrder } from './CheckoutOrder'
import { CheckoutContainer } from './styled'

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutOrder />
      <CheckoutCoffeeSelected />
    </CheckoutContainer>
  )
}

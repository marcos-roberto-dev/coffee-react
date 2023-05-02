import { useContext, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { NewCheckoutFormData } from '../../App'
import { CheckoutOrder } from './CheckoutOrder'
import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected'
import { CheckoutContainer } from './styled'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

export function CheckoutPage() {
  const { cart, clearCoffeeShoppingCart } = useContext(ShoppingCartContext)

  const navigate = useNavigate()
  const { handleSubmit } = useFormContext<NewCheckoutFormData>()

  const onSubmit = (data: NewCheckoutFormData) => {
    navigate('/success', { state: data })
    clearCoffeeShoppingCart()
  }

  useEffect(() => {
    if (!cart.length) {
      navigate('/')
    }
  }, [cart, navigate])

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <CheckoutOrder />
      <CheckoutCoffeeSelected />
    </CheckoutContainer>
  )
}

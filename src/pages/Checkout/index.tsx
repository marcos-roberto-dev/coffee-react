import { useContext, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected'
import { CheckoutOrder } from './CheckoutOrder'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { NewCheckoutFormData } from '../../App'

import { CheckoutContainer } from './styled'

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

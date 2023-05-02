import { useContext, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected'
import { CheckoutOrder } from './CheckoutOrder'
import { CheckoutContainer } from './styled'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

export function CheckoutPage() {
  const { cart } = useContext(ShoppingCartContext)

  const navigate = useNavigate()
  const { handleSubmit } = useFormContext()

  const onSubmit = (data: any, e: any) => {
    console.log(data)
    navigate('/success')
  }
  const onError = (errors: any, e: any) => console.log(errors, e)

  useEffect(() => {
    if (!cart.length) {
      navigate('/')
    }
  }, [])

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit, onError)}>
      <CheckoutOrder />
      <CheckoutCoffeeSelected />
    </CheckoutContainer>
  )
}

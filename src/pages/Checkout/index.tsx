import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutCoffeeSelected } from './CheckoutCoffeeSelected'
import { CheckoutOrder } from './CheckoutOrder'
import { CheckoutContainer } from './styled'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { handleSubmit } = useFormContext()

  const onSubmit = (data: any, e: any) => {
    console.log(data)
    navigate('/success')
  }
  const onError = (errors: any, e: any) => console.log(errors, e)

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit, onError)}>
      <CheckoutOrder />
      <CheckoutCoffeeSelected />
    </CheckoutContainer>
  )
}

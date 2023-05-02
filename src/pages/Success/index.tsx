import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { IconWithLabel } from '../Home/Hero/styles'
import { NewCheckoutFormData } from '../../App'

import deliveryIMG from '../../assets/delivery.svg'
import { SuccessPageContainer, SuccessPageInformation } from './styles'

const TYPE_METHOD_PAYMENT = {
  debit: 'Cartão de Débito',
  credit: 'Cartão de Crédito',
  money: 'Dinheiro',
}

export function SuccessPage() {
  const { state } = useLocation()
  const formData = state as NewCheckoutFormData
  const navigate = useNavigate()

  useEffect(() => {
    if (!formData) {
      navigate('/')
    }
  }, [])

  return (
    <SuccessPageContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessPageInformation>
        <div>
          <ul>
            {formData && (
              <>
                <li>
                  <IconWithLabel variant="coffee">
                    <div>
                      <MapPin size={16} weight="fill" />
                    </div>
                  </IconWithLabel>
                  <div>
                    <div>
                      Entrega em{' '}
                      <strong>
                        {formData.street} {formData.number}
                      </strong>
                    </div>
                    <div>
                      {formData.district} - {formData.city}, {formData.uf}
                    </div>
                  </div>
                </li>
                <li>
                  <IconWithLabel variant="timer">
                    <div>
                      <Timer size={16} weight="fill" />
                    </div>
                  </IconWithLabel>
                  <div>
                    <div>Previsão de entrega</div>
                    <strong>20 min - 30 min </strong>
                  </div>
                </li>
                <li>
                  <IconWithLabel variant="shopping">
                    <div>
                      <CurrencyDollar size={16} weight="fill" />
                    </div>
                  </IconWithLabel>
                  <div>
                    <div>Pagamento na entrega</div>
                    <strong>
                      {
                        TYPE_METHOD_PAYMENT[
                          formData.paymentMethod as keyof typeof TYPE_METHOD_PAYMENT
                        ]
                      }
                    </strong>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
        <img src={deliveryIMG} alt="Entregador" />
      </SuccessPageInformation>
    </SuccessPageContainer>
  )
}

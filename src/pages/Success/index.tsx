import { SuccessPageContainer, SuccessPageInformation } from './styles'
import deliveryIMG from '../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconWithLabel } from '../Home/Hero/styles'

export function SuccessPage() {
  return (
    <SuccessPageContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessPageInformation>
        <div>
          <ul>
            <li>
              <IconWithLabel variant="coffee">
                <div>
                  <MapPin size={16} weight="fill" />
                </div>
              </IconWithLabel>
              <div>
                <div>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </div>
                <div>Farrapos - Porto Alegre, RS</div>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </li>
          </ul>
        </div>
        <img src={deliveryIMG} alt="Entregador" />
      </SuccessPageInformation>
    </SuccessPageContainer>
  )
}

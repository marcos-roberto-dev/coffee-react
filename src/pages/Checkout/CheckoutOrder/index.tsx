import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Card } from '../../../components/Card'
import { defaultTheme } from '../../../styles/themes/default'
import { ButtonInputRadio } from '../../../components/ButtonInputRadio'

import {
  CheckoutHeaderContent,
  CheckoutOrderContainer,
  FormCard,
  FormInputs,
  SelectedKindPayment,
} from './styles'

export function CheckoutOrder() {
  const {
    register,
    reset,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    return () => {
      reset()
    }
  }, [reset])
  return (
    <CheckoutOrderContainer>
      <h2>Complete seu pedido</h2>
      <Card>
        <FormCard>
          <header>
            <CheckoutHeaderContent>
              <MapPinLine size={22} color={defaultTheme['--yellow-dark']} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutHeaderContent>
          </header>

          <FormInputs>
            <div>
              <input type="number" placeholder="CEP" {...register('cep')} />
              <ErrorMessage
                errors={errors}
                name="cep"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
            <div>
              <input type="text" placeholder="Rua" {...register('street')} />
              <ErrorMessage
                errors={errors}
                name="street"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
            <div>
              <input type="text" placeholder="Número" {...register('number')} />
              <ErrorMessage
                errors={errors}
                name="number"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <ErrorMessage
                errors={errors}
                name="complement"
                render={({ message }) => <span>{message}</span>}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <ErrorMessage
                errors={errors}
                name="district"
                render={({ message }) => <span>{message}</span>}
              />
            </div>

            <div>
              <input type="text" placeholder="Cidade" {...register('city')} />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ message }) => <span>{message}</span>}
              />
            </div>

            <div>
              <input type="text" placeholder="UF" {...register('uf')} />
              <ErrorMessage
                errors={errors}
                name="uf"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
          </FormInputs>
        </FormCard>
      </Card>

      <Card>
        <SelectedKindPayment>
          <header>
            <CheckoutHeaderContent>
              <CurrencyDollar size={22} color={defaultTheme['--purple']} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutHeaderContent>
          </header>

          <ul>
            <li>
              <ButtonInputRadio
                idLabel="credit"
                registerName="paymentMethod"
                value="credit"
              >
                <CreditCard size={16} color={defaultTheme['--purple']} />
                Cartão de Crédito
              </ButtonInputRadio>
            </li>
            <li>
              <ButtonInputRadio
                idLabel="debit"
                registerName="paymentMethod"
                value="debit"
              >
                <Bank size={16} color={defaultTheme['--purple']} />
                Cartão de Débito
              </ButtonInputRadio>
            </li>
            <li>
              <ButtonInputRadio
                idLabel="money"
                registerName="paymentMethod"
                value="money"
              >
                <Money size={16} color={defaultTheme['--purple']} />
                Dinheiro
              </ButtonInputRadio>
            </li>
          </ul>
          <div>
            <ErrorMessage
              errors={errors}
              name="paymentMethod"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
        </SelectedKindPayment>
      </Card>
    </CheckoutOrderContainer>
  )
}

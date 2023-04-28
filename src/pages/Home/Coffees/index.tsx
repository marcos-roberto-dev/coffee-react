import {
  CoffeContentText,
  CoffeFooter,
  CoffeItem,
  CoffeeControl,
  CoffeeListContainer,
  CoffeePrice,
  CoffeesContainer,
} from './styles'
import { ButtonQuantityItem } from '../../../components/ButtonQuantityItem'
import { ShoppingCart } from 'phosphor-react'
const coffees = [
  {
    id: 1,
    name: 'americano',
    alt: 'Tradicional',
  },
  {
    id: 2,
    name: 'arabe',
    alt: 'Tradicional',
  },
  {
    id: 3,
    name: 'cafe_com_leite',
    alt: 'Tradicional',
  },
  {
    id: 4,
    name: 'cafe_gelado',
    alt: 'Tradicional',
  },
  {
    id: 5,
    name: 'capuccino',
    alt: 'Tradicional',
  },
  {
    id: 6,
    name: 'chocolate_quente',
    alt: 'Tradicional',
  },
  {
    id: 7,
    name: 'cubano',
    alt: 'Tradicional',
  },
  {
    id: 8,
    name: 'expresso_cremoso',
    alt: 'Tradicional',
  },
]
export function CoffeesSection() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListContainer>
        {coffees.map((coffee) => (
          <CoffeItem key={coffee.id}>
            <img
              src={
                new URL(
                  `../../../assets/coffees/${coffee.name}.svg`,
                  import.meta.url,
                ).href
              }
              alt={coffee.alt}
            />

            <CoffeContentText>
              <span>Tradicional</span>
              <strong>Expresso Tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeContentText>

            <CoffeFooter>
              <CoffeePrice>
                <span>R$ </span>
                <strong>9,90</strong>
              </CoffeePrice>
              <CoffeeControl>
                <ButtonQuantityItem />
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CoffeeControl>
            </CoffeFooter>
          </CoffeItem>
        ))}
      </CoffeeListContainer>
    </CoffeesContainer>
  )
}

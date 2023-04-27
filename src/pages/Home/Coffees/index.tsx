import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeContentText,
  CoffeFooter,
  CoffeItem,
  CoffeeControlShip,
  CoffeeListContainer,
  CoffeePrice,
  CoffeesContainer,
} from './styles'
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
              <CoffeeControlShip>
                <div>
                  <button>
                    <Minus size={14} />
                  </button>
                  <input type="number" step={1} min={1} value={1} />
                  <button>
                    <Plus size={14} />
                  </button>
                </div>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CoffeeControlShip>
            </CoffeFooter>
          </CoffeItem>
        ))}
      </CoffeeListContainer>
    </CoffeesContainer>
  )
}

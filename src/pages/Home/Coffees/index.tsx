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
import { useState, useContext } from 'react'
import {
  CoffeeItem,
  ShoppingCartContext,
} from '../../../context/ShoppingCartContext'

const coffeesAPI = [
  {
    id: 1,
    name: 'americano',
    label: 'Expresso Tradicional',
    qnt: 0,
    price: 3.9,
    kinds: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 2,
    name: 'arabe',
    label: 'Árabe',
    qnt: 0,
    price: 9.9,
    kinds: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: 3,
    name: 'cafe_com_leite',
    label: 'Café com leite',
    qnt: 0,
    price: 4.9,
    kinds: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 4,
    name: 'cafe_gelado',
    label: 'Expresso Gelado',
    qnt: 0,
    price: 3.9,
    kinds: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    id: 5,
    name: 'capuccino',
    label: 'Capuccino',
    qnt: 0,
    price: 5.9,
    kinds: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 6,
    name: 'chocolate_quente',
    label: 'Chocolate Quente',
    qnt: 0,
    price: 5.9,
    kinds: ['Tradicional', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: 7,
    name: 'cubano',
    label: 'Cubano',
    qnt: 0,
    price: 9.9,
    kinds: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: 8,
    name: 'expresso_cremoso',
    label: 'Expresso Cremoso',
    qnt: 0,
    price: 3.9,
    kinds: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
  },
]
export function CoffeesSection() {
  const [coffees, setCoffees] = useState(coffeesAPI)
  const { addCoffeInShoppingCart } = useContext(ShoppingCartContext)

  function handleChange(qnt: number, id: number, type = 'DEFAULT') {
    const coffeeMap = coffees.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          qnt: type === 'DEFAULT' ? (coffee.qnt += qnt) : qnt,
        }
      }
      return coffee
    })
    setCoffees(coffeeMap)
  }

  function handlePlusQuantityChange(id: number) {
    handleChange(1, id)
  }

  function handleMinusQuantityChange(id: number) {
    handleChange(-1, id)
  }

  function handleChangeQuantityChange(qnt: number, id: number) {
    handleChange(qnt, id, 'CHANGE')
  }

  function addShoppingCart(coffee: CoffeeItem): void {
    addCoffeInShoppingCart(coffee)
  }

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
              alt={coffee.label}
            />

            <CoffeContentText>
              <div>
                {coffee.kinds.map((kind) => (
                  <span key={kind}>{kind}</span>
                ))}
              </div>

              <strong>{coffee.label}</strong>
              <span>{coffee.description}</span>
            </CoffeContentText>

            <CoffeFooter>
              <CoffeePrice>
                <span>R$ </span>
                <strong>
                  {coffee.price.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </CoffeePrice>
              <CoffeeControl>
                <ButtonQuantityItem
                  quantity={coffee.qnt}
                  coffeeId={coffee.id}
                  onMinusMinusQuantityChange={handleMinusQuantityChange}
                  onPlusQuantityChange={handlePlusQuantityChange}
                  onChange={handleChangeQuantityChange}
                />
                <button onClick={() => addShoppingCart(coffee)}>
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

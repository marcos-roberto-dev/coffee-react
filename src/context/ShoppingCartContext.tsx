import { createContext, useState, ReactNode } from 'react'
export interface CoffeeItem {
  id: number
  name: string
  label: string
  qnt: number
  price: number
  kinds: string[]
  description: string
}

interface TotalAmount {
  totalAmountCoffees: string
  totalAmountWithDelivery: string
}

interface IShoppingCartContext {
  cart: CoffeeItem[]
  deliveryTax: number
  addCoffeInShoppingCart: (coffee: CoffeeItem) => void
  totalAmountCheckout: () => TotalAmount
  removeCoffeeInShoppingCart: (id: number) => void
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext)

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [deliveryTax] = useState(3.5)
  const [cart, setCart] = useState<CoffeeItem[]>([])

  function addCoffeInShoppingCart(coffee: CoffeeItem) {
    const hasItemInShoppingCart = cart.find(
      (shoppingCartItem) => shoppingCartItem.id === coffee.id,
    )
    if (hasItemInShoppingCart) {
      const shoppingCartMap = cart.map((shoppingCartItem) => {
        if (shoppingCartItem.id === coffee.id) {
          return {
            ...shoppingCartItem,
            qnt: coffee.qnt,
          }
        }
        return coffee
      })
      setCart(shoppingCartMap)
      return
    }

    setCart((state) => [...state, coffee])
  }

  function totalAmountCheckout() {
    return {
      totalAmountCoffees: cart
        .reduce(
          (previous, currentValue) =>
            (previous += currentValue.price * currentValue.qnt),
          0,
        )
        .toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        }),
      totalAmountWithDelivery: cart
        .reduce(
          (previous, currentValue) =>
            (previous += currentValue.price * currentValue.qnt),
          deliveryTax,
        )
        .toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        }),
    }
  }

  function removeCoffeeInShoppingCart(id: number) {
    const shoppingCartFilter = cart.filter((coffee) => coffee.id !== id)
    setCart(shoppingCartFilter)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        deliveryTax,
        addCoffeInShoppingCart,
        totalAmountCheckout,
        removeCoffeeInShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

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
  addCoffeeInShoppingCart: (coffee: CoffeeItem) => void
  totalAmountCheckout: () => TotalAmount
  removeCoffeeInShoppingCart: (id: number) => void
  clearCoffeeShoppingCart: () => void
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

  function addCoffeeInShoppingCart(coffee: CoffeeItem) {
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

  function clearCoffeeShoppingCart() {
    setCart([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        deliveryTax,
        addCoffeeInShoppingCart,
        totalAmountCheckout,
        removeCoffeeInShoppingCart,
        clearCoffeeShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

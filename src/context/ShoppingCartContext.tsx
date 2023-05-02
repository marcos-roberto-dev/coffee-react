import { createContext, ReactNode, useReducer } from 'react'
import {
  CoffeeItem,
  ShoppingCartState,
  shoppingCartReducer,
} from '../reducers/shoppingcart/reducer'
import {
  addNewCoffeeInShoppingCartAction,
  deleteCoffeeInShoppingCartAction,
  clearCoffeeInShoppingCartAction,
} from '../reducers/shoppingcart/actions'

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
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    cart: [],
    deliveryTax: 3.5,
  } as ShoppingCartState)

  function addCoffeeInShoppingCart(coffee: CoffeeItem) {
    dispatch(addNewCoffeeInShoppingCartAction({ newCoffee: coffee }))
  }

  function removeCoffeeInShoppingCart(id: number) {
    dispatch(deleteCoffeeInShoppingCartAction(id))
  }

  function clearCoffeeShoppingCart() {
    dispatch(clearCoffeeInShoppingCartAction())
  }

  function totalAmountCheckout() {
    return {
      totalAmountCoffees: state.cart
        .reduce(
          (previous, currentValue) =>
            (previous += currentValue.price * currentValue.qnt),
          0,
        )
        .toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        }),
      totalAmountWithDelivery: state.cart
        .reduce(
          (previous, currentValue) =>
            (previous += currentValue.price * currentValue.qnt),
          state.deliveryTax,
        )
        .toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        }),
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: state.cart,
        deliveryTax: state.deliveryTax,
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

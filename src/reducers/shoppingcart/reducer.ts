export interface CoffeeItem {
  id: number
  name: string
  label: string
  qnt: number
  price: number
  kinds: string[]
  description: string
}

export interface ShoppingCartState {
  cart: CoffeeItem[]
  deliveryTax: number
}

export const TYPES_SHOPPING_CART_MUTATION = {
  ADD_NEW_COFFEE: {
    type: 'ADD_NEW_COFFEE',
    mutation: (
      state: ShoppingCartState,
      payload: {
        newCoffee: CoffeeItem
      },
    ) => {
      const hasItemInShoppingCart = state.cart.find(
        (shoppingCartItem) => shoppingCartItem.id === payload.newCoffee.id,
      )
      if (hasItemInShoppingCart) {
        const shoppingCartMap = state.cart.map((shoppingCartItem) => {
          if (shoppingCartItem.id === payload.newCoffee.id) {
            return {
              ...shoppingCartItem,
              qnt: payload.newCoffee.qnt,
            }
          }
          console.log({ ...state, cart: shoppingCartMap })
          return shoppingCartItem
        })
        return { ...state, cart: shoppingCartMap }
      }

      return { ...state, cart: [...state.cart, payload.newCoffee] }
    },
  },
  DELETE_COFFEE: {
    type: 'DELETE_COFFEE',
    mutation: (state: ShoppingCartState, payload: number) => {
      const shoppingCartFilter = state.cart.filter(
        (coffee) => coffee.id !== payload,
      )
      return { ...state, cart: shoppingCartFilter }
    },
  },
  CLEAR_SHOPPING_CART: {
    type: 'CLEAR_SHOPPING_CART',
    mutation: (state: ShoppingCartState) => {
      return { ...state, cart: [] }
    },
  },
} as const

export interface ActionPayload {
  type: keyof typeof TYPES_SHOPPING_CART_MUTATION
  payload?: any
}

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: ActionPayload,
) {
  return (
    TYPES_SHOPPING_CART_MUTATION[action.type].mutation(state, action.payload) ??
    state
  )
}

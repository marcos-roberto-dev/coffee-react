import { CoffeeItem, TYPES_SHOPPING_CART_MUTATION } from './reducer'

export function addNewCoffeeInShoppingCartAction({
  newCoffee,
}: {
  newCoffee: CoffeeItem
}) {
  return {
    type: TYPES_SHOPPING_CART_MUTATION.ADD_NEW_COFFEE.type,
    payload: {
      newCoffee,
    },
  }
}

export function deleteCoffeeInShoppingCartAction(id: number) {
  return {
    type: TYPES_SHOPPING_CART_MUTATION.DELETE_COFFEE.type,
    payload: id,
  }
}

export function clearCoffeeInShoppingCartAction() {
  return {
    type: TYPES_SHOPPING_CART_MUTATION.DELETE_COFFEE.type,
  }
}

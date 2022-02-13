import { useReducer } from "react"

import { CartContext } from "./cart-context"
import { cartReducer, defaultCartState } from "../reducers/cartReducer"

export const CartProvider = ({children}) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = item => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item
    })
  }

  const removeItemHandler = id => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id
    })
  }

  const clearCartHandler = () => {
    dispatchCartAction({
      type: 'CLEAR'
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

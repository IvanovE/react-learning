export const defaultCartState = {
  items: [],
  totalAmount: 0
}

export const cartReducer = (state, action) => {
  let updatedTotalAmount
  let updatedItems
  let updatedItem
  let existingCartItem

  switch (action.type) {
    case 'ADD_ITEM':
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
      existingCartItem = state.items[existingCartItemIndex]

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(action.item)
      }

      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }

    case 'REMOVE_ITEM':
      const itemIndex = state.items.findIndex(item => item.id === action.id)
      existingCartItem = state.items[itemIndex]
      if (existingCartItem.amount - 1 === 0) {
        updatedItems = state.items.filter(item => item.id !== action.id)
      } else {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1
        }
        updatedItems = state.items
        updatedItems[itemIndex] = updatedItem
      }
      updatedTotalAmount = state.totalAmount - existingCartItem.price

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }

    case 'CLEAR':
      return defaultCartState

    default: return defaultCartState
  }
}

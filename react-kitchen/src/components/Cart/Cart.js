import styles from './Cart.module.css'
import { useContext } from "react"

import { Modal } from "../../UI/Modal/Modal"
import { CartItem } from "./CartItem/CartItem"
import { CartContext } from "../../store/cart-context"

export const Cart = ({setCartIsShown}) => {
  const cartContext = useContext(CartContext)

  const addCartItem = item => {
    cartContext.addItem({
      ...item,
      amount: 1
    })
  }

  const removeCartItem = id => {
    cartContext.removeItem(id)
  }

  const totalAmount = cartContext.totalAmount.toFixed(2)
  const hasItems = cartContext.items.length > 0
  const orderedItems = cartContext.items.map(item => {
    return (
      <CartItem key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={addCartItem.bind(null, item)}
                onRemove={removeCartItem.bind(null, item.id)}
      />
    )
  })

  return (
    <Modal setCartIsShown={setCartIsShown}>
      {hasItems &&
        <ul className={styles['cart-items']}>
          {orderedItems}
        </ul>
      }
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={() => setCartIsShown(false)}>Close</button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

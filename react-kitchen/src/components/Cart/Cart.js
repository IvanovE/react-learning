import styles from './Cart.module.css'
import { useContext, useState } from "react"

import { Modal } from "../../UI/Modal/Modal"
import { CartItem } from "./CartItem/CartItem"
import { CartContext } from "../../store/cart-context"
import { Checkout } from "./Checkout/Checkout"

export const Cart = ({setCartIsShown}) => {
  const cartContext = useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState(false)
  const [isOrdered, setIsOrdered] = useState(false)

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

  const modalActions = (
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={() => setCartIsShown(false)}>Close</button>
        {hasItems && <button className={styles.button}
                                             onClick={() => setIsCheckout(true)}>Order</button>}
      </div>
  )

  const makeOrder = (userData) => {
    const readyOrder = {
      ...userData,
      items: cartContext.items
    }
    setIsOrdered(true)

    console.log(readyOrder)
    // send ready order to database

    cartContext.clearCart()
  }

  const orderIsSuccessful = (
    <>
      <p>Order is made! We will call you in a minute!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => setCartIsShown(false)}>Close</button>
      </div>
    </>
  )

  const modalToOrder = (
    <>
      {hasItems &&
        <ul className={styles['cart-items']}>
          {orderedItems}
        </ul>
      }
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout makeOrder={makeOrder} setCartIsShown={setCartIsShown}/>}
      {!isCheckout && modalActions}
    </>
  )

  return (
    <Modal setCartIsShown={setCartIsShown}>
      {!isOrdered && modalToOrder}
      {isOrdered && orderIsSuccessful}
    </Modal>
  )
}

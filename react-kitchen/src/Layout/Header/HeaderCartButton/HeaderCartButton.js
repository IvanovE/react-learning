import styles from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from "react"

import { CartContext } from "../../../store/cart-context"
import { CartIcon } from "./CartIcon"

export const HeaderCartButton = ({setCartIsShown}) => {
  const cartContext = useContext(CartContext)
  const [animationBtn, setAnimationBtn] = useState(false)

  const { items } = cartContext

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + +item.amount
  }, 0)

  const btnClasses = `${styles.btn} ${animationBtn ? styles.bump : ''}`

  useEffect(() => {
    setAnimationBtn(true)
    const timer = setTimeout(() => {
      setAnimationBtn(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={() => setCartIsShown(true)}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Order</span>
      {numberOfItems > 0 &&
        <span className={styles.badge}>
          {numberOfItems}
        </span>
      }
    </button>
  )
}

import styles from './ItemMeal.module.css'
import { useContext } from "react"

import { ItemMealForm } from "../ItemMealForm/ItemMealForm"
import { CartContext } from "../../../store/cart-context"

export const ItemMeal = ({title, description, price, id}) => {
  const parsedPrice = `$${price.toFixed(2)}`
  const cartContext = useContext(CartContext)

  const addToCartHandler = (amount) => {
    if (cartContext.items)

    cartContext.addItem({
      id: id,
      name: title,
      amount: +amount,
      price: price
    })
  }

  return (
    <div className={styles.meal}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{parsedPrice}</div>
      </div>
      <ItemMealForm addToCartHandler={addToCartHandler} />
    </div>
  )
}

import styles from './CartItem.module.css'

export const CartItem = ({name, price, amount, onRemove, onAdd}) => {
  const parsedPrice = `$${price.toFixed(2)}`

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{parsedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={onRemove}>−</button>
        <button className={styles.btn} onClick={onAdd}>+</button>
      </div>
    </li>
  )
}

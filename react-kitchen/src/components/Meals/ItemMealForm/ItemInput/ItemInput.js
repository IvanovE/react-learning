import styles from './ItemInput.module.css'

export const ItemInput = ({label, setAmountInput, input}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input className={styles.input} id={label} {...input} onChange={(event => setAmountInput(event.target.value))} />
    </div>
  )
}

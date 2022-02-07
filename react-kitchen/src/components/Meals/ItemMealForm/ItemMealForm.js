import styles from './ItemMealForm.module.css'

import { ItemInput } from "./ItemInput/ItemInput"
import { useState } from "react"

export const ItemMealForm = ({addToCartHandler}) => {
  const [amountInput, setAmountInput] = useState('1')
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = event => {
    event.preventDefault()
    if (amountInput.trim().length === 0 || amountInput < 1) {
      setAmountIsValid(false)
      return
    }
    setAmountIsValid(true)
    addToCartHandler(amountInput)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <ItemInput label="Amount:" setAmountInput={setAmountInput} input={{
        id: 'amount',
        type: 'number',
        value: amountInput
      }}/>
      <button className={styles.btn}>Add</button>
      {!amountIsValid && <p>Please, enter a valid amount!</p>}
    </form>
  )
}

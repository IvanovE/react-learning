import styles from './Checkout.module.css'
import { useState } from "react"
import { isEmpty } from "../../../utils/isEmpty"

export const Checkout = ({setCartIsShown, makeOrder}) => {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [postal, setPostal] = useState('')
  const [city, setCity] = useState('')
  const [nameIsValid, setNameIsValid] = useState(true)
  const [streetIsValid, setStreetIsValid] = useState(true)
  const [postalIsValid, setPostalIsValid] = useState(true)
  const [cityIsValid, setCityIsValid] = useState(true)

  const confirmHandler = (e) => {
    e.preventDefault()

    isEmpty(name) ? setNameIsValid(false) : setNameIsValid(true)
    isEmpty(street) ? setStreetIsValid(false) : setStreetIsValid(true)
    isEmpty(postal) ? setPostalIsValid(false) : setPostalIsValid(true)
    isEmpty(city) ? setCityIsValid(false) : setCityIsValid(true)

    if(!isEmpty(name) && !isEmpty(street) && !isEmpty(postal) && !isEmpty(city)) {
      setName('')
      setStreet('')
      setPostal('')
      setCity('')
      makeOrder({
        name,
        street,
        postal,
        city
      })
    }
  }

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${nameIsValid ? '' :styles.invalid}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={event => setName(event.target.value)}/>
        {!nameIsValid && <p>Name is required</p>}
      </div>
      <div className={`${styles.control} ${streetIsValid ? '' :styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={street} onChange={event => setStreet(event.target.value)}/>
        {!streetIsValid && <p>Street is required</p>}
      </div>
      <div className={`${styles.control} ${postalIsValid ? '' :styles.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" value={postal} onChange={event => setPostal(event.target.value)}/>
        {!postalIsValid && <p>Postal Code is required</p>}
      </div>
      <div className={`${styles.control} ${cityIsValid ? '' :styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)}/>
        {!cityIsValid && <p>City is required</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles['button-alt']} onClick={() => setCartIsShown(false)}>Cancel</button>
        <button className={styles.button}>Confirm</button>
      </div>
    </form>
  )
}

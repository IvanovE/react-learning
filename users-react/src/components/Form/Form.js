import styles from './Form.module.css'

import { Input } from "./Input/Input"
import { Button } from "../Button/Button"
import { useState } from "react"
import { ErrorModal } from "../Modal/ErrorModal"

export const Form = ({setUsersList}) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState(false)

  const addUserHandler = e => {
    e.preventDefault()
    if (name.trim().length === 0
      || age.length === 0
      || +age < 0
      || age.startsWith('0')) {
      setError(true)
      return
    }

    setUsersList(prevList => {
      return [
        ...prevList,
        {
          age,
          name,
          key: Math.random()
        }
      ]
    })
    setName('')
    setAge('')
  }

  return (
    <>
      {
        error && <ErrorModal
        setError={setError}
        title="Oooooops..."
        message="You should enter valid info :)"/>
      }
      <form className={styles.container} onSubmit={addUserHandler}>
        <Input label={'Username'} type={'text'} value={name} setValue={setName}/>
        <Input label={'Age'} type={'number'} value={age} setValue={setAge}/>
        <Button type={'submit'}>Add User</Button>
      </form>
    </>
  )
}

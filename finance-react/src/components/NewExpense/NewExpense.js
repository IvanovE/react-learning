import './NewExpense.css'
import { Form } from "./Form/Form"
import { useState } from "react"

export const NewExpense = ({setUserInput, initialState}) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  return (
    <div className="new-expense">
      {!isEditing &&
        <button className="edit-btn" onClick={startEditingHandler}>Add New Expense</button>
      }
      {isEditing &&
        <Form setUserInput={setUserInput} initialState={initialState} setIsEditing={setIsEditing} />
      }
    </div>
  )
}

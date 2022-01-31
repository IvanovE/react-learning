import { Expenses } from "./components/ExpenseList/Expenses"
import { NewExpense } from "./components/NewExpense/NewExpense"
import { useState } from "react"

const expenses = []

export const App = () => {
  const initialState = {
    title: '',
    price: '',
    date: ''
  }
  const [userInput, setUserInput] = useState(initialState)

  if (userInput.id) {
    expenses.push(userInput)
  }

  return (
    <>
      <NewExpense setUserInput={setUserInput} initialState={initialState} />
      <Expenses expenses={expenses} />
    </>
  )
}

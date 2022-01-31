import { ExpenseItem } from "../../ExpenseItem/ExpenseItem"

import './ExpensesList.css'

export const ExpensesList = ({items}) => {
  if (items.length <= 0) {
    return (
      <h2 className="list-fallback">Found no expenses.</h2>
    )
  }
  return (
    items.map(expense =>
      <ExpenseItem title={expense.title}
                   price={expense.price}
                   date={new Date(expense.date)}
                   key={expense.id}
      />)
  )
}

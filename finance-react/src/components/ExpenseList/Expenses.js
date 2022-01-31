import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter"
import { useState } from "react"
import { ExpensesList } from "./ExpensesList/ExpensesList"

import './Expenses.css'
import {ExpensesChart} from "../Chart/ExpensesChart/ExpensesChart";

export const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div className="item-list">
      <ExpenseFilter setFilteredYear={setFilteredYear} selectedYear={filteredYear}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </div>
  )
}

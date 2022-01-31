import './ExpenseFilter.css'

export const ExpenseFilter = ({setFilteredYear, selectedYear}) => {
  const filterChangeHandler = (e) => {
    setFilteredYear(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='control'>
        <label className="title">Filter by year</label>
        <select className="options" value={selectedYear} onChange={filterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

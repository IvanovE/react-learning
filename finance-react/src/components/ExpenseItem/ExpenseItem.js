import './ExpenseItem.css'

export const ExpenseItem = ({title, price, date}) => {
  const month = date.toLocaleString('en-US', {month: 'long'})
  const day = date.toLocaleString('en-US', {day: '2-digit'})
  const year = date.getFullYear()

  return (
    <div className="item">
      <div className="item-date">
        <div className="item-date__month">{month}</div>
        <div className="item-date__year">{year}</div>
        <div className="item-date__day">{day}</div>
      </div>
      <div className="item__info">
        <h2>{title}</h2>
        <div className="item__price">${price}</div>
      </div>
    </div>
  )
}

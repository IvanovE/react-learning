import './Form.css'
import { useState } from "react"

export const Form = ({setUserInput, initialState, setIsEditing}) => {
  const [inputs, setInputs] = useState(initialState)

  const submitHandler = (e) => {
    e.preventDefault()
    setUserInput({
      ...inputs,
      date: new Date(inputs.date),
      id: Math.random()
    })
    setInputs(initialState)
    setIsEditing(false)
  }

  const inputChangeHandler = (e, type) => {
    setInputs(prevState => {
      return {
        ...prevState,
        [type]: e.target.value
      }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="controls">
        <div>
          <input className="input"
                 type="text"
                 placeholder="Title"
                 value={inputs.title}
                 onChange={e => inputChangeHandler(e, 'title')}/>
        </div>
        <div>
          <input className="input"
                 type="number"
                 placeholder="Price"
                 min="0.01"
                 step="0.01"
                 value={inputs.price}
                 onChange={e => inputChangeHandler(e, 'price')}/>
        </div>
        <div>
          <input className="input"
                 type="date"
                 placeholder="Date"
                 min="2019-01-01"
                 max="2022-31-12"
                 value={inputs.date}
                 onChange={e => inputChangeHandler(e, 'date')}/>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        <button className="btn" type="submit">Add Expense</button>
      </div>
    </form>
  )
}

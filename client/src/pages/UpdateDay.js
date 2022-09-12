import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateDay = () => {
  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    dayOfWeek: `${location.state.day.dayOfWeek}`
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/days/${location.state.day.id}`,
      formState
    )
    console.log(res)
    setFormState(initialState)
    navigate(-1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="title-wrapper">
          <label htmlFor="dayOfWeek"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="dayOfWeek"
            placeholder="Schedule Name"
            value={formState.dayOfWeek}
            name="dayOfWeek"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateDay

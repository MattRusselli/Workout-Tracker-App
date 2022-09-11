import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateSchedule = () => {
  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    scheduleName: `${location.state.schedule.scheduleName}`
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/schedules/${location.state.schedule.id}`,
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
          <label htmlFor="scheduleName"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="scheduleName"
            placeholder="Schedule Name"
            value={formState.scheduleName}
            name="scheduleName"
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

export default UpdateSchedule

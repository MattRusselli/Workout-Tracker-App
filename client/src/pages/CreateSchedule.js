import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CreateSchedule = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const userId = user.id
  const [formValues, setFormValues] = useState({
    scheduleName: '',
    userId: user.id
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const newSchedule = async (data) => {
    const res = await axios.post(
      `http://localhost:3001/schedules/${userId}`,
      data
    )
    console.log(res.data)
  }

  const handleSubmitSchedule = async (e) => {
    e.preventDefault()
    let data = { scheduleName: formValues.scheduleName, userId: user.id }
    newSchedule(data)
    setFormValues({ scheduleName: '', userId: user.id })
    navigate('/schedules')
  }

  return user && authenticated ? (
    <div>
      <form onSubmit={handleSubmitSchedule}>
        <div className="title-wrapper">
          <label htmlFor="scheduleName"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="scheduleName"
            placeholder="Schedule Name"
            value={formValues.scheduleName}
            name="scheduleName"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create
        </button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreateSchedule

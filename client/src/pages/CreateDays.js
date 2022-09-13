import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CreateDay = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [scheduleId, setScheduleId] = useState([])
  const [formValues, setFormValues] = useState({
    dayOfWeek: '',
    scheduleId: scheduleId
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  //pulling the schedule id from the user
  useEffect(() => {
    const getScheduleId = async () => {
      const data = await axios.get(`http://localhost:3001/users/${user.id}`)
      console.log(data.data.Schedules[0].id)
      setScheduleId(data.data.Schedules[0].id)
    }
    getScheduleId()
  }, [])

  // console.log(scheduleId)

  const newDay = async (data) => {
    const res = await axios.post(
      `http://localhost:3001/days/${scheduleId}`,
      data
    )
    console.log(res.data)
  }

  const handleSubmitDay = async (e) => {
    e.preventDefault()
    let data = { dayOfWeek: formValues.dayOfWeek, scheduleId: scheduleId }
    newDay(data)
    setFormValues({ dayOfWeek: '', scheduleId: scheduleId })
    navigate('/schedules/days')
  }
  return user && authenticated ? (
    <div>
      <form onSubmit={handleSubmitDay}>
        <div className="title-wrapper">
          <label htmlFor="dayOfWeek"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="dayOfWeek"
            placeholder="Monday"
            value={formValues.dayOfWeek}
            name="dayOfWeek"
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

export default CreateDay

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CreateExercises = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [dayId, setDayId] = useState([])
  const [scheduleId, setScheduleId] = useState([])
  const [formValues, setFormValues] = useState({
    exerciseName: '',
    weight: '',
    sets: '',
    reps: '',
    dayId: dayId
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const getScheduleId = async () => {
      const data = await axios.get(`http://localhost:3001/users/${user.id}`)
      console.log(data.data.Schedules[0].id)
      setScheduleId(data.data.Schedules[0].id)
    }
    getScheduleId()
  }, [])

  useEffect(() => {
    const getDayId = async () => {
      const data = await axios.get(
        `http://localhost:3001/schedules/${scheduleId}`
      )
      console.log(data.data[0].Days[0].id)
      setDayId(data.data[0].Days[0].id)
    }
    getDayId()
  }, [])

  const newExercise = async (data) => {
    const res = await axios.post(
      `http://localhost:3001/exercises/${dayId}`,
      data
    )
    console.log(res.data)
  }

  const handleSubmitExercise = async (e) => {
    e.preventDefault()
    let data = {
      exerciseName: formValues.exerciseName,
      weight: formValues.weight,
      sets: formValues.sets,
      reps: formValues.reps,
      dayId: dayId
    }
    newExercise(data)
    setFormValues({
      exerciseName: '',
      weight: '',
      sets: '',
      reps: '',
      dayId: dayId
    })
    navigate('/schedules/days/exercises')
  }
  return user && authenticated ? (
    <div>
      <form onSubmit={handleSubmitExercise}>
        <div className="title-wrapper">
          <label htmlFor="exerciseName"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="exerciseName"
            placeholder="Flat DB Press"
            value={formValues.exerciseName}
            name="exerciseName"
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="weight"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="number"
            id="weight"
            placeholder="60"
            value={formValues.weight}
            name="weight"
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="sets"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="number"
            id="sets"
            placeholder="3"
            value={formValues.sets}
            name="sets"
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="reps"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="number"
            id="reps"
            placeholder="10"
            value={formValues.reps}
            name="reps"
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

export default CreateExercises

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateExercise = () => {
  let location = useLocation()
  let navigate = useNavigate()

  const initialState = {
    exerciseName: `${location.state.exercise.exerciseName}`,
    weight: `${location.state.exercise.weight}`,
    sets: `${location.state.exercise.sets}`,
    reps: `${location.state.exercise.reps}`
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/exercises/${location.state.exercise.id}`,
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
          <label htmlFor="exerciseName"> </label>
          <input
            className="title-input"
            onChange={handleChange}
            type="text"
            id="exerciseName"
            placeholder="Flat DB Press"
            value={formState.exerciseName}
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
            value={formState.weight}
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
            value={formState.sets}
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
            value={formState.reps}
            name="reps"
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

export default UpdateExercise

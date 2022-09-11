import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NewExerciseForm from '../components/NewExerciseForm'
import {
  handleSubmit,
  handleDelete,
  handleUpdate
} from '../services/Exercises.js'

const CreateExercises = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [exerciseName, setExerciseName] = useState('')
  const [weight, setWeight] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')

  const handleSubmitExercise = async (e) => {
    e.preventDefault()
    await handleSubmit(user.id, {
      exerciseName,
      weight,
      sets,
      reps
    })
    navigate('/schedules/days/exercises')
    setExerciseName()
    setWeight()
    setSets()
    setReps()
  }
  return user && authenticated ? (
    <div className="grid col-4">
      <NewExerciseForm
        exerciseName={exerciseName}
        setExerciseName={setExerciseName}
        weight={weight}
        setWeight={setWeight}
        sets={sets}
        setSets={setSets}
        reps={reps}
        setReps={setReps}
        handleSubmitExercise={handleSubmitExercise}
      />
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreateExercises

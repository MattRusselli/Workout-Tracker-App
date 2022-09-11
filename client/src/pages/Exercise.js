import { useEffect, useState } from 'react'
import { GetExercises } from '../services/Exercises'
import { useNavigate, useParams } from 'react-router-dom'

const Exercise = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const { dayId } = useParams()
  const [day, setDay] = useState([])
  const [Exercises, setExercises] = useState([])

  useEffect(() => {
    const dayName = localStorage.getItem('day')
    let selDay = JSON.parse(dayName)
    setDay(selDay)
  }, [])

  useEffect(() => {
    const handleExercises = async () => {
      const data = await GetExercises(dayId)
      setExercises(data)
    }
    handleExercises()
  }, [day])

  return user && authenticated ? (
    <div className="exercise-page">
      <div className="create-exercise col">
        <button onClick={() => navigate('/schedules/days/exercises/create')}>
          Click Here to add in your exercises
        </button>
      </div>
      <div className="grid col-4">
        {Exercises.map((exercise) => (
          <div className="card" key={exercise.id}>
            <div>
              <h1>{exercise.exerciseName}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Exercise

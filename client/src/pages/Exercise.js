import { useEffect, useState } from 'react'
import { GetExercises } from '../services/Exercises'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Exercise = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [exercises, setExercises] = useState([])
  const [scheduleId, setScheduleId] = useState([])
  const [dayId, setDayId] = useState([])

  useEffect(() => {
    const getScheduleId = async () => {
      const data = await axios.get(`http://localhost:3001/users/${user.id}`)
      setScheduleId(data.data.Schedules[0].id)
    }
    getScheduleId()
  }, [])

  console.log(scheduleId)

  useEffect(() => {
    const getDayId = async () => {
      const data = await axios.get(
        `http://localhost:3001/schedules/${scheduleId}`
      )
      console.log(data.data[0].Days)
      setDayId(data.data[0].Days[0].id)
    }
    getDayId()
  }, [])

  useEffect(() => {
    const handleExercises = async () => {
      const data = await GetExercises(dayId)
      setExercises(data)
    }
    handleExercises()
  }, [])

  const handleDelete = async (id) => {
    const res = await axios
      .delete(`http://localhost:3001/exercises/${id}`)
      .catch((error) => console.log(error))
    console.log(res.data)
  }

  const deleteExercise = async (item) => {
    let index = exercises.indexOf(item)
    let temp = [...exercises]
    temp.splice(index, 1)
    setExercises(temp)
  }

  const updateExercise = (exercise) => {
    navigate('/schedules/days/exercises/update', {
      state: { exercise: exercise }
    })
  }

  return user && authenticated ? (
    <div className="exercise-page">
      <div className="create-exercise col">
        <button onClick={() => navigate('/schedules/days/exercises/create')}>
          Click Here to add in your exercises
        </button>
      </div>
      <div className="grid col-4">
        {exercises.map((exercise) => (
          <div className="card" key={exercise.id}>
            <div>
              <h1>{exercise.exerciseName}</h1>
              <h1>Weight: {exercise.weight}</h1>
              <h1>Sets: {exercise.sets}</h1>
              <h1>Reps: {exercise.reps}</h1>
            </div>
            <button
              onClick={() => {
                const answer = window.confirm(
                  'Are you sure you want to delete this day?'
                )
                if (answer) {
                  handleDelete(exercise.id)
                  deleteExercise(exercise)
                } else {
                  return
                }
              }}
            >
              Delete
            </button>
            <button onClick={() => updateExercise(exercise)}>Update</button>
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

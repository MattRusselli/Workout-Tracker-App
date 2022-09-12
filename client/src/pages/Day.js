import { useEffect, useState } from 'react'
import { GetDays } from '../services/Days'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Day = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [days, setDays] = useState([])
  const [scheduleId, setScheduleId] = useState([])

  useEffect(() => {
    const getScheduleId = async () => {
      const data = await axios.get(`http://localhost:3001/users/${user.id}`)
      console.log(data.data.Schedules)
      setScheduleId(data.data.Schedules[0].id)
    }
    getScheduleId()
  }, [])

  useEffect(() => {
    const handleDays = async () => {
      const data = await GetDays(scheduleId)
      setDays(data)
    }
    handleDays()
  }, [])

  const handleDelete = async (id) => {
    const res = await axios
      .delete(`http://localhost:3001/days/${id}`)
      .catch((error) => console.log(error))
    console.log(res.data)
  }

  const deleteDay = async (item) => {
    let index = days.indexOf(item)
    let temp = [...days]
    temp.splice(index, 1)
    setDays(temp)
  }

  const updateDays = (day) => {
    navigate('/schedules/days/update', { state: { day: day } })
  }

  return user && authenticated ? (
    <div className="day-page">
      <div className="create-day col">
        <button onClick={() => navigate('/schedules/days/create')}>
          Click Here to Create a Daily Workout for This Schedule
        </button>
      </div>
      <div className="grid col-4">
        {days.map((day) => (
          <div className="card" key={day.id}>
            <div>
              <button onClick={() => navigate(`/schedules/days/exercises`)}>
                {day.dayOfWeek}
              </button>
            </div>
            <button
              onClick={() => {
                const answer = window.confirm(
                  'Are you sure you want to delete this day?'
                )
                if (answer) {
                  handleDelete(day.id)
                  deleteDay(day)
                } else {
                  return
                }
              }}
            >
              Delete
            </button>
            <button onClick={() => updateDays(day)}>Update</button>
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

export default Day

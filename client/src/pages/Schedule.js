import { useEffect, useState } from 'react'
import { GetSchedules } from '../services/Schedules'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Schedule = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    const handleSchedules = async () => {
      const data = await GetSchedules(user.id)
      setSchedules(data)
    }
    handleSchedules()
  }, [user.id])

  const handleDelete = async (id) => {
    const res = await axios
      .delete(`http://localhost:3001/schedules/${id}`)
      .catch((error) => console.log(error))
    console.log(res.data)
  }

  const deleteSchedule = async (item) => {
    let index = schedules.indexOf(item)
    let temp = [...schedules]
    temp.splice(index, 1)
    setSchedules(temp)
  }

  const updateSchedule = (schedule) => {
    navigate('/schedules/update', { state: { schedule: schedule } })
  }

  return user && authenticated ? (
    <div className="schedule-page">
      <div className="create-schedule col">
        <button onClick={() => navigate('/schedules/create')}>
          Click Here to Create a Schedule
        </button>
      </div>
      <div className="grid col-4">
        {schedules.map((schedule) => (
          <div className="card" key={schedule.id}>
            <div>
              <button onClick={() => navigate('/schedules/days')}>
                {schedule.scheduleName}
              </button>
            </div>
            <button
              onClick={() => {
                const answer = window.confirm(
                  'Are you sure you want to delete this schedule?'
                )
                if (answer) {
                  handleDelete(schedule.id)
                  deleteSchedule(schedule)
                } else {
                  return
                }
              }}
            >
              Delete
            </button>
            <button onClick={() => updateSchedule(schedule)}>Update</button>
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

export default Schedule

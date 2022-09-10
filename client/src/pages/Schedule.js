import { useEffect, useState } from 'react'
import { GetSchedules } from '../services/Schedules'
import { useNavigate } from 'react-router-dom'

const Schedule = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [Schedules, setSchedules] = useState([])

  useEffect(() => {
    const handleSchedules = async () => {
      const data = await GetSchedules()
      setSchedules(data)
    }
    handleSchedules()
  }, [])

  return user && authenticated ? (
    <div className="schedule-page">
      <div className="create-schedule col">
        <button onClick={() => navigate('/schedules/create')}>
          Click Here to Create a Schedule
        </button>
      </div>
      <div className="grid col-4">
        {Schedules.map((schedule) => (
          <div className="card" key={schedule.id}>
            <div>
              <button onClick={() => navigate('/schedules/days')}>
                {schedule.scheduleName}
              </button>
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

export default Schedule

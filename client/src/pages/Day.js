import { useEffect, useState } from 'react'
import { GetDays } from '../services/Days'
import { useNavigate } from 'react-router-dom'

const Day = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [Days, setDays] = useState([])

  useEffect(() => {
    const handleDays = async () => {
      const data = await GetDays()
      setDays(data)
    }
    handleDays()
  }, [])

  return user && authenticated ? (
    <div className="day-page">
      <div className="create-day col">
        <button onClick={() => navigate('/schedules/days/create')}>
          Click Here to Create a Daily Workout for This Schedule
        </button>
      </div>
      <div className="grid col-4">
        {Days.map((day) => (
          <div className="card" key={day.id}>
            <div>
              <button onClick={() => navigate('/schedules/days/exercieses')}>
                {day.dayOfWeek}
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

export default Day

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NewDayForm from '../components/NewDayForm.jsx'
import { handleSubmit, handleDelete, handleUpdate } from '../services/Days.js'

const CreateDay = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [dateOfWeek, setDateOfWeek] = useState('')

  const handleSubmitDay = async (e) => {
    e.preventDefault()
    await handleSubmit(user.id, {
      dayOfWeek,
      dateOfWeek
    })
    navigate('/schedules/days')
    setDayOfWeek()
    setDateOfWeek()
  }
  return user && authenticated ? (
    <div className="grid col-4">
      <NewDayForm
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
        dateOfWeek={dateOfWeek}
        setDateOfWeek={setDateOfWeek}
        handleSubmitDay={handleSubmitDay}
      />
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreateDay

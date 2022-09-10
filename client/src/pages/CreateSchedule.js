import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NewSheduleForm from '../components/NewSheduleForm.jsx'
import {
  handleSubmit,
  handleDelete,
  handleUpdate
} from '../services/Schedules.js'

const CreateSchedule = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [scheduleName, setScheduleName] = useState('')

  const handleSubmitSchedule = async (e) => {
    e.preventDefault()
    await handleSubmit(user.id, {
      scheduleName
    })
    navigate('/schedules')
    setScheduleName()
  }
  return user && authenticated ? (
    <div className="grid col-4">
      <NewSheduleForm
        scheduleName={scheduleName}
        setScheduleName={setScheduleName}
        handleSubmitSchedule={handleSubmitSchedule}
      />
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreateSchedule

import './styles/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { Box } from '@mui/material'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Schedule from './pages/Schedule'
import CreateSchedule from './pages/CreateSchedule'
import UpdateSchedule from './pages/UpdateSchedule'
import Day from './pages/Day'
import CreateDays from './pages/CreateDays'
import UpdateDay from './pages/UpdateDay'
import Exercise from './pages/Exercise'
import CreateExercises from './pages/CreateExercises'
import UpdateExercise from './pages/UpdateExercise'
import ExerciseDetail from './pages/ExerciseDetail'
import ExercisePage from './pages/ExercisePage'
import Footer from './components/Footer'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <div>
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route
            path="/schedules"
            element={<Schedule user={user} authenticated={authenticated} />}
          />
          <Route
            path="/schedules/create"
            element={
              <CreateSchedule user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/schedules/update"
            element={
              <UpdateSchedule user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/schedules/days"
            element={<Day user={user} authenticated={authenticated} />}
          />
          <Route
            path="/schedules/days/create"
            element={<CreateDays user={user} authenticated={authenticated} />}
          />
          <Route
            path="/schedules/days/update"
            element={<UpdateDay user={user} authenticated={authenticated} />}
          />
          <Route
            path="/schedules/days/exercises"
            element={<Exercise user={user} authenticated={authenticated} />}
          />
          <Route
            path="/schedules/days/exercises/create"
            element={
              <CreateExercises user={user} authenticated={authenticated} />
            }
          />
          <Route
            path="/schedules/days/exercises/update"
            element={
              <UpdateExercise user={user} authenticated={authenticated} />
            }
          />
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App

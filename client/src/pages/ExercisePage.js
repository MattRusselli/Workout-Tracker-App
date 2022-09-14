import React from 'react'
import { Box } from '@mui/material'
import ListExercises from '../components/ListExercises'
import SearchExercises from '../components/SearchExercises'
import { useState } from 'react'

const ExercisePage = () => {
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <ListExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default ExercisePage

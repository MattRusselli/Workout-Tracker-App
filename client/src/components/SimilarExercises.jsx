import { Typography, Box, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollBar.jsx'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          Target Muscle
        </span>{' '}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length ? (
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={targetMuscleExercises} />{' '}
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' }
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          Equipment
        </span>{' '}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length ? (
          <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={equipmentExercises} />
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercises

import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: exerciseDetail.bodyPart
    },
    {
      icon: TargetImage,
      name: exerciseDetail.target
    },
    {
      icon: EquipmentImage,
      name: exerciseDetail.equipment
    }
  ]
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img
        src={exerciseDetail.gifUrl}
        alt={exerciseDetail.name}
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          sx={{ fontSize: { lg: '64px', xs: '30px' } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {exerciseDetail.name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '24px', xs: '18px' } }}
          color="#4F4C4C"
        >
          Exercising is good for you! <br />
          <span style={{ textTransform: 'capitalize' }}>
            The {exerciseDetail.name}
          </span>{' '}
          is one of the best exercises to target your {exerciseDetail.target}
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: 'black',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img
                src={item.icon}
                alt={exerciseDetail.bodyPart}
                style={{ width: '50px', height: '50px' }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: '30px', xs: '20px' } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail

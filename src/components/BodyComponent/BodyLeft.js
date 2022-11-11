import { Box } from '@mui/material'
import React from 'react'
import map from '../../assets/map.png'

function BodyLeft() {
  return (
    <Box
        component="img"
        sx={{
            width: '100%',
            height: '48rem'
        }}
        src={map}
    />
  )
}

export default BodyLeft
import React from 'react'
import {Grid} from '@mui/material'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'

function BodyComponent() {
  return (
    <Grid container xs={12}>
        <Grid container xs={7}>
            <BodyLeft />
        </Grid>

        <Grid container xs={5}>
            <BodyRight />
        </Grid>
    </Grid>
  )
}

export default BodyComponent
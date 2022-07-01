
import { Button, Grid, Typography , Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import data from '../../constant/data.js'
import useStyles from './Styles.js'

const Booking = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={2} className={classes.bookContainer} direction='row' justifyContent='space-around' alignItems='flex-start' >
        {
          data.bus.map((b,idx)=> (
            <Grid item  xs={12} sm={12} md={6} lg={4} xl={3}  >
              <Grid  container direction='column' justifyContent='space-around' >
                <Grid item style={{width:'100%', height:'16rem'}} >
                  <img style={{width:'100%' , height:'100%'}} src={b.img} alt={b.agency} />
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    {b.origin} to {b.destination}
                  </Typography>
                  <Typography variant='subtitle1'>
                    {b.agency}
                  </Typography>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    {/* <Typography component="legend">Read only</Typography> */}
                      <Rating name="half-rating-read" defaultValue={b.rating} precision={0.5} readOnly />
                  </Box>
                  <Button variant='contained' color='primary'>
                    book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ) )
        }

      </Grid>
    </>
  )
}

export default Booking


import React from 'react'
import Booking from '../../component/booking/Booking'
import Filter from '../../component/filter/Filter'
import useStyles from './Styles.js'

const Home = () => {
  const classes = useStyles()
  return (
    <>
    <div className={classes.home}>
      <Filter/>
      <Booking/>
    </div>
      
    </>
  )
}

export default Home
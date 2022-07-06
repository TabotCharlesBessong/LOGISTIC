
import { Divider } from '@material-ui/core'
import React from 'react'
import Booking from '../../component/booking/Booking'
import Filter from '../../component/filter/Filter'
import News from '../../component/news/News'
import useStyles from './Styles.js'

const Home = () => {
  const classes = useStyles()
  return (
    <>
    <div className={classes.home}>
      <Filter/>
      <Booking/>
      <Divider/>
      <News/>
    </div>
      
    </>
  )
}

export default Home
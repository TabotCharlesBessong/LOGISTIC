

import { Avatar, Grid , Paper, Typography, useMediaQuery , useTheme } from '@material-ui/core'
import React from 'react'
import data from '../../constant/data.js'
import useStyles from './Styles.js'

const News = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Grid s style={{margin:'4rem',overFlow:'hidden',width:'100%'}} container direction='row' alignItems='center' justifyContent='center' >
         
        {
          data.news.map((n,idx)=>(
            <Grid item key={idx} xs={12} sm={12} md={6} lg={4}  >
              <Grid className={classes.newsItem} container direction={matchesM ? 'column' :'row' }>
                <Grid item>
                  <Avatar className={classes.avatar}  src={n.logo}/>
                </Grid>
                <Grid item>
                  <Typography   variant='subtitle1'>
                    {n.content}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default News
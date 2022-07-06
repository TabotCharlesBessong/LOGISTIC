

import { Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles.js'

const AddNew = ({text , icon}) => {
  const classes = useStyles()
  return (
    <Card className={classes.addCard} >
      <CardActions>
        <IconButton className={classes.iconButton} >
          {icon}
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant='h4'>
         {text}
         
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AddNew
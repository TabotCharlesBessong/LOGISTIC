
import { Grid, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import React from 'react'
import data from '../../constant/data'
import useStyles from './Styles.js'

const Filter = () => {
  const classes = useStyles()
  return (
    <Grid style={{marginTop:'0rem'}} container direction='row' alignItems='center' justifyContent='space-between'  >
      <Grid item xs={12} md={10} lg={10}>
       <List className={classes.filterList} >
        <ListItem className={classes.filterItem} >
          {data.filters.map(text => (
            <ListItemText className={classes.filterText} >
              {text}
            </ListItemText>
          )  )}
        </ListItem>
       </List>
      </Grid>
      <Grid item xs={0} md={2} lg={2}>
        <IconButton>
          <ArrowRight/>
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Filter
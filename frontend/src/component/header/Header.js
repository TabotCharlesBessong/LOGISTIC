
import React from 'react'
import useStyles from './Styles.js'
import {AppBar , Toolbar , useScrollTrigger , Tabs , Tab , Button , Menu , MenuItem , useMediaQuery ,SwipeableDrawer , IconButton , List, ListItem , ListItemText , ListItemIcon  , useTheme , Typography , Grid , Badge , Avatar} from '@material-ui/core'

import logo from '../../images/avulionAgents (7).jpg'

import { Mail } from '@material-ui/icons'

import {Link} from 'react-router-dom'

const  ElevationScroll = (props)=> {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
    // target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e,newValue)=>{
    props.setValue(newValue)
  }

  const handleClick = (e)=>{
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e,i)=>{
    setAnchorEl(null)
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar} position='fixed' color='primary'>
          <Toolbar disableGutters={true} className={classes.toolbar} >
          <Grid container direction='row' justify='space-between' >
            <Grid item>
              <Link to='/' className={classes.link}  >
                <Typography variant='h1'>logistiks</Typography>
              </Link>
            </Grid>
            <Grid item>

            </Grid>
            <Grid item lg={3} md={4} sm={4} >
              <Grid item container direction='row' justify='space-around' >
                <Grid item>
                 <Badge anchorOrigin={{vertical: 'top',horizontal: 'right',}} badgeContent={7} max={9} >
                  <Mail/>
                 </Badge>
                </Grid>

                <Grid item>
                 <Badge anchorOrigin={{vertical: 'top',horizontal: 'right',}} badgeContent={7} max={9} >
                  <Mail/>
                 </Badge>
                </Grid>

                <Grid item>
                  <Avatar alt="Remy Sharp" src={logo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header
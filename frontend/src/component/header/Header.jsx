
import React, { useEffect, useState } from 'react'
import {AppBar , Toolbar , useScrollTrigger , Tabs , Tab , Button , Menu , MenuItem , useMediaQuery ,SwipeableDrawer , IconButton , List, ListItem , ListItemText , ListItemIcon  , useTheme , Typography , Grid , Badge , Avatar} from '@material-ui/core'

// import {Menu} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'

import useStyles from './Styles.js'
import { Mail, Notifications  } from '@material-ui/icons'

import logo from '../../images/avulionAgents (7).jpg'


const  ElevationScroll = (props)=> {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
    // target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



const Header = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl,setAnchorEl] = useState(null)
  const [openMenu,setOpenMenu] = useState(false)
  const [openDrawer,setOpenDrawer] = useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const matchesM = useMediaQuery(theme.breakpoints.down('md'))

  

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

  const dashboardOptions = [
    {
      name:'dashboard',
      link:'/dashboard',
      activeIndex:2,
      selectedIndex:0
    },
    {
      name:'journey',
      link:'/journey',
      activeIndex:2,
      selectedIndex:1
    },
    {
      name:'raison',
      link:'/raison',
      activeIndex:2,
      selectedIndex:2
    },
    {
      name:'reserved',
      link:'/reserved',
      activeIndex:2,
      selectedIndex:3
    },
    {
      name:'stats',
      link:'/stats',
      activeIndex:2,
      selectedIndex:4
    },
  ]

const routes = [
    {name:'home',link:'/',activeIndex:0},
    {name:'Account',link:'/account',activeIndex:1,},
    {name:'dashboard',link:'/dashboard',activeIndex:2,ariaOwns:anchorEl ? 'simple-menu' : undefined , ariaPopup: anchorEl ? 'true' : undefined , mouseOver : (e)=> handleClick(e)  },
    {name:'news',link:'/news',activeIndex:3},
    {name:'login|signup',link:'/login|signup',activeIndex:4}
  ]

  useEffect(()=>{
    [...dashboardOptions,...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){

              props.setSelectedIndex(route.selectedIndex)

              // props.selectedIndex(route.selectedIndex)

            }
          }
          break
        default:
          break 
      }
    } )
  },[props.value,dashboardOptions,props.selectedIndex,routes,props])

  const tabs = (
    <>
      <Tabs onChange={handleChange} value={props.value} className={classes.tabContainer}  >
        
        {routes.map((route,index)=> (
          <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ) )}
      </Tabs>
        
      <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClick={handleClose} MenuListProps={{onMouseLeave:handleClose}} style={{zIndex:1302}}
              classes={{paper:classes.menu}} elevation={0}
              keepMounted>
      {
        dashboardOptions.map((opt,idx)=> (

        <MenuItem key={`${opt}${idx}`} classes={{root:classes.menuItem}} component={Link} to={opt.link} onClick={(event)=> {handleMenuItemClick(event,idx); props.setValue(1) ; handleClose() }   }  selected={idx === props.selectedIndex  } >

        

  {opt.name}
        </MenuItem>
                  )  )}
    </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)} classes={{paper:classes.drawer}}  >
      <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.list} >
        {routes.map((route,index)=>(
          <ListItem key={`${route}${route.activeIndex}`} onClick={()=> {setOpenDrawer(false) ; props.setValue(route.activeIndex) }} selected={props.ElevationScrollvalue === route.selectedIndex  } classes={{selected:classes.selectedIndex}} devider button component={Link}  >
            <ListItemText disableTypography classes={{root:classes.drawerItem}} > {route.name} </ListItemText>
          </ListItem>
        ))}

        <ListItem>
          <ListItemText classes={{root:classes.drawerItem}} >
           <Avatar className={classes.leftIcon} alt="Remy Sharp" src={logo} />
          </ListItemText>
        </ListItem>
        
          
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple >
        <MenuIcon className={classes.drawerIcon}  />
      </IconButton>
    </>
  )
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar} position='fixed' color='primary' >
          <Toolbar disableGutters={true} className={classes.toolbar} >
            <Grid container direction='row' justify='space-between' >
            <Grid item>
              <Link to='/' className={classes.link}  >
                <Typography variant='h1'>logistiks</Typography>
              </Link>
            </Grid>
            <Grid className={classes.headCenter} item lg={7} md={0} sm={0} >
              {matches ? drawer : tabs }  
            </Grid>
            <Grid className={classes.left}  item lg={2} md={3} sm={3} >
              <Grid item container direction='row' justify={matchesM ? 'center' : 'space-around' } alignItems='center' >
                <Grid item >
                 <Badge className={classes.leftIcon} anchorOrigin={{vertical: 'top',horizontal: 'right',}} badgeContent={7} max={9} >
                  <Notifications/>
                 </Badge>
                </Grid>

                <Grid item>
                 <Badge className={classes.leftIcon} anchorOrigin={{vertical: 'top',horizontal: 'right',}} badgeContent={15} max={9} >
                  <Mail/>
                 </Badge>
                </Grid>

                <Grid item>
                  <Avatar className={classes.leftIcon} alt="Remy Sharp" src={logo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
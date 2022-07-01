import { makeStyles } from "@material-ui/core";


export default   makeStyles ((theme)=>({
  toolbar:{
    position:'relative'
  },
  toolbarMargin:{
    ...theme.mixins.toolbar,
    marginBottom:'3rem',
    position:'relative'
  },
  // logo:{
  //   height:'6rem',
  //   [theme.breakpoints.down("md")]:{
  //     height:'5rem'
  //   }
  // },
  tabContainer:{
    marginLeft:'2rem',
    display:'flex',
    alignItems:'center',
    marginTop:'0.65rem',
    // [theme.breakpoints.down('md')]:{
    //   marginRight:'7rem'
    // },
    "&:hover":{
      backgroundColor:'transparent'
    }
    
  },
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:15,
    [theme.breakpoints.down('md')]:{
      marginLeft:-12,
      fontSize:'1rem'
    }
    
  },
  button:{
    ...theme.typography.estimate ,
    borderRadius:'50px',
    marginLeft:'50px',
    marginRight:'25px',
    height:'40px',
    // [theme.breakpoints.down('md')]:{
    //   padding:'0.2rem 0.4rem',
    //   fontSize:'1.0rem',
    //   // marginRight:'2.5rem',
    //   position:'absolute',
    //   right:'0.75rem'
    // }
  },
  menu:{
    backgroundColor:theme.palette.common.black,
    color:'#fff',
    borderRadius:"0px"
  },
  menuItem:{
    ...theme.typography.tab,
    opacity:0.7,
    textTransform:'capitalize',
    "&:hover":{
      opacity:1
    }
  },
  drawerIconContainer:{
    marginLeft:"auto",
    position:'relative',
    "&:hover":{
      backgroundColor:'transparent'
    }
  },
  drawerIcon:{
    height:'50px',
    width:"50px",
    // position:'absolute',
    // marginTop:'1rem',
    // marginRight:'1rem',
    color:theme.palette.common.white,
    [theme.breakpoints.up("md")]:{
      display:"none",
    }
  },
  list:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
  drawer:{
    background:theme.palette.common.blue
  },
  drawerItem:{
    ...theme.typography.tabs,
    color:'#fff',
    opacity:0.7,
    marginBottom:'1.7rem',
    textTransform:'capitalize'
  },
  
  appbar:{
    zIndex:theme.zIndex.modal + 1
  },
  link:{
    textDecoration:'none',
    [theme.breakpoints.down('md')]:{
      fontSize:'1.75rem'
    },
    [theme.breakpoints.down('sm')]:{
      fontSize:'2rem',
      marginLeft:'0rem'
    }
  },
  left:{
    marginTop:'0.65rem',
    marginLeft:'1rem',
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
  leftIcon:{
    cursor:'pointer',
    [theme.breakpoints.down('md')]:{
      // margin:0
      marginLeft:12
    }
  },
  headCenter:{
    margin:0
  }

}))



import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
  avatar:{
    width:theme.spacing(20),
    height:theme.spacing(20),
  },
  newsItem:{
    backgroundColor:theme.palette.common.white,
    color:theme.palette.primary,
    marginBottom:'1rem',
    borderRadius:'0.5rem',
    // padding:'0.6rem',
    border:`1px solid ${theme.palette.primary}`,
    width:'100%'
  }
}))
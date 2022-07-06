import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
  loginForm:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'12% 20%',
    backgroundColor:theme.palette.common.blue,
    // width:'60rem',
    // height:'60rem'

  },
  loginContainer:{
    width:'25rem',
    height:'10rem',
    backgroundColor:theme.palette.secondary
  }
}))
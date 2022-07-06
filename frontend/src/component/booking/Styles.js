import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
  busItem:{
    backgroundColor:'#4D03BB',
    '& .MuiGrid-root':{
      backgroundColor:theme.palette.primary,

    },
    '& .MuiGrid-item':{
      backgroundColor:theme.palette.primary,

    },
    borderRadius:'1rem',
    cursor:'pointer'
  },
  busText:{
    textAlign:'center'
  },
  bookBtn:{
    marginBottom:'0.7rem',
    padding:'auto 2rem'
  }
}))
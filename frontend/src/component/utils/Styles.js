import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
  addCard:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'column',
  },
  iconButton:{
    padding:'1rem',
    border:`1.5px solid ${theme.palette.primary} `,
    fontSize:60,
  }
}))
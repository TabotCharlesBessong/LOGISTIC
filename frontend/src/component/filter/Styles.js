import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
  filterItem:{
    ...theme.typography.body1,
    padding:'4px 8px',
    borderRadius:'10%',
    
    textTransform:'capitalize',
    color:theme.palette.common.blue,
    cursor:'pointer',
    '& .MuiListItemtext-root':{
      border:`1.2px solid ${theme.palette.primary} `,
    backgroundColor:theme.palette.common.black,

    }
  },
  filtrText:{
    color:theme.palette.common.black,

  }
}))
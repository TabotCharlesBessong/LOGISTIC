
import { createTheme } from "@material-ui/core"

const mainBackground = '#4D03BB'
const btnColor = '#828BFF'
const mainWhite = '#FFFFFF'
const alternativeText = '#7EA6F4'


export default createTheme({
  palette:{
    common:{
      pink:mainBackground,
      lightPink:btnColor,
      white:mainWhite,
      blue:alternativeText
    },
    primary:{
      main:mainBackground
    },
    secondary:{
      main:mainWhite
    },
  },
  typography:{
    tab: {
      fontFamily: "Pacifico",
      // textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1.3rem",
    },
    h1:{
      fontSize:'3rem',
      fontWeight:700,
      color:mainWhite,
      lineHeight:1.7,
      textTransform:'uppercase',
      fontFamily:'Pacifico'
    },
    h2: {
      fontFamily: "Pacifico",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: mainWhite,
      lineHeight: 1.5,
      textTransform:'capitalize'
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2rem",
      color: mainWhite,
      textTransform:'capitalize'
    },
    h4: {
      fontFamily: "Pacifico",
      fontSize: "1.75rem",
      color: mainWhite,
      fontWeight: 700,
      textTransform:'capitalize'
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Pacifico",
      color: mainWhite
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: alternativeText
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: alternativeText,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: alternativeText
    },
    // learnButton: {
    //   borderColor: mainWhite,
    //   borderWidth: 2,
    //   textTransform: "none",
    //   color: mainWhite,
    //   borderRadius: 50,
    //   fontFamily: "Roboto",
    //   fontWeight: "bold"
    // },
    formBtn:{
      color:mainWhite,
      background:btnColor,
      borderColor:mainWhite,
      textTransform:'capitalize',
      borderRadius:20,
      fontFamily:'Roboto',
      padding:'0.8rem 2rem',
      fontWeight:400,
      textAlign:'center'
    },
    actionBtn:{
      background:mainWhite,
      color:mainBackground,
      padding:'0.8rem 2rem',
      textTransform:'capitalize',
      fontFamily:'Roboto',
      fontWeight:400,
      textAlign:'center'

    }
  },

  overrides:{
    
  },

  background:{
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%'
  }
})
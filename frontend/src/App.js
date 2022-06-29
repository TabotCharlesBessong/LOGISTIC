import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './component/header/Header'
import theme from './component/ui/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
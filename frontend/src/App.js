import { ThemeProvider } from '@material-ui/core'
import React , {useState} from 'react'
import { BrowserRouter  } from 'react-router-dom'
import theme from './component/ui/Theme'
import Header from './component/header/Header'

const App = () => {

  const [selectedIndex,setSelectedIndex] = useState(0)
  const [value,setValue] = useState(0)
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
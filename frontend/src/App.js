import { ThemeProvider } from '@material-ui/core'
import React , {useState} from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import theme from './component/ui/Theme'
import Header from './component/header/Header'
import Home from './pages/homepage/Home'

const App = () => {

  const [selectedIndex,setSelectedIndex] = useState(0)
  const [value,setValue] = useState(0)
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
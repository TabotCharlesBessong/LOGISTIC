import { ThemeProvider } from '@material-ui/core'
import React , {useState} from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import theme from './component/ui/Theme'
import Header from './component/header/Header'
import Home from './pages/homepage/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import CreateBranches from './pages/createBranches/CreateBranches'
import Addbus from './pages/addBus/Addbus'
import BookClient from './pages/bookClient/BookClient'
import SendMail from './pages/sendMail/SendMail'

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

          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={props => (
              <Signup
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/create-branches"
            render={props => (
              <CreateBranches
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/add-bus"
            render={props => (
              <Addbus
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/book-client"
            render={props => (
              <BookClient
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />

          <Route
            exact
            path="/send-mail"
            render={props => (
              <SendMail
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
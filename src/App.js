import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Home"
import DonorList from "./DonorList"
import CreateDonor from "./CreateDonor"
import Donations from "./Donations"
import CreateDonation from "./CreateDonation"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import HomeIcon from "@material-ui/icons/Home"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

const { netlifyIdentity } = window

const login = () => {
  netlifyIdentity.open()
}

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/donors" exact component={DonorList} />
      <Route path="/donors/create" component={CreateDonor} />
      <Route path="/donations" exact component={Donations} />
      <Route path="/donations/create" component={CreateDonation} />
    </div>
  )
}
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  // not needed at this moment as app is invite only.
  // const [isAdmin, setIsAdmin] = useState(false)

  // Checks if user is logged in
  netlifyIdentity.on("init", (user) => {
    if (user) {
      setLoggedIn(true)

      // Check if user is admin
      // not needed at this moment as app is invite only.
      // const userRole = user.app_metadata.roles[0]
      // if (userRole === "Admin") {
      //   setIsAdmin(true)
      // }

      // Set username
      setUserName(user.user_metadata.full_name)
    } else {
      setLoggedIn(false)
    }
  })
  // Triggers when user logs in

  netlifyIdentity.on("login", (user) => {
    setLoggedIn(true)
    // Set username
    setUserName(user.user_metadata.full_name)
  })

  // Triggers when user logs out
  netlifyIdentity.on("logout", () => {
    setLoggedIn(false)
  })

  return (
    <React.Fragment>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                edge="start"
                style={{
                  color: "white",
                }}
                aria-label="menu"
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography
              className="username"
              style={{
                padding: "0 15px",
              }}
              variant="p"
            >
              {loggedIn ? `Logged In as ${userName}` : `Logged Out`}
            </Typography>
            <Button variant="contained" color="secondary" onClick={login}>
              {loggedIn ? <LockOutlinedIcon /> : <LockOutlinedIcon />}
            </Button>
          </Toolbar>
        </AppBar>
        {loggedIn ? <Routes /> : `Not Logged In`}
      </Router>
    </React.Fragment>
  )
}

export default App

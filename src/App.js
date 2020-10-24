import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import DonorList from "./DonorList"
import CreateDonor from "./CreateDonor"
import Donations from "./Donations"
import CreateDonation from "./CreateDonation"
// import Try from "./Try.js"

const { netlifyIdentity } = window

const login = () => {
  netlifyIdentity.open()
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
      {loggedIn ? `Logged In as ${userName}` : `Logged Out`}
      <button onClick={login}>Login</button>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/donors" exact component={DonorList} />
        <Route path="/donors/create" component={CreateDonor} />
        <Route path="/donations" exact component={Donations} />
        <Route path="/donations/create" component={CreateDonation} />
      </Router>
    </React.Fragment>
  )
}

export default App

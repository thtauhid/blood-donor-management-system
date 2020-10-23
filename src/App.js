import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import DonorList from "./DonorList"
import CreateDonor from "./CreateDonor"
// import Try from "./Try.js"

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateDonor} />
        <Route path="/donors" component={DonorList} />
      </Router>
    </React.Fragment>
  )
}

export default App

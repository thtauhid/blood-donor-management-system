import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import DonorList from "./DonorList"
import CreateDonor from "./CreateDonor"
import Donations from "./Donations"
import CreateDonation from "./CreateDonation"
// import Try from "./Try.js"

const App = () => {
  return (
    <React.Fragment>
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

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import DonorList from "./DonorList"
// import Try from "./Try.js"

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route to="/" component={DonorList} />
      </Router>
    </React.Fragment>
  )
}

export default App

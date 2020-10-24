import React from "react"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <Link to="/donors">
        <button>Donors</button>
      </Link>
      <br />
      <Link to="/donors/create">
        <button>Add Donor</button>
      </Link>
      <br />
      <Link to="/donations">
        <button>Donation</button>
      </Link>
      <br />
      <Link to="/donations/create">
        <button>Add Donation</button>
      </Link>
      <br />
    </div>
  )
}

export default Home

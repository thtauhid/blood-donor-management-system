import React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { Box } from "@material-ui/core"

const Home = () => {
  return (
    <Box textAlign="center">
      <Link
        to="/donors"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "20px",
          }}
        >
          Donors
        </Button>
      </Link>
      <br />
      <Link
        to="/donations"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "20px",
          }}
        >
          Donations
        </Button>
      </Link>
      <hr />
      <Link
        to="/donors/create"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "20px",
          }}
        >
          Add Donor
        </Button>
      </Link>
      <br />

      <Link
        to="/donations/create"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: "20px",
          }}
        >
          Add Donation
        </Button>
      </Link>
    </Box>
  )
}

export default Home

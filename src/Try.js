import React, { Component } from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import api from "./api"

export default class Try extends Component {
  constructor(props) {
    super(props)

    this.state = {
      donors: [],
    }
  }
  componentDidMount() {
    console.log("Hi")
    console.table(this.state.donors)
    // Calling Donors
    api.getDonors().then((data) => {
      this.setState({
        donors: data,
      })
      console.table(this.state.donors)
    })
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>01</TableCell>
              <TableCell>02</TableCell>
              <TableCell>03</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.donors.map((donor) => {
              const { name, blood_group } = donor.data
              const { id } = donor.ref["@ref"]
              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{blood_group}</TableCell>
                  <TableCell>03</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

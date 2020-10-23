import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"

import api from "./api"
const blood_groups = [
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "AB+",
    label: "AB+",
  },
  {
    value: "O+",
    label: "O+",
  },
]

function CreateDonor() {
  const [name, setName] = useState("")
  const [bloodGroup, setBloodGroup] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const changeName = (event) => {
    setName(event.target.value)
  }
  const changeBloodGroup = (event) => {
    setBloodGroup(event.target.value)
  }
  const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }
  const submitted = () => {
    api
      .createDonor({
        name: name,
        phone_number: phoneNumber,
        blood_group: bloodGroup,
      })
      .then((res) => {
        console.log("Success: ", res)
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }
  return (
    <form>
      <TextField
        id="standard-name"
        label="Enter Donor Name"
        value={name}
        onChange={changeName}
      />
      <br />
      <TextField
        id="standard-select-blood-group"
        select
        label="Select Blood Group"
        value={bloodGroup}
        onChange={changeBloodGroup}
        helperText="Please select your blood group"
      >
        {blood_groups.map((blood_group) => (
          <MenuItem key={blood_group.value} value={blood_group.value}>
            {blood_group.label}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <TextField
        id="standard-phone-number"
        label="Enter Phone Number"
        value={phoneNumber}
        onChange={changePhoneNumber}
      />
      <button value="Submit" onClick={submitted}>
        Submit
      </button>
    </form>
  )
}

export default CreateDonor

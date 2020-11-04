import React, { useEffect, useState } from "react"
import { Table } from "antd"

import api from "./api"

const DonorList = () => {
  const [fullData, setFullData] = useState([""])

  useEffect(() => {
    api
      .getDonors()

      .then((donors) => {
        const fullData = donors.map((donor) => {
          const { id: key } = donor.ref["@ref"]
          const { name, blood_group, phone_number } = donor.data
          return {
            key,
            name,
            blood_group,
            phone_number,
          }
        })

        setFullData(fullData)
        console.log(fullData)
      })
  }, [])
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Blood Group",
      dataIndex: "blood_group",
      key: "blood_group",
    },
  ]
  return (
    <>
      <Table columns={columns} dataSource={fullData} />
    </>
  )
}

export default DonorList

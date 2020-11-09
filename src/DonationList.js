import React, { useEffect, useState } from "react"
import { Table, Breadcrumb } from "antd"

import api from "./api"

const DonationList = () => {
  const [fullData, setFullData] = useState([""])

  useEffect(() => {
    api
      .getDonations()

      .then((donors) => {
        const fullData = donors.map((donor) => {
          const { id: key } = donor.ref["@ref"]
          let {
            name,
            blood_group,
            phone_number,
            donation_place,
            donation_date,
          } = donor.data

          donation_date = donation_date.substring(0, 10)
          return {
            key,
            name,
            blood_group,
            phone_number,
            donation_place,
            donation_date,
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
      title: "Blood Group",
      dataIndex: "blood_group",
      key: "blood_group",
    },
    {
      title: "Contact Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Donation Place",
      dataIndex: "donation_place",
      key: "donation_place",
    },
    {
      title: "Donation Date",
      dataIndex: "donation_date",
      key: "donation_date",
    },
  ]
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Donation</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
      </Breadcrumb>
      <Table columns={columns} dataSource={fullData} />
    </>
  )
}

export default DonationList

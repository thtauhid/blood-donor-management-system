import React, { useState } from "react"
import { Form, Input, Button, Select, Alert } from "antd"
import api from "./api"

const { Option } = Select

const CreateDonor = () => {
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const onFinish = (values) => {
    api
      .createDonation(values)

      .then((res) => {
        console.log(res)
        setSuccess(true)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
    setFailure(true)
  }
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Donor Name" />
        </Form.Item>

        <Form.Item
          name="blood_group"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Select Blood Group">
            <Option value="A+">A+</Option>
            <Option value="B+">B+</Option>
            <Option value="AB+">AB+</Option>
            <Option value="O+">O+</Option>
            <Option value="A-">A-</Option>
            <Option value="B-">B-</Option>
            <Option value="AB-">AB-</Option>
            <Option value="O-">O-</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone_number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Donor Phone Number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {success ? <Alert message="Donor added" type="success" /> : ""}
        {failure ? <Alert message="Failed to add donor" type="warning" /> : ""}
      </Form>
    </>
  )
}

export default CreateDonor

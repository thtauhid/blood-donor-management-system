import React, { useState } from 'react'
import {
	Form,
	Input,
	Button,
	Select,
	Alert,
	Breadcrumb,
	DatePicker,
} from 'antd'
import api from './api'

const { Option } = Select

const CreateDonor = () => {
	const [success, setSuccess] = useState(false)
	const [failure, setFailure] = useState(false)

	const onFinish = (values) => {
		api
			.createDonor(values)

			.then((res) => {
				console.log(res)
				setSuccess(true)
			})
			.catch((err) => {
				console.log(err)
			})
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
		setFailure(true)
	}
	return (
		<>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Donor</Breadcrumb.Item>
				<Breadcrumb.Item>Create</Breadcrumb.Item>
			</Breadcrumb>
			<Form
				name='basic'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}>
				<Form.Item
					name='name'
					rules={[{ required: true, message: 'Please input donor name!' }]}>
					<Input placeholder='Donor Name' />
				</Form.Item>

				<Form.Item
					name='blood_group'
					hasFeedback
					rules={[
						{ required: true, message: 'Please select your blood group!' },
					]}>
					<Select placeholder='Select Blood Group'>
						<Option value='A+'>A+</Option>
						<Option value='B+'>B+</Option>
						<Option value='AB+'>AB+</Option>
						<Option value='O+'>O+</Option>
						<Option value='A-'>A-</Option>
						<Option value='B-'>B-</Option>
						<Option value='AB-'>AB-</Option>
						<Option value='O-'>O-</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name='phone_number'
					rules={[
						{ required: true, message: 'Please input your phone number!' },
					]}>
					<Input placeholder='Donor Phone Number' />
				</Form.Item>

				<Form.Item name='address'>
					<Input placeholder='Address' />
				</Form.Item>

				<Form.Item name='dob'>
					<DatePicker placeholder='Date of Birth' />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
				{success ? <Alert message='Donor added' type='success' /> : ''}
				{failure ? <Alert message='Failed to add donor' type='error' /> : ''}
			</Form>
		</>
	)
}

export default CreateDonor

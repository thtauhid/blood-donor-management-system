import React, { useEffect, useState } from 'react'
import { Breadcrumb, Card } from 'antd'

import api from './api'

const DonorProfile = (props) => {
	const id = props.match.params.id
	const [name, setName] = useState('')
	const [bloodGroup, setBloodGroup] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [dateOfBirth, setDateOfBirth] = useState('')
	const [address, setAddress] = useState('')

	useEffect(() => {
		api
			.getSingleDonor(id)

			.then((donor) => {
				setName(donor.data.name)
				setBloodGroup(donor.data.blood_group)
				setPhoneNumber(donor.data.phone_number)
				setDateOfBirth(donor.data.dob)
				setAddress(donor.data.address)
			})
			.catch((err) => {
				console.log('Error: ', err)
			})
	}, [id])

	const [month, date, year] = new Date(dateOfBirth)
		.toLocaleDateString('en-US')
		.split('/')

	return (
		<>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Donor</Breadcrumb.Item>
				<Breadcrumb.Item>Profile</Breadcrumb.Item>
				<Breadcrumb.Item>{name}</Breadcrumb.Item>
			</Breadcrumb>
			<Card title='Donor Data'>
				<p>ID: {id}</p>
				<p>Name: {name}</p>
				<p>Blood Group: {bloodGroup}</p>
				<p>Phone Number: {phoneNumber}</p>
				<p>Address: {address}</p>
				<p>
					Date of Birth: {date}-{month}-{year}
				</p>
			</Card>
		</>
	)
}

export default DonorProfile

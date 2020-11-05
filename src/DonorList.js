import React, { useEffect, useState } from 'react'
import { Table, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import api from './api'

const DonorList = () => {
	const [fullData, setFullData] = useState([''])

	useEffect(() => {
		api
			.getDonors()

			.then((donors) => {
				const fullData = donors.map((donor) => {
					const { id: key } = donor.ref['@ref']
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
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text, record) => <Link to={`/donor/${record.key}`}>{text}</Link>,
		},
		{
			title: 'Blood Group',
			dataIndex: 'blood_group',
			key: 'blood_group',
		},
		{
			title: 'Contact Number',
			dataIndex: 'phone_number',
			key: 'phone_number',
		},
	]
	return (
		<>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Donor</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
			</Breadcrumb>
			<Table columns={columns} dataSource={fullData} />
		</>
	)
}

export default DonorList

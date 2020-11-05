import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './Sidebar'
import 'antd/dist/antd.css'

import DonorList from './DonorList'
import CreateDonor from './CreateDonor'
import DonationList from './DonationList'
import CreateDonation from './CreateDonation'

const { Content, Footer } = Layout

const Routes = () => {
	return (
		<>
			<Route path='/' exact component={DonorList} />
			<Route path='/donor/create' component={CreateDonor} />
			<Route path='/donations' exact component={DonationList} />
			<Route path='/donation/create' component={CreateDonation} />
		</>
	)
}

const App = () => {
	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sidebar />
				<Layout className='site-layout'>
					<Content style={{ margin: '0 16px' }}>
						<div
							className='site-layout-background'
							style={{ padding: 24, minHeight: 360 }}>
							<Routes />
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Coded with{' '}
						<span role='img' aria-label='love'>
							🖤
						</span>
						by
						<a
							href='https://github.com/thtauhid'
							target='_blank'
							rel='noopener noreferrer'>
							Tauhid
						</a>
					</Footer>
				</Layout>
			</Layout>
		</>
	)
}

export default App

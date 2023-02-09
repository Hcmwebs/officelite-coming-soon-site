import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, Navbar } from '../components'

const SharedLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default SharedLayout

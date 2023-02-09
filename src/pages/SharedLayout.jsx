import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header} from '../components'

const SharedLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default SharedLayout

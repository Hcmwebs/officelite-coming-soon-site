import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../components'

const SharedLayout = () => {
	return (
		<>
			<Logo />
			<Outlet />
		</>
	)
}

export default SharedLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../components'
import { StyledContainer } from '../styles'

const SharedLayout = () => {
	return (
		<StyledContainer>
			<Logo />
			<Outlet />
		</StyledContainer>
	)
}

export default SharedLayout

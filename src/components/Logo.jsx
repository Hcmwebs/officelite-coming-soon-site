import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLogo } from '../styles'

const Logo = () => {
	return (
		<StyledLogo>
			<Link to='/'>
				<img src='/logo.svg' alt='Logo' />
			</Link>
		</StyledLogo>
	)
}

export default Logo

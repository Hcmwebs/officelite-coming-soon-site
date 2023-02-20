import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer, StyledLogo } from '../styles'

const Logo = () => {
	return (
		<StyledContainer>
			<StyledLogo>
				<Link to='/'>
					<img src='/logo.svg' alt='Logo' />
				</Link>
			</StyledLogo>
		</StyledContainer>
	)
}

export default Logo

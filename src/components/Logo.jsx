import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLogo } from '../styles'

const Logo = () => {
	return (
		<nav>
			<StyledLogo className='sectionCenter'>
				<Link to='/'>
					<img src='/logo.svg' alt='Logo' />
				</Link>
			</StyledLogo>
		</nav>
	)
}

export default Logo

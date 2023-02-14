import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../styles'
const Button = () => {
	return (
		<StyledButton className = 'primary'>
			<Link to='/signup'>Get Started</Link>
		</StyledButton>
	)
}

export default Button

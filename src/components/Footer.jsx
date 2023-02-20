import React from 'react'
import { Link } from 'react-router-dom'
import { timerDuration } from '../data/Data'
import { StyledFooter } from '../styles'
import { Timer } from './index'

const Footer = () => {
	return (
		<StyledFooter>
			<Timer duration={timerDuration} />
			<Link to='/signup' className='btn primary'>
				Get Started
			</Link>
		</StyledFooter>
	)
}

export default Footer

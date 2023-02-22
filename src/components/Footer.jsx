import React from 'react'
import { Link } from 'react-router-dom'
import { timerDuration } from '../data/Data'
import { StyledFooter } from '../styles'
import { Pattern, Timer } from './index'

const Footer = () => {
	return (
		<StyledFooter className='sectionCenter'>
			<Pattern title='footer' image='/bg-pattern-home-footer.svg' />
			<Timer duration={timerDuration} />
			<Link to='/signup' className='btn primary'>
				Get Started
			</Link>
		</StyledFooter>
	)
}

export default Footer

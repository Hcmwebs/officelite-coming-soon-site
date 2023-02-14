import React from 'react'
import { Link } from 'react-router-dom'
import { timerDuration } from '../data/Data'
import { StyledContainer,StyledFooter } from '../styles'
import { Timer } from './index'

const Footer = () => {
	return (
		<StyledContainer footer>
			<StyledFooter>
				<Timer duration={timerDuration} />
				<Link to='/signup'> Get Started</Link>
			</StyledFooter>
		</StyledContainer>
	)
}



export default Footer

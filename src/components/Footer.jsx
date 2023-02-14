import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { timerDuration } from '../data/Data'
import { StyledContainer } from '../styles'
import { Timer } from './index'

const Footer = () => {
	return (
		<StyledContainer footer>
			<Wrapper>
				<Timer duration={timerDuration} />
				<Link to='/signup'> Get Started</Link>
			</Wrapper>
		</StyledContainer>
	)
}

const Wrapper = styled.footer`
	min-height: 30vh;
	padding-top: 4rem;
	background-color: var(--black);
`

export default Footer

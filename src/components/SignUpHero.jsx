import React from 'react'
import { signUpHero, timerDuration } from '../data/Data'
import { StyledHero } from '../styles'
import { Timer } from './index'

const SignUpHero = () => {
	const { title, body } = signUpHero

	return (
		<StyledHero className='signUpPage'>
			<div className='heroBody'>
				<h1>{title}</h1>
				<p>{body}</p>
				<Timer duration={timerDuration} className='signUpPage' />
			</div>
		</StyledHero>
	)
}

export default SignUpHero

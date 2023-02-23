import React from 'react'
import { signUpHero } from '../data/Data'
import { StyledHero } from '../styles'

const SignUpHero = () => {
	const { title, body } = signUpHero

	return (
		<StyledHero>
			<div className='heroBody'>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		</StyledHero>
	)
}

export default SignUpHero

import React from 'react'
import { StyledHeader } from '../styles'
import { Pattern, SignUpHero } from './index'

const SignupHeader = () => {
	return (
		<StyledHeader className='signUpPage sectionCenter'>
			<Pattern title='signUpPage' image='/bg-pattern-home-header.svg' />
			<SignUpHero />
		</StyledHeader>
	)
}

export default SignupHeader

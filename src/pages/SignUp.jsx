import React from 'react'
import { SignUpHeader, SignUpMainContent, SignUpFooter } from '../components'
import { StyledFlex } from '../styles'

const SignUp = () => {
	return (
		<StyledFlex className = 'signUpPage'>
			<SignUpHeader page='signUpPage' />
			<SignUpMainContent />
			<SignUpFooter />
		</StyledFlex>
	)
}

export default SignUp
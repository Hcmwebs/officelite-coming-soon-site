import React from 'react'
import { SignUpHeader, SignUpMainContent, SignUpFooter } from '../components'
import { signUpHero, timerDuration } from '../data/Data'

const SignUp = () => {
	return (
		<>
			<SignUpHeader title='signUpPage' />
			<SignUpMainContent />
			<SignUpFooter />
		</>
	)
}

export default SignUp

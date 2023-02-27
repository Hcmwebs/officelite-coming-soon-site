import React from 'react'
import { StyledFooter } from '../styles'
import { Pattern } from './index'

const SignUpFooter = () => {
	return (
		<StyledFooter className=' signUpPage sectionCenter'>
			<Pattern title='signUpPage footer' image='/bg-pattern-signup-side.svg' />
			SignUpFooter goes here
		</StyledFooter>
	)
}

export default SignUpFooter

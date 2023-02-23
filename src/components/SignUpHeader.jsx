import React from 'react'
import { StyledHeader } from '../styles'
import {Pattern,SignUpHero} from './index'

const SignupHeader = ({title}) => {
	return (
		<StyledHeader className={`${title} sectionCenter`}>
			<Pattern title='header' image='/bg-pattern-home-header.svg' />
			<SignUpHero/>
		</StyledHeader>
	)
}

export default SignupHeader

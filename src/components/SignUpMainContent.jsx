import React from 'react'
import { StyledMainContent,StyledSection } from '../styles'
import {Form} from './index'

const SignUpMainContent = () => {
	return (
		<StyledMainContent className='sectionCenter'>
			<StyledSection>
				<Form />
			</StyledSection>
		</StyledMainContent>
	)
}

export default SignUpMainContent

import React from 'react'

import { Hero } from './index'
import { StyledContainer, StyledHeader } from '../styles'

const Header = () => {
	return (
		<StyledContainer header>
			<StyledHeader>
				<Hero />
			</StyledHeader>
		</StyledContainer>
	)
}

export default Header

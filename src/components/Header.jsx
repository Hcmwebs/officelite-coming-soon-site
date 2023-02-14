import React from 'react'

import { Hero } from './index'
import { StyledContainer, StyledHeader } from '../styles'

const Header = () => {
	return (
		<StyledHeader>
			<StyledContainer header>
				<Hero />
			</StyledContainer>
		</StyledHeader>
	)
}

export default Header

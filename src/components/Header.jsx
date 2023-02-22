import React from 'react'

import { Hero, Pattern } from './index'
import { StyledHeader } from '../styles'

const Header = () => {
	return (
		<StyledHeader>
			<Pattern title='header' image='/bg-pattern-home-header.svg' />
			<Hero />
		</StyledHeader>
	)
}

export default Header

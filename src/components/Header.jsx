import React from 'react'

import { Hero, Pattern } from './index'
import { StyledHeader } from '../styles'
const Header = ({title}) => {
	return (
		<StyledHeader className={`${title} sectionCenter`}>
			<Pattern title='header' image='/bg-pattern-home-header.svg' />
			<Hero />
		</StyledHeader>
	)
}

export default Header

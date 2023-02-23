import React from 'react'

import { HomeHero, Pattern } from './index'
import { StyledHeader } from '../styles'
const HomeHeader = ({title}) => {
	return (
		<StyledHeader className={`${title} sectionCenter`}>
			<Pattern title='header' image='/bg-pattern-home-header.svg' />
			<HomeHero />
		</StyledHeader>
	)
}

export default HomeHeader

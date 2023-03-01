import React from 'react'

import { HomeHero, Pattern } from './index'
import { StyledHeader } from '../styles'
const HomeHeader = () => {
	return (
		<StyledHeader className='homePage sectionCenter'>
			<Pattern title='homePage' image='/bg-pattern-home-header.svg' />
			<HomeHero page='homePage' />
		</StyledHeader>
	)
}

export default HomeHeader

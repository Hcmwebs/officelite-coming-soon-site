import React from 'react'

import { Hero, Navbar } from './index'
import { StyledHeader } from '../styles'

const Header = () => {

	return (
		<StyledHeader>
			<Navbar />
			<Hero />
		</StyledHeader>
	)
}

export default Header

import React from 'react'
import { StyledPattern } from '../styles'

const Pattern = ({ title, image }) => {
	return (
		<StyledPattern className={title}>
			<img src={image} alt={`${title} pattern`} />
		</StyledPattern>
	)
}

export default Pattern

import React from 'react'
import { StyledCard } from '../styles'

const Card = ({ id, title, price, billing, info, storage, perks }) => {
	return (
		<StyledCard>
			<h2>{title}</h2>
			<h3>{price}</h3>
		</StyledCard>
	)
}

export default Card

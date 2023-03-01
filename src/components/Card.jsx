import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard } from '../styles'

const Card = ({
	id,
	title,
	price,
	billing,
	info,
	storage,
	perks,
	className,
	btnClassName,
}) => {
	return (
		<StyledCard className={className}>
			<h2>{title}</h2>
			<div className='cardBody'>
				<div className='price'>
					<h3>{price}</h3>
					<p>{billing}</p>
				</div>
				<div className='cardInfo'>
					<p>{info}</p>
					<p>{storage}</p>
					<p>{perks}</p>
				</div>
			</div>
			<Link to='/signup' className={btnClassName}>
				Try for Free
			</Link>
		</StyledCard>
	)
}

export default Card

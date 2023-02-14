import React from 'react'
import { Link } from 'react-router-dom'
import { homeHero } from '../data/Data'
import { StyledHero } from '../styles'

const Hero = () => {
	const { title, body } = homeHero
	return (
		<StyledHero>
			<img
				src='/illustration-home-charts.svg'
				alt='illustration Chart'
				className='heroHeader'
			/>
			<div className='heroBody'>
				<h1>{title}</h1>
				<p>{body}</p>
				<div>
					<Link to='/signup' className='btn primary'>
						Get Started
					</Link>
				</div>
			</div>
		</StyledHero>
	)
}

export default Hero

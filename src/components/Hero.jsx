import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledHero } from '../styles'


const Hero = () => {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();

	return (
		<StyledHero title={title}>
			<img
				src='/illustration-home-charts.svg'
				alt='illustration Chart'
				className='heroHeader'
			/>
			<div className='heroBody'>
				<h1>{title}</h1>
				<p>{body}</p>
				<Link to='/signup' className='btn primary'>
					Get Started
				</Link>
			</div>
		</StyledHero>
	)
}

export default Hero

import React from 'react'
import { homeHero } from '../data/Data'
import { Link } from 'react-router-dom'

const Header = () => {
	const { title, body } = homeHero
	return (
		<>
			<div>
				<img src='/illustration-home-charts.svg' alt='illustration Chart' />
				<div className='heroBody'>
					<h1>{title}</h1>
					<p>{body}</p>
				</div>
				<Link to ='/signup'>Get Started</Link>
			</div>
		</>
	)
}

export default Header

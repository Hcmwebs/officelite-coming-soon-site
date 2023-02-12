import React from 'react'
import { homeHero } from '../data/Data'
import { Link } from 'react-router-dom'
import { Navbar } from './index'

const Header = () => {
	const { title, body } = homeHero
	return (
		<>
			<Navbar />
			<div>
				<img src='/illustration-home-charts.svg' alt='illustration Chart' />
				<div className='heroBody'>
					<h1>{title}</h1>
					<p>{body}</p>
				</div>
				<Link to='/signup' className='btn primary'>
					Get Started
				</Link>
			</div>
		</>
	)
}

export default Header

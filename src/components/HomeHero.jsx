import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledHero } from '../styles'
import {homeHero} from '../data/Data'


const HomeHero = () => {

const {title,body} = homeHero

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
				<Link to='/signup' className='btn primary'>
					Get Started
				</Link>
			</div>
		</StyledHero>
	)
}

export default HomeHero

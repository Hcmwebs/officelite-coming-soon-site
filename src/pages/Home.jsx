import React from 'react'
import { Link } from 'react-router-dom'
import { Timer } from '../components'
import { timerDuration } from '../data/Data'

const Home = () => {
	return (
		<div>
			<h1>Welcome Home</h1>
			<Timer duration={timerDuration} />
			<Link to='SignUp'>Let's get Started!</Link>
		</div>
	)
}

export default Home

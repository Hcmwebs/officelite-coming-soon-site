import React from 'react'
import { Link } from 'react-router-dom'
import { Header, MainContent, Footer, Timer } from '../components'
import { timerDuration } from '../data/Data'

const Home = () => {
	return (
		<div>
			<MainContent />

			{/* <h1>Welcome Home</h1>
			<Timer duration={timerDuration} />
			<Link to='signup'>Let's get Started!</Link> */}
		</div>
	)
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { Header, MainContent, Footer} from '../components'


const Home = () => {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />

			{/* <h1>Welcome Home</h1>
			<Timer duration={timerDuration} />
			<Link to='signup'>Let's get Started!</Link> */}
		</div>
	)
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div>
			<h2>404</h2>
			<p>Oops! that page does not exist</p>
			<Link to='/'> return home</Link>
		</div>
	)
}

export default Error

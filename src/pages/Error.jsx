import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div>
			<h2>Oops! that page does not exist</h2>
			<Link to='/'> return home</Link>
		</div>
	)
}

export default Error

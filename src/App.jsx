import React from 'react'
import { Form, Timer } from './components'

const App = () => {
	return (
		<div>
			<h1>we are coming soon</h1>
			<Timer duration={30 * 24 * 60 * 60 * 1000} />
			<Form />
		</div>
	)
}

export default App

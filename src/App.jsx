import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignUp, Error } from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

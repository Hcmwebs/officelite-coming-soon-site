import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SharedLayout, Home, SignUp, Error } from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element = {<Home />}/>
					<Route path='signup' element={<SignUp />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

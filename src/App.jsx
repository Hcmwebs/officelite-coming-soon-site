import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Form, Timer } from './components'
import {Home, SignUp, Error} from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path ='/' element={<Home/>}/>
				<Route path ='SignUp' element={<SignUp/>}/>
				<Route path ='*' element={<Error/>}/>
			</Routes>
			<h1>we are coming soon</h1>
			<Timer duration={30 * 24 * 60 * 60 * 1000} />
			<Form />
		</BrowserRouter>
	)
}

export default App

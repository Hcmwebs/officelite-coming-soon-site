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
		</BrowserRouter>
	)
}

export default App

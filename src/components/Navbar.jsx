import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './index'

const Navbar = () => {
	return (
		<div>
			<nav>
				<NavLink
					to='/'
					style={({ isActive }) => {
						return { color: isActive ? 'salmon' : 'blue' }
					}}>
					{' '}
					Home
				</NavLink>
				<NavLink
					to='/signup'
					style={({ isActive }) => {
						return { color: isActive ? 'salmon' : 'blue' }
					}}>
					Sign up
				</NavLink>
			</nav>
		</div>
	)
}

export default Navbar

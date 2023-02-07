import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<Link to='/'> Logo</Link>
			<nav>
				<NavLink to='/' style ={({isActive}) =>{return {color:isActive? 'salmon': 'blue'}}}> Home</NavLink>
				<NavLink to='/signup' style ={({isActive}) =>{return {color:isActive? 'salmon': 'blue'}}}>Sign up</NavLink>
			</nav>
		</div>
	)
}

export default Navbar

import React from 'react'
import { Form, Timer } from '../components'
import { signUpHero, timerDuration } from '../data/Data'

const SignUp = () => {
	const { title, body } = signUpHero
	return (
		<div>
			<div className='heroBody'>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<Timer duration={timerDuration} />
			<Form />
		</div>
	)
}

export default SignUp

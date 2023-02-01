import React from 'react'
import { formInputs } from '../data/Data'

const Form = () => {
	const handleChange = (e) => {}
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' placeholder='email@email.com' />
					<span>Please enter a valid email address</span>
				</div>
				<div className='form-group'>
					<label htmlFor='select'>Select</label>
					<select name='pack' placeholder='Basic pack free'>
						<option>Basic pack free</option>
						<option>Pro Pack $9.99</option>
						<option>Ultimate Pack $19.99</option>
					</select>
					<span>Please choose one option</span>
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Phone number :</label>
					<input type='email' placeholder= {parseInt('+1234566789')} />
					<span>Please enter a valid phone number</span>
				</div>
				<div className='form-group'>
					<label htmlFor='company'>Company</label>
					<input type='text' placeholder='Company name' />
					<span>Please enter your company name</span>
				</div>
			</form>
		</div>
	)
}

export default Form

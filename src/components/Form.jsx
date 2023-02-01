import React from 'react'

const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='formGroup'>
					<label htmlFor='email'> Email</label>
					<input type='email' />
					<select name='plan' id='plan'>
						<option value='Basic free plan'>Basic Free Plan</option>
						<option value='Pro Pack'>Pro Pack 9.99 $ </option>
						<option value='Ultimate Pack'>Ultimate Pack $19.99</option>
					</select>
					<input type='phone number' />
					<input type='text' />
					<input type='email' />
				</div>
			</form>
		</div>
	)
}

export default Form

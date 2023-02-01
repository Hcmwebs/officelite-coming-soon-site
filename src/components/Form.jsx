import React, { useState } from 'react'

const Form = () => {
	const [values, setValues] = useState({
		email: '',
		plan: '',
		phone: '',
		company: '',
	})

	const [registers, setRegisters] = useState([])
	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.email && values.plan && values.phone && values.company) {
			const newRegister = { ...values, id: new Date().getTime().toString() }
			setRegisters([...registers, newRegister])
			console.log(registers);
			setValues({ email: '', plan: '', phone: '', company: '' })
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email : </label>
					<input
						type='email'
						name='email'
						id='email'
						value={values.email}
						placeholder='email.email.com'
						onChange={handleChange}
						required
					/>
					<span>Please enter a valid email address</span>
				</div>
				<div className='form-group'>
					<label htmlFor='plan'>Plan : </label>
					<select
						name='plan'
						id='plan'
						placeholder='Basic pack free'
						value={values.plan}
						onChange={handleChange}>
						<option value='Basic pack free'>Basic pack free</option>
						<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
						<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
					</select>
					<span>Please choose one option</span>
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Phone number :</label>
					<input
						type='text'
						placeholder='+1234566789'
						name='phone'
						value={values.phone}
						onChange={handleChange}
						id='phone'
					/>
					<span>Please enter a valid phone number</span>
				</div>
				<div className='form-group'>
					<label htmlFor='company'>Company :</label>
					<input
						name='company'
						type='text'
						placeholder='Company name'
						value={values.company}
						onChange={handleChange}
						id='company'
					/>
					<span>Please enter your company name</span>
				</div>
				<button  className='submit'>
					Send
				</button>
			</form>

		</div>
	)
}

export default Form

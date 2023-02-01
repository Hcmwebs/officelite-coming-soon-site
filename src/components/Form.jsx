import React, { useState } from 'react'

const initialValues = { email: '', plan: '', phone: '', company: '' }

const Form = () => {
	const [values, setValues] = useState(initialValues)
	const [error, setError] = useState('')
	const [registers, setRegisters] = useState([])
	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		for (let name in values) {
			if (values[name] === '') {
				setError(`Please provide the ${name}`)
				return
			}
		}
		setError('')
		const newRegister = { ...values, id: new Date().getTime().toString() }
		setRegisters([...registers, newRegister])
		setValues({ email: '', plan: '', phone: '', company: '' })
	}
	return (
		<>
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
					{error && <span>{error}</span>}
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
					{error && <span>{error}</span>}
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
					{error && <span>{error}</span>}
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
					{error && <span>{error}</span>}
				</div>
				<button className='submit'>Send</button>
			</form>
		</>
	)
}

export default Form

import React, { useState } from 'react'

const initialValues = { email: '', plan: '', phone: '', company: '' }
const Form = () => {
	const [values, setValues] = useState(initialValues)
	const [error, setError] = useState(false)
	const [registers, setRegisters] = useState([])
	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.email && values.pack && values.phone && values.company) {
			setError(false)
			const newRegister = { ...values, id: new Date().getTime().toString() }
			setRegisters([...registers, newRegister])
			setValues({ email: '', plan: '', phone: '', company: '' })
		}
		setError(true)
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
					/>
					{error && <span>Please enter a valid email address </span>}
				</div>
				<div className='form-group'>
					<label htmlFor='pack'>Pack : </label>
					<select
						name='pack'
						id='pack'
						value={values.pack}
						onChange={handleChange}>
						<option value='Basic pack free'>Basic pack Free</option>
						<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
						<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
					</select>
					{error && <span>Please select one of the options</span>}
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
					{error && <span>Please enter a valid phone number</span>}
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
					{error && <span>Please enter a company name</span>}
				</div>

				<button className='submit'>Send</button>
			</form>
			<div>
				{registers.map((entry) => {
					const { id, company, phone, pack, email } = entry
					return (
						<div key={id}>
							<h4>{company}</h4>
							<h4>{email}</h4>
							<h4>{phone}</h4>
							<h4>{pack}</h4>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Form

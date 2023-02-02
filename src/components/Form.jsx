import React, { useState } from 'react'
import { FormInputs } from './index'

const initialValues = { email: '', plan: '', phone: '', company: '' }
const Form = () => {
	const [values, setValues] = useState(initialValues)
	const [error, setError] = useState(true)
	const [companies, setCompanies] = useState([])

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// if (values.email && values.pack && values.phone && values.company) {
		// 	setError(false)
		// 	const newCompany = { ...values, id: new Date().getTime().toString() }
		// 	setCompanies([...companies, newCompany])
		// 	setValues({ email: '', plan: '', phone: '', company: '' })
		// }
		// setError(true)
	}

	console.log(values)
	return (
		<>
			<form onSubmit={handleSubmit}>
				<FormInputs onChange={handleChange} value={values.name} error={error} />

				{/* <div className='form-group'>
					<label htmlFor='email'>Email : </label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='email.email.com'
						values = {values.name}
						onChange={handleChange}
						required
					/>
					{error && <span>Please enter a valid email address </span>}
				</div>
				<div className='form-group'>
					<label htmlFor='pack'>Pack : </label>
					<select name='pack' id='pack' onChange={handleChange}>
						required
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
						values = {values.name}
						onChange={handleChange}
						required
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
						values = {values.name}
						onChange={handleChange}
						required
						id='company'
					/>
					{error && <span>Please enter a company name</span>}
				</div> */}
				<button className='submit'>Send</button>
			</form>
			<div>
				{companies.map((newCompany) => {
					const { id, company, phone, pack, email } = newCompany
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

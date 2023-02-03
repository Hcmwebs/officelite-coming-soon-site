import React, { useState } from 'react'
import styled from 'styled-components'
const Form = () => {
	const [values, setValues] = useState({
		email: '',
		plan: '',
		phone: '',
		company: '',
	})
	const [error, setError] = useState(false)
	const [companies, setCompanies] = useState([])

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		if (values.email && values.pack && values.phone && values.company) {
			setError(false)
			const newCompany = { ...values, id: new Date().getTime().toString() }
			setCompanies([...companies, newCompany])
			setValues({ email: '', plan: '', phone: '', company: '' })
		}
		setError(true)
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email : </label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='email.email.com'
						value={values.email}
						onChange={handleChange}
						required
					/>
					{error && (
						<span className='error'>Please enter a valid email address </span>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='pack'>Pack : </label>
					<select
						name='pack'
						id='pack'
						value={values.pack}
						onChange={handleChange}
						required>
						<option value='Basic pack free'>Basic pack Free</option>
						<option value='Pro Pack $9.99'>Pro Pack $9.99</option>
						<option value='Ultimate Pack $19.99'>Ultimate Pack $19.99</option>
					</select>
					{error && (
						<span className='error'>Please select one of the options</span>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='phone'>Phone number :</label>
					<input
						type='text'
						id='phone'
						name='phone'
						placeholder='+1234566789'
						value={values.phone}
						onChange={handleChange}
						required
					/>
					{error && (
						<span className='error'>Please enter a valid phone number</span>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='company'>Company :</label>
					<input
						name='company'
						id='company'
						type='text'
						placeholder='Company name'
						value={values.company}
						onChange={handleChange}
						required
					/>
					{error && <span className='error'>Please enter a company name</span>}
				</div>

				<button className='submit'>Send</button>
			</StyledForm>
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

const StyledForm = styled.form`
	input[invalid] ~ span {
		display: block;
	}
	span {
		color: red;
		font-size: 12px;
		display: none;
	}
`

export default Form

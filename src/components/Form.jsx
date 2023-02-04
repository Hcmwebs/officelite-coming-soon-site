import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FormInputs } from './index'
const initialState = { email: '', plan: '', phone: '', company: '' }
const Form = () => {
	// const navigate = useNavigate()
	const [values, setValues] = useState(initialState)
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
			Form.reset()

			// setTimeout(() => {
			// 	setValues(initialState)
			// 	navigate('/')
			// }, 5000)
		}

		setError(true)
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<FormInputs handleChange={handleChange} values={values} error={error} />

				{/* <div className='form-group'>
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
				</div> */}

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
	width: min(100%, 300px);
	box-sizing: border-box;
	padding: 30px 40px;
	background-color: salmon;
	border-radius: 10px;
	display: grid;
	gap: 10px;
	margin: 0 auto;
	.form-group {
		display: grid;
		gap: 5px;
	}
	label {
		font-size: 12px;
		color: #f4fff4;
	}
	input,
	select {
		padding: 10px;
		margin: 10px 0;
		border: 2px solid #f4fff4;
		border-radius: 5px;
		outline: none;
	}
	input:invalid[focused='true'] {
		border: 3px solid red;
	}
	input:invalid[focused='true'] ~ .error {
		display: block;
	}
	.error {
		font-size: 12px;
		padding: 3px;
		color: black;
		display: none;
	}

	.submit {
		width: 100%;
		font-size: 18px;
		margin-top: 15px;
		margin-bottom: 30px;
		padding: 12px 24px;
		color: #fff;
		background-color: #f46c5d;
		border: 1px solid #fff;
		outline: none;
		border-radius: 5px;
		cursor: pointer;
	}
`

export default Form

import React, { useState } from 'react'
import styled from 'styled-components'
import { FormInputs } from './index'
import { useNavigate } from 'react-router-dom'


const initialState = {
	email: '',
	pack: 'Select pack',
	phone: '',
	company: '',
}

const Form = () => {
	const [values, setValues] = useState(initialState)
	const [companies, setCompanies] = useState([])
	const [error, setError] = useState(false)
	const [focused, setFocused] = useState(false)
	
	const navigate = useNavigate()

	const handleFocus = (e) => {
		setFocused(true)
	}

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!values.email && !values.pack && !values.phone && !values.company)
			return

		setError(false)
		const newCompany = { ...values, id: new Date().getTime().toString() }
		setCompanies([...companies, newCompany])
		setValues(initialState)
		setFocused(false)

		setTimeout(() =>{
			navigate('/')
		}, 5000)
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<FormInputs
					handleChange={handleChange}
					values={values}
					error={error}
					focused={focused}
					handleFocus={handleFocus}
				/>
				<button className='submit' type='submit'>
					Send
				</button>
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
	input:invalid[focused='true'],
	select:invalid[focused='true'] {
		border: 3px solid red;
	}
	input:invalid[focused='true'] ~ .error,
	select:invalid[focused='true'] ~ .error {
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

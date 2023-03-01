import React, { useState } from 'react'
import { FormInputs } from './index'
import { useNavigate } from 'react-router-dom'
import { StyledForm } from '../styles'

const initialState = {
	fullname: '',
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
		if (
			!values.fullname &&
			!values.email &&
			!values.pack &&
			!values.phone &&
			!values.company
		)
			return

		setError(false)
		const newCompany = { ...values, id: new Date().getTime().toString() }
		setCompanies([...companies, newCompany])
		setValues(initialState)
		setFocused(false)

		setTimeout(() => {
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
				<button className='btn primary submit' type='submit'>
					Get on the list
				</button>
			</StyledForm>
		</>
	)
}

export default Form
